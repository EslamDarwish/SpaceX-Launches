# Troubleshooting `UnknownDependenciesException` for `JwtAuthGuard`

When running a NestJS application you may see an error similar to the following during boot:

```
Nest can't resolve dependencies of the JwtAuthGuard (?, ConfigService, PrismaService).
Please make sure that the argument JwtService at index [0] is available in the UsersModule context.
```

This error means that the NestJS dependency injection container cannot find a `JwtService` provider when it tries to construct your `JwtAuthGuard`. Typically this happens because the module that defines the guard does not import the Nest `JwtModule` (or another module that exports `JwtService`).

## How to fix it

1. **Import `JwtModule` in the module that declares the guard.**

   ```ts
   import { JwtModule } from '@nestjs/jwt';

   @Module({
     imports: [JwtModule.register({
       secret: process.env.JWT_SECRET,
       signOptions: { expiresIn: '1h' },
     })],
     providers: [JwtAuthGuard],
     exports: [JwtAuthGuard],
   })
   export class UsersModule {}
   ```

2. **Or re-export `JwtService` from a shared authentication module.**

   If you already configure JWT in an `AuthModule`, export the `JwtModule` (or a custom provider that wraps `JwtService`) and import that module anywhere you need to use the guard.

   ```ts
   @Module({
     imports: [JwtModule.register({...})],
     providers: [AuthService, JwtStrategy],
     exports: [JwtModule],
   })
   export class AuthModule {}
   ```

   Then, in `UsersModule`:

   ```ts
   @Module({
     imports: [AuthModule],
     providers: [UsersService, JwtAuthGuard],
   })
   export class UsersModule {}
   ```

3. **Ensure the guard's constructor only requests providers that are available.**

   If your guard injects additional dependencies (for example, `PrismaService`), make sure those services are provided within the same module or imported modules.

After making these changes, restart the application. Nest should now be able to instantiate `JwtAuthGuard` without throwing `UnknownDependenciesException`.

## Example implementation in this repository

See [`backend/`](../backend) for a minimal NestJS setup that resolves the guard correctly. The `AuthModule` exports the configured `JwtModule`, and `UsersModule` imports it before providing `JwtAuthGuard`. This ensures the guard's constructor receives `JwtService` without triggering `UnknownDependenciesException`.

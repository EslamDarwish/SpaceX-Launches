# Backend Example for JwtAuthGuard Fix

This minimal NestJS backend demonstrates how to correctly wire the `JwtAuthGuard` so that Nest can resolve the `JwtService` dependency.

## Key points

- `AuthModule` registers and exports `JwtModule` using `registerAsync`, allowing other modules to inject `JwtService`.
- `UsersModule` imports `AuthModule` and provides `JwtAuthGuard` alongside any services/controllers that depend on it.
- `UsersController` applies the guard with `@UseGuards(JwtAuthGuard)`.

By following this structure, the dependency injection container will always have access to `JwtService` whenever it instantiates `JwtAuthGuard`, resolving the `UnknownDependenciesException`.

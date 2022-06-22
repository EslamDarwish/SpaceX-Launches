type payload_weight = {
  id: number;
  name: string;
  kg: number;
  lb: number;
};
export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: {meters: number; feet: number};
  diameter: {meters: number; feet: number};
  mass: {kg: number; lb: number};
  payload_weights: payload_weight[];
  flicker_images?: string[];
  wikipedia?: string;
  description?: string;
}
export interface RocketParams {
  query: {
    active?: boolean;
  };
}

import {Rocket, RocketParams} from './../models/rocket.model';
import apiClient from './client';
import {ListResponse} from '../models/response.model';
export const rocketApi = {
  getAll: (params: RocketParams, page: number) =>
    apiClient.post('rockets/query', {...params, options: {page}}).then(res => {
      return res.data as ListResponse<Rocket>;
    }),
};

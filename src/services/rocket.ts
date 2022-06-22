import {Rocket, RocketParams} from './../models/rocket.model';
import apiClient from './client';
import {ListResponse} from '../models/response.model';
export const rocketApi = {
  getAll: (params: RocketParams, page: number) =>
    apiClient.post('rockets/query', {...params, options: {page}}).then(res => {
      console.log(res.data.docs.length);
      return res.data as ListResponse<Rocket>;
    }),
};

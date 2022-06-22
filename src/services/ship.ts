import {Ship, ShipParams} from './../models/ship.model';
import apiClient from './client';
import {ListResponse} from '../models/response.model';
export const shipsApi = {
  getAll: (params: ShipParams, page: number) =>
    apiClient.post('ships/query', {...params, options: {page}}).then(res => {
      return res.data as ListResponse<Ship>;
    }),
};

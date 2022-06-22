import {Launch} from './../models/launch.model';
import apiClient from './client';
import {LaunchParams} from '../models/launch.model';
import {ListResponse} from '../models/response.model';
export const launchApi = {
  getAll: (params: LaunchParams, page: number) =>
    apiClient.post('launches/query', {...params, options: {page}}).then(res => {
      return res.data as ListResponse<Launch>;
    }),
};

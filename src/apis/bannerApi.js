import request from '@/apis/request';

export function apiGetBannerList(params) {
  return request.get('/cc/banner', { params });
}

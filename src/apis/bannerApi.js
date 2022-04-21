import request from '@/apis/request';

/**
 * 焦点图管理
 */
const bannerApi = {
  list: (params) => request.get('/cc/banner', { params }),
  add: (data) => request.post('/cc/banner', data),
  update: (data) => request.post('/cc/banner/edit', data),
  delete: (bannerId) => request.post(`/cc/banner/${bannerId}/delete`),
  updateGrades: (bannerId, gradeIds) => request.post(`/cc/banner/${bannerId}/grades`, gradeIds),
  updateSort: (gradeId, bannerId, sort) => request.post(`/cc/homepage/${gradeId}/banner/${bannerId}?sort=${sort}`),
};

export default bannerApi;

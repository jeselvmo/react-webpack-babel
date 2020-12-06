function getList() {
  return Object.values(this);
}

function getId(name) {
  const find = this.getList().find((item) => item.name === name);
  if (find) {
    return find.id;
  }
  return null;
}

function getName(id) {
  const find = this.getList().find((item) => item.id === id);
  if (find) {
    return find.name;
  }
  return null;
}

function getIdList(names) {
  let list = this.getList();
  if (names && Array.isArray(names)) {
    list = list.filter((item) => names.includes(item.name));
  }
  return list.map((item) => item.id);
}

function getNameList(ids) {
  let list = this.getList();
  if (ids && Array.isArray(ids)) {
    list = list.filter((item) => ids.includes(item.id));
  }
  return list.map((item) => item.name);
}

function getListById(ids) {
  return this.getList().filter((item) => ids.includes(item.id));
}

function getListByName(names) {
  return this.getList().filter((item) => names.includes(item.name));
}

function getOptions() {
  return this.getList().map((item) => ({ label: item.name, value: item.id }));
}

function defineProperties(obj, extraValues) {
  const properties = {
    getList: { value: getList },
    getId: { value: getId },
    getName: { value: getName },
    getIdList: { value: getIdList },
    getNameList: { value: getNameList },
    getListById: { value: getListById },
    getListByName: { value: getListByName },
    getOptions: { value: getOptions },
    ...extraValues,
  };

  Object.defineProperties(obj, properties);
}

const ALL = {
  all: { id: 0, name: '全部' },
};

// cs平台学校学段
export const SCHOOL_STAGE = {
  stage_1: { id: 1, name: '幼儿园' },
  stage_2: { id: 2, name: '小学' },
  stage_4: { id: 4, name: '初中' },
  stage_8: { id: 8, name: '职高' },
  stage_16: { id: 16, name: '高中' },
  stage_32: { id: 32, name: '大学' },
};

defineProperties(SCHOOL_STAGE);

// 年级
export const GRADE = {
  grade_1000: { id: 1000, name: '通用' },
  grade_101: { id: 101, name: '小小班' },
  grade_102: { id: 102, name: '小班' },
  grade_103: { id: 103, name: '中班' },
  grade_104: { id: 104, name: '大班' },
  grade_1: { id: 1, name: '一年级' },
  grade_2: { id: 2, name: '二年级' },
  grade_3: { id: 3, name: '三年级' },
  grade_4: { id: 4, name: '四年级' },
  grade_5: { id: 5, name: '五年级' },
  grade_6: { id: 6, name: '六年级' },
  grade_7: { id: 7, name: '初一' },
  grade_8: { id: 8, name: '初二' },
  grade_9: { id: 9, name: '初三' },
  grade_10: { id: 10, name: '高一' },
  grade_11: { id: 11, name: '高二' },
  grade_12: { id: 12, name: '高三' },
  grade_201: { id: 201, name: '大一' },
  grade_202: { id: 202, name: '大二' },
  grade_203: { id: 203, name: '大三' },
  grade_204: { id: 204, name: '大四' },
};
defineProperties(GRADE);

export const GRADE_OFF = {
  ...GRADE,
  grade_off: { id: -1, name: '下线' },
};
defineProperties(GRADE_OFF);

export const GRADE_ALL = {
  ...ALL,
  ...GRADE,
};
defineProperties(GRADE_ALL);

// 跳转类型
export const JUMP_TYPE = {
  1: { id: 1, name: '课程' },
  2: { id: 2, name: '科目' },
  3: { id: 3, name: '板块' },
  4: { id: 4, name: '链接' },
};
defineProperties(JUMP_TYPE);

// 内容类型
export const CONTENT_TYPE = {
  1: { id: 1, name: '视频' },
  2: { id: 2, name: '音频' },
};
defineProperties(CONTENT_TYPE);

// 上架状态
export const ONLINE_STATUS = {
  on: { id: 200, name: '出售中' },
  off: { id: 404, name: '下架中' },
};
defineProperties(ONLINE_STATUS);

export const ONLINE_STATUS_ALL = {
  ...ALL,
  ...ONLINE_STATUS,
};
defineProperties(ONLINE_STATUS_ALL);

// 审核结果
export const CHECK_RESULT = {
  waiting: { id: 102, name: '待审核' },
  success: { id: 200, name: '通过' },
  fail: { id: 403, name: '未通过' },
};
defineProperties(CHECK_RESULT);

export const CHECK_RESULT_ALL = {
  ...ALL,
  ...CHECK_RESULT,
};
defineProperties(CHECK_RESULT_ALL);

// 订单状态
export const ORDER_STATUS = {
  waiting: { id: 1, name: '待付款' },
  closed: { id: 4, name: '已关闭' },
  paid: { id: 7, name: '已支付' },
  refunded: { id: 12, name: '已退款' },
};
defineProperties(ORDER_STATUS);

export const ORDER_STATUS_ALL = {
  ...ALL,
  ...ORDER_STATUS,
};
defineProperties(ORDER_STATUS_ALL);

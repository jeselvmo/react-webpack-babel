export const modalFormLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

// 自定义验证规则
export const validatorRuls = {
  phone: { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
  email: { pattern: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, message: '请输入正确的邮箱地址' },
  ids: { pattern: /^\d+(,\d+)*$/, message: '请输入正确的ID，多个以“,”隔开' },
};

// info values
export const infoToValues = (info) => {
  const values = {
    jumpType: info.type,
  };

  switch (info.type) {
    case 1:
      values.courseId = info.param;
      break;
    case 2:
      values.subjectId = info.param;
      break;
    case 3:
      values.sectionId = info.param;
      break;
    case 4:
      values.url = info.param;
      break;
    default:
      break;
  }
  return values;
};

// values info
export const valuesToInfo = (values) => {
  const info = {
    type: values.jumpType,
    param: '',
  };

  switch (info.type) {
    case 1:
      info.param = values.courseId;
      break;
    case 2:
      info.param = values.subjectId;
      break;
    case 3:
      info.param = values.sectionId;
      break;
    case 4:
      info.param = values.url;
      break;
    default:
      break;
  }
  info.param = info.param.trim();
  return info;
};

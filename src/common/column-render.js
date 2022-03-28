import React from 'react';
import { Image, Avatar } from 'antd';
import { GRADE } from '@/common/Enum';

export default {
  renderIndex(text, record, index) {
    return index + 1;
  },
  renderText(text, width = 120) {
    return (
      <div className="text-two-rows" title={text} style={{ width }}>
        {text}
      </div>
    );
  },
  renderImage(text, width = 120, height) {
    return <Image src={text} width={width} height={height} preview />;
  },
  renderGrades(text = [], width) {
    return this.renderText(GRADE.getNameList(text || []).join('、'), width);
  },
  renderSections(text = []) {
    return this.renderText(text.map((item) => item.name).join('、'));
  },
  renderPrices(text, record) {
    return (
      <div className="list-price">
        <div>{record.price_real / 100}元</div>
        <div>{record.price_market / 100}元</div>
      </div>
    );
  },
  renderPrice(text) {
    return `${text / 100}元`;
  },
  renderAvatar(text, size = 'large') {
    return <Avatar size={size} src={text} />;
  },
  renderTime(text) {
    if (text) {
      return AppUtils.formatDateTime(text);
    }
    return '-';
  },
  renderRatio(text) {
    return `${text}%`;
  },
};

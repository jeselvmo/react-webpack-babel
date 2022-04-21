import React from 'react';
import Page from '@/components/page';
import { Toast, Swiper } from 'antd-mobile';

import './index.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

const classPrefix = 'g-swiper-demo';

class SwiperDemo extends React.PureComponent {
  render() {
    const items = colors.map((color, index) => (
      <Swiper.Item key={index}>
        <div
          className={`${classPrefix}-content`}
          style={{ background: color }}
          onClick={() => {
            Toast.show(`你点击了卡片 ${index + 1}`);
          }}
        >
          {index + 1}
        </div>
      </Swiper.Item>
    ));

    return (
      <Page className={classPrefix} title="SwiperDemo">
        <Swiper>{items}</Swiper>
      </Page>
    );
  }
}

export default SwiperDemo;

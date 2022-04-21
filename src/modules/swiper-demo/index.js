import React from 'react';
import { Swiper, Toast } from 'antd-mobile';

import './index.less';

import Page from '@/components/page';

const classPrefix = 'g-swiper-demo';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

class SwiperDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

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
      <Page className={classPrefix} title="Swiper Demo">
        <Swiper autoplay>{items}</Swiper>
      </Page>
    );
  }
}

export default SwiperDemo;

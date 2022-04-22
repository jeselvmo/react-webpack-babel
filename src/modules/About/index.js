import React from 'react';

import './index.less';

import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';
import SVG from '@/components/svg';

const classPrefix = 'g-about';

class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page className={classPrefix} title="About">
        <SVG src={require('@/images/arrow-up.svg')} />
      </Page>
    );
  }
}

export default Banner;

import React from 'react';

import styles from './index.less';

import Page from '@/components/Page';
import PlayIcon from '@/components/PlayIcon';

/**
 * 焦点图管理
 */
class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page title="About">
        <PlayIcon />
      </Page>
    );
  }
}

export default Banner;

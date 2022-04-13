import React from 'react';

import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';

/**
 * 焦点图管理
 */
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page title="dashboard">
        <PlayIcon />
        <PlayIcon />
      </Page>
    );
  }
}

export default Home;

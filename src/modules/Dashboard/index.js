import React from 'react';

import Page from '@/components/Page';
import PlayIcon from '@/components/PlayIcon';

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

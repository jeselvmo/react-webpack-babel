import React from 'react';
import Page from '@/components/page';
import PlayIcon from '@/components/play-icon';
import './index.less';

const classPrefix = 'g-dashboard';

class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page className={classPrefix} title="dashboard">
        <PlayIcon />
        <PlayIcon />
      </Page>
    );
  }
}

export default Dashboard;

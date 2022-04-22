import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Velocity from 'velocity-animate';
import './index.less';
import playIcon from './play.xml';

const classPrefix = 'g-play-icon';

class PlayIcon extends React.PureComponent {
  onSvgLoad = (e) => {
    const doc = e.target.getSVGDocument();
    const svg = doc.children[0];
    const rect0 = svg.children[0];
    const rect1 = svg.children[1];
    const rect2 = svg.children[2];

    setTimeout(() => {
      Velocity(rect0, { height: '26px', y: '3' }, { duration: 350, easing: 'swing', queue: false, loop: true });
    }, 0);
    setTimeout(() => {
      Velocity(rect1, { height: '26px', y: '3' }, { duration: 400, easing: 'swing', queue: false, loop: true });
    }, 100);
    setTimeout(() => {
      Velocity(rect2, { height: '26px', y: '3' }, { duration: 450, easing: 'swing', queue: false, loop: true });
    }, 200);
  };

  render() {
    const { className } = this.props;
    return <object className={classNames(classPrefix, className)} type="image/svg+xml" data={playIcon} onLoad={this.onSvgLoad} />;
  }
}

PlayIcon.propTypes = {
  className: PropTypes.string,
};

export default PlayIcon;

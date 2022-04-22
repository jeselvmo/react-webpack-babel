import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.less';

const classPrefix = 'g-svg';

const SVG = React.forwardRef((props, ref) => {
  let element = props.src.default || props.src; // esModule: true

  if (!element) {
    return null;
  }

  return (
    <svg ref={ref} className={classNames(classPrefix, props.className)} viewBox={element.viewBox}>
      <use xlinkHref={`#${element.id}`} />
    </svg>
  );
});

SVG.propTypes = {
  className: PropTypes.string,
  src: PropTypes.object.isRequired,
};

export default SVG;

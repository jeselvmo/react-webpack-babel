import React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

/* Higher Order Component to get parameters from the URL query string and initialize redux state
 * @param {React.Component} WrappedComponent: component to render
 * @returns {React.Component} component with query parsing behavior
 */
const QueryParserHOC = (WrappedComponent) => {
  class QueryParserComponent extends React.Component {
    constructor(props) {
      super(props);
      const parsed = qs.parse(window.location.search);
      console.log(parsed);
    }

    render() {
      const { ...componentProps } = this.props;
      return <WrappedComponent {...componentProps} />;
    }
  }

  const mapStateToProps = (state) => ({});
  const mapDispatchToProps = (dispatch) => ({});

  return connect(mapStateToProps, mapDispatchToProps)(QueryParserComponent);
};

export { QueryParserHOC as default };

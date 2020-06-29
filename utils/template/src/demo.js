import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* IMPORT OTHER SHARED COMPONENTS BEFORE STYLES */
import styles from './{{component}}.module.css';
import classnames from 'classnames/bind';
{{#if isThemed}}
import { withTheme } from '@wpe-lightning-ui/utilities';
{{/if}}

const cx = classnames.bind(styles);
/**
 * @visibleName  {{componentNameUpper}}
 */

const {{componentNameUpper}} = () => {
    return (  );
}

{{componentNameUpper}}.propTypes = {
  /** Add PropTypes */
}

{{componentNameUpper}}.defaultProps = {
  /** Add any defaults */
}

{{#if isThemed}}
export default withTheme({{componentNameUpper}});
{{else}}
export default {{componentNameUpper}};
{{/if}}

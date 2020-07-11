/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import Internationalization.
 */
import {IntlProvider, addLocaleData} from 'react-intl';
import intlDE from 'react-intl/lib/locale-data/de';
import intlEN from 'react-intl/lib/locale-data/en';
import intlMessagesDE from '../public/assets/translations/de.json';
import intlMessagesEN from '../public/assets/translations/en.json';

/**
 * Import Store.
 */
import {createStore} from 'redux';
import {Provider} from 'react-redux';

/**
 * Import Routes.
 */

/**
 * Import Styles.
 */

/**
 * Add internationalization for supported languages.
 */
addLocaleData(intlDE);
addLocaleData(intlEN);

/**
 * Create the store. TODO maybe put it in its own file?
 */
const store = createStore(reducer);

/**
 * The entry point of the application.
 */
class Index extends React.Component {
    // Initialize the component.
    constructor(props) {
        super(props);
    }

    // Render the component.
    render() {
        // Return the component UI.
        return (
            <Provider store={store}>
                <h1>Wessels</h1>
            </Provider>
        );
    }
}

/**
 * (Re-)Render the application.
 */
function render() {
    ReactDOM.render(
        <Index/>,
        document.getElementById('root')
    );
}

/**
 * Start the application.
 */
render();

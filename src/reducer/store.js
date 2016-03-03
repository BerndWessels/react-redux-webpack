/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Import immutable helpers.
 */
import {Map} from 'immutable';

/**
 * Import the store's reducers.
 */
import home from './home';

/**
 * This is the main reducer for the store.
 */
export default function (state = Map({home: Map()}), action) {
    return Map({
        home: home(state.get('home'), action)
    });
}
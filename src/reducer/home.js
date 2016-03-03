/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {Map} from 'immutable';

/**
 * This is the main reducer for the store's home.
 */
export default function(home = Map({something: 4711}), action) {
    console.log("!!!!!!!!", home);
    return home;
}
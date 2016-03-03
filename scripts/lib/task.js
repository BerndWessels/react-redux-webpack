/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function format(time) {
    return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

export default (name, fn) => () => {
    const start = new Date();
    console.log(`[${format(start)}] Starting '${name}'...`);
    return fn().then(() => {
        const end = new Date();
        const time = end.getTime() - start.getTime();
        console.log(`[${format(end)}] Finished '${name}' after ${time} ms`);
    });
};

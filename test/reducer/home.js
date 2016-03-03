/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2016 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../src/reducer/store';

describe('store', () => {

    it('has initial state', () => {
        const nextState = reducer();

        expect(nextState).to.equal(fromJS({
            home: {
                something: 4711
            }
        }));
    });

    it('works with existing state', () => {
        const state = fromJS({
           home: {
               something: 815
           }
        });
        const nextState = reducer(state);

        expect(nextState).to.equal(fromJS({
            home: {
                something: 815
            }
        }));
    });
});

'use strict';

const componentsVue = require('..');
const assert = require('assert').strict;

assert.strictEqual(componentsVue(), 'Hello from componentsVue');
console.info('componentsVue tests passed');

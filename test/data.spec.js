global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/lol/lol.js')
require('../src/data.js');

describe('window.LOL', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.LOL, 'object' );
  })
})

describe('window.LOL.filterData', () => {
  it('debería devolver "Aarox" al filtrar "Fighter"', () => {
    window.assert.equal(window.data.filterData(Object.values(window.LOL.data), "Fighter")[0].name, "Aatrox")
  })
})

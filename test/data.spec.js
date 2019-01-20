global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/lol/lol.js')
require('../src/data.js');

const dataTest = window.data

describe('window.data', () => {
  it('debería ser un objeto', () => {
    window.assert.equal(typeof window.LOL, 'object' );
  })
})

describe('window.data.filterData', () => {
  it('debería devolver "Aatrox" al filtrar "Fighter"', () => {
    window.assert.equal(window.data.filterData(Object.values(window.LOL.data), "Fighter")[0].name, "Aatrox")
  })
})

describe('window.data.sortData', () => {
  it('debería ser una función', () => {
    window.assert.equal(typeof window.data.sortData, 'function' );
  })

  it('debería retornar los champions ordenados de la A a la Z', ()   => {
    let orderA_Z = window.data.sortData(dataTest, 'name','az')
    window.assert.deepStrictEqual([orderA_Z[0].name, orderA_Z[1].name, orderA_Z[2].name, orderA_Z[3].name, orderA_Z[4].name],['Aatrox','Ahri','Akali','Alistar','Amumu']);
  }); 

  it('debería retornar los champions ordenados de la Z a la A', ()   => {
    let orderZ_A = window.data.sortData(dataTest, 'name','za')
    window.assert.deepStrictEqual([orderZ_A[0].name, orderZ_A[1].name, orderZ_A[2].name, orderZ_A[3].name, orderZ_A[4].name],['Zyra','Zilean','Ziggs','Zed','Zac']);
  });
})
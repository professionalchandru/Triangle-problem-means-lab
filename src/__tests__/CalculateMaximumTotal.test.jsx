import {expect, test, describe} from 'vitest'
import calculateMaximumTotal from '../calculateMaximumTotal'

describe('Test Maximum Total Funciton', () => {
  test('check maximum total function with 2 rows', () => {
    const inputArray = [[5], [9,6]];
    expect(calculateMaximumTotal(inputArray).maximumTotal).toBe(14);
    expect(calculateMaximumTotal(inputArray).selectedNodeIndexArrayObject).toEqual([{i:0, j:0}, {i:1, j:0}]);
  })

  test('check maximum total function with 5 rows', () => {
    const inputArray = [[5], [9,6], [6,3,65], [24,21,4,67], [48, 98, 1, 34, 55]];
    expect(calculateMaximumTotal(inputArray).maximumTotal).toBe(142);
    expect(calculateMaximumTotal(inputArray).selectedNodeIndexArrayObject).toEqual([{i:0, j:0}, {i:1, j:0}, {i: 2, j:0}, {i: 3, j: 0}, {i: 4, j:1}]);
  })
})
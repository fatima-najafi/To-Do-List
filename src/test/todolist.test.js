import 'jest-localstorage-mock';
import addData from '../module/addData.js';
import clearAllData from '../module/clearAllData.js';
import deletTasksFromLocalSorage from '../module/deleteData.js';
import { testCurrentValue, testEditValue } from './testEditData.js';
import getdata from '../module/getData.js';
import testCheckBoxValue from './testCheckData.js';

describe('Test methods', () => {
  test('should add data to the list', () => {
    addData('the');
    const data = getdata();
    expect(data.length).toBe(1);
  });

  test('should edit data from the list', () => {
    testCurrentValue('the');
    testEditValue('is');
    const data = getdata();
    expect(data[0].description).toBe('is');
  });
  // required changes
  test('should check the checkbox of data from the list', () => {
    const description = 'my todo description';
    const newStatus = true;

    // add a new todo with the given description and initial status
    const todo = { description, completed: false };
    localStorage.setItem('tasks', JSON.stringify([todo]));
    // call the tested function to update the todo's status
    testCheckBoxValue(description, newStatus);
    // todo's status updated correctly
    const data = JSON.parse(localStorage.getItem('tasks'));
    expect(data[0].completed).toBe(newStatus);
  });
  // finish required changes
  test('should delete the checked data from the list', () => {
    clearAllData();
    const data = getdata();
    expect(data.length).toBe(0);
  });

  test('should delete data from the list', () => {
    deletTasksFromLocalSorage('hi');
    const data = getdata();
    expect(data.length).toBe(0);
  });
});

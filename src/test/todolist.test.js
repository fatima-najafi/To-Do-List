/* eslint-disable quotes */
import "jest-localstorage-mock";
import addData from "../module/addData.js";
import clearAllData from "../module/clearAllData.js";
import deletTasksFromLocalSorage from "../module/deleteData.js";
import { testCurrentValue, testEditValue } from "./testEditData.js";

import getdata from "../module/getData.js";
import testCheckBoxValue from "./testCheckData.js";

describe("Test methods", () => {
  test("should add data to the list", () => {
    addData("test todo list the second part");
    const data = getdata();
    expect(data.length).toBe(1);
  });
  test("should edit the data from the list", () => {
    testCurrentValue("test todo list the second part");
    testEditValue("reading js");
    const data = getdata();
    expect(data[0].description).toBe("reading js");
  });
  test("should check the checkbox of data from the list", () => {
    testCheckBoxValue(true);
    const data = getdata();
    expect(data[0].completed).toBe(true);
  });

  test("should delete the checked data from the list", () => {
    clearAllData();
    const data = getdata();
    expect(data.length).toBe(0);
  });

  test("should delete data from the list", () => {
    deletTasksFromLocalSorage("hi");
    const data = getdata();
    expect(data.length).toBe(0);
  });
});

/* eslint-disable quotes */
import addData from "../module/addData.js";
import clearAllData from "../module/clearAllData.js";
import deletTasksFromLocalSorage from "../module/deleteData.js";
import getdata from "../module/getData.js";
import testCheckBoxValue from "./testCheckData.js";

describe("Test methods", () => {
  test("should add data to the list", () => {
    addData("read-book");
    const data = getdata();
    expect(data.length).toBe(1);
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

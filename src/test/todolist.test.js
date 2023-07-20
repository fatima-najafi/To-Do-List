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
  // change required
  beforeEach(() => {
    const todos = [
      {
        id: 1,
        description: "test todo list the second part",
        completed: false,
      },
      { id: 2, description: "another todo", completed: false },
    ];
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  describe("testCheckBoxValue", () => {
    test("should update the completed status of the todo with the given description", () => {
      testCheckBoxValue("test todo list the second part", true);
      const todos = JSON.parse(localStorage.getItem("todos"));
      expect(todos[0].completed).toBe(true);
      // expect(todos[1].completed).toBe(false);
    });
    test("should delete the checked data from the list", () => {
      const todos = [
        { id: 1, description: "test todo list", completed: true },
        { id: 2, description: "another todo", completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      clearAllData();
      expect(localStorage.getItem("todos")).toBe(null);
    });

    test("should delete data from the list", () => {
      const todos = [
        { id: 1, description: "test todo list", completed: false },
        { id: 2, description: "another todo", completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      deletTasksFromLocalSorage("test todo list");
      const remainingTodos = JSON.parse(localStorage.getItem("todos"));
      expect(remainingTodos).toHaveLength(1);
      expect(remainingTodos[0].description).toBe("another todo");
    });
  });
  // finish change required
  // test("should check the checkbox of data from the list", () => {
  //   testCheckBoxValue(true);
  //   const data = getdata();
  //   expect(data[0].completed).toBe(true);
  // });

  //   test("should delete the checked data from the list", () => {
  //     clearAllData();
  //     const data = getdata();
  //     expect(data.length).toBe(0);
  //   });

  //   test("should delete data from the list", () => {
  //     deletTasksFromLocalSorage("hi");
  //     const data = getdata();
  //     expect(data.length).toBe(0);
  //   });
});

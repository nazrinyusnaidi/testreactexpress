const controller = require("./dataQuery.controller");

test('adds 1 + 2 to equal 3', () => {
    expect(controller.testUnit(1, 2)).toBe(3);
  });
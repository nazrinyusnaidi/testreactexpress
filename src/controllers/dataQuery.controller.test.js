//const { DESCRIBE } = require("sequelize/types/query-types");
const controller = require("./dataQuery.controller");
const sinon = require('sinon');

const mockRequest = () => {
  return {
    users: []
  };
};

const mockResponse = () => {
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
};

test('adds 1 + 2 to equal 3', () => {
    expect(controller.testUnit(1, 2)).toBe(3);
  });



describe('API testing', () => {
  test('test GET request', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await controller.selectAll(req, res);
    expect(res.json).toBeDefined();
  });
});
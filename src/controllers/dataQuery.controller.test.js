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

test('adds 1 + 2 to equal 3:', () => {
    expect(controller.testUnit(1, 2)).toBe(3);
  });

  test('test function with factor calculation:', () => {
    expect(controller.testAnother(3)).toBe(6);
  });



describe('API testing', () => {
  test('test GET request', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await controller.selectAll(req, res);
    expect(res.json).toBeDefined();
  });

  test('test POST request', async () => {
    const req = {
      'name': "ded",
      'email': "ded@gmail.com",
      'status': "activated", 
      'device_id': "ded's iphone", 
      'platform': "mobile", 
      'role': "user"
    };
    const res = mockResponse();
    await controller.createRow(req, res);
    expect(res.statusCode).toEqual(201);
  });
});
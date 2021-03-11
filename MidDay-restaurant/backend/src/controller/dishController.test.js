const {
  getDish, getAllDishes, createDish, updateDish, deleteDish,
} = require('./dishController');
const Dish = require('../models/dishModel');

jest.mock('../models/dishModel');

describe('Given a createDish function', () => {
  describe('When is invoked with body name', () => {
    test('Then should call json', () => {
      const req = { body: { name: 'Canelón de carne' } };
      const res = { json: jest.fn() };

      createDish(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a getAllDishes function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {};

      Dish.find.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getAllDishes(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  test('Then should call status with value 500', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {};

    Dish.find.mockImplementationOnce(() => { throw new Error('Error'); });

    await getAllDishes(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});

describe('Given a getDish function', () => {
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call status', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };

      Dish.findById
        .mockImplementationOnce((query, callback) => callback(true));

      await getDish(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When is invoked with a first argument falsy', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };

      Dish.findById.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await getDish(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe('Given a updateDish function', () => {
  describe('When is invoked', () => {
    test('Then should call json with body', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
        body: {
          name: 'Ensalada',
        },
      };

      Dish.findByIdAndUpdate.mockImplementationOnce(() => ({ populate: jest.fn() }));

      await updateDish(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('Then should call status with value 500', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
      params: {
          id: 1,
        },
        body: {
          name: 'Ensalada',
        },
      };

      Dish.findByIdAndUpdate.mockImplementationOnce(() => { throw new Error('Error'); });

      await updateDish(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});

describe('Given a deleteDish function', () => {
  describe('When is invoked', () => {
    test('Then should call json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };

      Dish.findByIdAndDelete
        .mockImplementationOnce(() => ({ populate: jest.fn() }));

      await deleteDish(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When is invoked with a first argument truthy', () => {
    test('Then should call send', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn(),
      };
      const req = {
        params: {
          id: 1,
        },
      };

      Dish.findByIdAndDelete
        .mockImplementationOnce((query, callback) => callback(true));

      await deleteDish(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
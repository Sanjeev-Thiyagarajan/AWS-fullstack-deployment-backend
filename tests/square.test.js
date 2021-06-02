const square = require("../utils/square");

test("Should calculate square of number", () => {
  const squaredValue = square(4);

  //   if (squaredValue != 16) {
  //     throw new Error(`Squared value was ${squaredValue}, should have been 16`);
  //   }

  expect(squaredValue).toBe(16);
});

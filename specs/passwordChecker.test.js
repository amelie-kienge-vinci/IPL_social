import { Main } from "../src/passwordChecker";

describe("passwordChecker", () => {
  let main = new Main();

  it("should return false when password is less than 8 characters", () => {
    expect(main.passwordChecker("1234567")).toBe(false);
  });
 



});
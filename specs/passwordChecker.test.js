import { Main } from "../src/passwordChecker";

describe("passwordChecker", () => {
  let main = new Main();

  it("should return false when password is less than 8 characters", () => {
    expect(main.passwordChecker("1234567")).toBe(false);
  });

  it("should return true when password is 8 characters or more", () => {
    expect(main.passwordChecker("12345678")).toBe(true);
  });
  it("should return false when password don't contains any special char", () => {
    expect(main.passwordChecker("123djddddddd")).toBe(false);
  });
  it("should return true when password contains special char", () => {
    expect(main.passwordChecker("123djddddd!dd")).toBe(true);
  });
  
});

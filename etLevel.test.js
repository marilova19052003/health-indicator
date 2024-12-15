// getLevel.test.js
import { getLevel } from "./getLevel";
import fetchData from "./http";

jest.mock("./http");

test("returns level when fetchData is successful", () => {
  fetchData.mockReturnValue({ status: "ok", level: 5 });

  expect(getLevel(1)).toBe("Ваш текущий уровень: 5");
});

test("returns error message when fetchData fails", () => {
  fetchData.mockReturnValue({ status: "error" });

  expect(getLevel(1)).toBe("Информация об уровне временно недоступна");
});

// healthIndicator.test.js
import { getHealthStatus } from "./healthIndicator";

test("health > 50 returns healthy", () => {
  expect(getHealthStatus({ name: "Маг", health: 90 })).toBe("healthy");
});

test("health between 15 and 50 returns wounded", () => {
  expect(getHealthStatus({ name: "Воин", health: 30 })).toBe("wounded");
});

test("health < 15 returns critical", () => {
  expect(getHealthStatus({ name: "Лучник", health: 10 })).toBe("critical");
});

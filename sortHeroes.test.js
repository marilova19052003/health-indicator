// sortHeroes.test.js
import { sortHeroes } from "./sortHeroes";

test("sorts heroes by health in descending order", () => {
  const heroes = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];
  const sortedHeroes = sortHeroes(heroes);
  expect(sortedHeroes).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
});

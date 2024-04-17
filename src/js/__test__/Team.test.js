import Team from "../Team";
import { zombie, bowerman, undead, daemon } from "../Character";
  
test('Должен добавляться новый персонаж', () => {
   const team = new Team();
   team.add(zombie);
   expect(team.members).toEqual(new Set([zombie]));
});

test('Не должен повторно добавляться существующий персонаж', () => {
   const team = new Team();
   team.add(zombie);
   expect(() => team.add(zombie)).toThrow('Персонаж уже существует, выберите другого персонажа');
});

test('Должна добавляться группа персонажей', () => {
   const team = new Team();
   team.addAll(zombie, bowerman, undead);
   expect(team.members).toEqual(new Set([zombie, bowerman, undead]));
});

test('Список персонажей должен конвертироваться в массив', () => {
   const team = new Team();
   team.addAll(zombie, bowerman, undead, daemon);
   expect(team.toArray()).toEqual([zombie, bowerman, undead, daemon]);
});
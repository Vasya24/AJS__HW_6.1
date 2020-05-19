import { Character } from '../../index'


let vasya = new Character('Базелиус', 'Daemon');
test('Name test', () => {
    
    if (vasya.name.length < 2) {
        throw Error('Слишком короткое имя')
      } else if (name.length > 10) {
         throw Error('Слишком длинное имя')
      };    
})

test('Type test', () => {
    if (typeof vasya.type != 'string') {
        throw Error('Только строковое значение!')
      }
    if (vasya.type === 'Bowman' || vasya.type === 'Undead') {
        vasya.attack = 25;
        vasya.defence = 25;
      } else if (vasya.type === 'Swordsman' || vasya.type === 'Zombie') {
         vasya.attack = 40;
         vasya.defence = 10;
      } else if (vasya.type === 'Magician' || vasya.type === 'Daemon') {
        vasya.attack = 10;
        vasya.defence = 40;
      };
})

test('Final test', () => {
expect(vasya.attack).toBeLessThan(vasya.defence)
})
import { Character } from '../../index'


let vasya = new Character('Базелиус', 'Daemon');

test('Basic test', () => {
expect(vasya.attack).toBeLessThan(vasya.defence)
})
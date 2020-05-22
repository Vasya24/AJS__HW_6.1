import { Character } from '../../index'


let vasya = new Character('Базелиус', 'Daemon');

test('Name test', () => {
expect(typeof vasya.type).toBe('string')
})
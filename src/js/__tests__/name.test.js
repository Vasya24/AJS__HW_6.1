import { Character } from '../../index'


let vasya = new Character('Базелиус', 'Daemon');

test('Name test', () => {
expect(vasya.name.length).toBeGreaterThan(1)
})
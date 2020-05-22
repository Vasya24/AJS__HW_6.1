function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack;
  this.defence;
 
  if (name.length < 2) {
    throw new Error('Слишком корокткое имя')
  } else if (name.length > 10) {
     throw Error('Слишком длинное имя')
  };
  if (typeof type != 'string') {
    throw new Error('Только строковое значение!')
  }
if (type === 'Bowman' || type === 'Undead') {
    this.attack = 25;
    this.defence = 25;
  } else if (type === 'Swordsman' || type === 'Zombie') {
     this.attack = 40;
     this.defence = 10;
  } else if (type === 'Magician' || type === 'Daemon') {
    this.attack = 10;
    this.defence = 40;
  };
}

export{ Character }
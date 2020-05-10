function Character(name, type) {
    this.name = name;
    this.type = type;
    
    if (name.length < 2) {
      throw Error('Слишком корокткое имя')
    } else if (name.length > 10) {
      throw Error('Слишком длинное имя')
    };
    if (typeof type != 'string') {
      throw Error('Только строковое значение!')
    }
  }
  
  function NewChar(name, type) {
    Character.call(this, name, type);
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
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
    console.log(`Имя: ${this.name}\nТип: ${this.type}\nЗдоровье: ${this.health}\nУровень: ${this.level}\nАтака: ${this.attack}\nЗащита: ${this.defence}`)
  }
  
  let sword = new NewChar('Базеилус', 'Swordsman');

  export {sword}
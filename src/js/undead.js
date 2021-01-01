import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super();
    this.name = name;
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

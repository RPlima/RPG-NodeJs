const { TestResult } = require('@jest/types');
import { Player } from '../Model/Player';
import { Monster } from '../Model/Monster';
import { RegularFight } from '../Model/Fight/RegularFight';

  describe('Regular fight', () => {
    var player = new Player("molina");
    var initMonster = new Monster();
    var regularFight = new RegularFight();
    var monster = initMonster.CreateMonsterTest(0,0,1);
    test('Monster die during a fight with player', () => {
      regularFight.Fight(player, monster);
      expect(monster.LifePoints).toBe(0);
    });

});
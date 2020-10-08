const { TestResult } = require('@jest/types');
import { Player } from '../Model/Player';
import { Monster } from '../Model/Monster';
import { RegularFight } from '../Model/Fight/RegularFight';

  describe('Regular fight', () => {
    var player = new Player("Molina");
    player.CreatePlayerTest();
    var regularFight = new RegularFight();
    test('Monster die during a fight with player', () => {
      regularFight.Fight(player);
      expect(player.LifePoints).toBeLessThan(100)
      
    });

});
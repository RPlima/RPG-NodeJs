const { TestResult } = require('@jest/types');
import { Player } from '../Model/Player';
import { RegularFight } from '../Model/Fight/RegularFight';
import { Lootbag } from '../Model/Lootbag';

  describe('Regular fight', () => {
    var player = new Player("Molina");
    player.CreatePlayerTest();
    var regularFight = new RegularFight();
    // var testando = ["texto","text","tex","te","t",""];
    // var teste = Any();
    // teste = testando;
    // console.log(teste.name);
    it('Player health drop when he attack a monster', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.LifePoints).toBeLessThan(100);
      
    });

    test('Experience must increase when player kill the monster', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.Experience).toBeGreaterThan(0);


    });

    test('Coins must increase when player kill the monster', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.Coins).toBeGreaterThan(0);

    });

    //TODO
    it('Player may die if his life points hits 0 or less', () => {
      var playerWeek = new Player("Molina");
      var loot = new Lootbag(playerWeek.ExperienceToNextLevel + 400,0,null)
      playerWeek.ReceiveDrop(loot);
      var expInitial = playerWeek.Experience;
      var level = playerWeek.Level;
      var coins = playerWeek.Coins;
      playerWeek.CreateWeakPlayerTest
      regularFight.Fight(playerWeek);
      expect(playerWeek.Level).toBe(level)
      expect(playerWeek.Experience).toBeLessThan(expInitial)
      expect(playerWeek.Coins).toBeLessThan(coins)
    });

});
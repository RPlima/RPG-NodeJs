const { TestResult } = require('@jest/types');
import { Player } from '../Model/Player';
import { Monster } from '../Model/Monster';
import { RegularFight } from '../Model/Fight/RegularFight';

  describe('Regular fight', () => {
    var player = new Player("Molina");
    player.CreatePlayerTest();
    var regularFight = new RegularFight();
    test('Monster die during a fight with player', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.LifePoints).toBeLessThan(100);
      console.log("Player tomou dano e seu HP desceu para " + player.LifePoints);
      
    });

    test('Experience must increase when player kill the monster', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.Experience).toBeGreaterThan(0);
      console.log("Experiencia do cliente subiu para" + player.Experience);


    });

    test('Coins must increase when player kill the monster', () => {
      player.CreatePlayerTest();
      regularFight.Fight(player);
      expect(player.Coins).toBeGreaterThan(0);
      console.log("Moedas do cliente subiu para" + player.Coins);
    });

    test('LEVEL UP when kill a monster', () => {
       
    
    });

    //TODO
    test('Player may die if his life points hits 0 or less', () => {
      player.CreateWeakPlayerTest();
      regularFight.Fight(player);

    });
});
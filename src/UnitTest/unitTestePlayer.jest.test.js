const { TestResult } = require('@jest/types');
import { Lootbag } from '../Model/Lootbag';
import { Player } from '../Model/Player';

  describe('Create Player', () => {
    var player = new Player("molina");

    test('have 100 lifepoints', () => {
      expect(player.LifePoints).toBe(100);
    });

    test('have name not null or empty', () => {
      expect(player.Name).not.toHaveLength(0);
    });

    test('have level equals 1', () => {
      expect(player.Level).toBe(1);
    });

    test('have experience equals 0', () => {
      expect(player.Experience).toBe(0);
    });

    test('have attack equals 1', () => {
      expect(player.Attack).toBe(1);
    });
    
    test('have defense equals 1', () => {
      expect(player.Defense).toBe(1);
    });
  });

describe('Actions Player', () => {
  var player = new Player("Shake");
  test('Receive damage', () => {
    player.ReceiveDamage(2);
    expect(player.LifePoints).toBeLessThan(player.MaxLifePoints);
  });

  test('LEVEL UP!', () => {
    var loot = new Lootbag(player.ExperienceToNextLevel,0,null)
    var attackInitial = player.Attack;
    var expInitial = player.Experience;
    var level = player.Level;
    var maxLife = player.MaxLifePoints;
    player.ReceiveDrop(loot);
    expect(player.Attack).toBeGreaterThan(attackInitial);
    expect(player.Experience).toBeGreaterThan(expInitial);
    expect(player.MaxLifePoints).toBeGreaterThan(maxLife);
    expect(player.Level).toBeGreaterThan(level);
  });
});





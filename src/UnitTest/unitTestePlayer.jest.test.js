const { TestResult } = require('@jest/types');
var lib_Player =  require('../Model/Player.ts');
  describe('Create Player', () => {
    var player = new lib_Player.Player("molina");
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
  var player = new lib_Player.Player("Shake");
  test('receive damage', () => {
    player.ReceiveDamage(2);
    expect(player.LifePoints).toBe(99);
  });
});





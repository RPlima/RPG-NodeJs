var lib_Player =  require('../Model/Player.ts');
  describe('creat player', () => {
    var player = new lib_Player.Player("jhon");
    test('have 100 lifepoints', () => {
      expect(player.LifePoints).toBe(100);
    });
  });




const { TestResult } = require('@jest/types');
import { Monster } from '../Model/Monster';
  var monster = new Monster();
  describe('GetRandomDropVariation Method', () => {
    it('should return a percent of the number that must be between the min and the max',() =>   {

        const randomDrop = monster.GetRandomDropVariation(100)

        expect(randomDrop).toBeLessThanOrEqual(100 + monster.maxVariationOnDrop)
        expect(randomDrop).toBeGreaterThanOrEqual(100 + monster.minVariationOnDrop)

       
    });

    it('should return a random number, not the same number 3x on sequence',() =>   {

        const random1 = monster.GetRandomDropVariation(100)
        const random2 = monster.GetRandomDropVariation(100)

        expect(random1).not.toBe(random2)
        
    });
  });

  describe('Recieve damage', () => {
    var monster = new Monster();

    it('Should receive damage when attacked', () => {

      monster.CreateMonsterTest();
      monster.ReceiveDamage(50);
      expect(monster.LifePoints).toBeLessThan(monster.MaxLifePoints);

    });
  });


  
const { TestResult } = require('@jest/types');
var lib_Monster=  require('../Model/Monster.ts');
  describe('GetRandomDropVariation Method', () => {

    var monster = new lib_Monster.Monster();

    it('should return a percent of the number that must be between the min and the max',() =>   {

        const randomDrop = monster.GetRandomDropVariation(100)

        expect(randomDrop).toBeLessThanOrEqual(100 + monster.maxVariationOnDrop)
        console.log(randomDrop);
        expect(randomDrop).toBeGreaterThanOrEqual(100 + monster.minVariationOnDrop)

       
    });

    it('should return a random number, not the same number 3x on sequence',() =>   {

        const random1 = monster.GetRandomDropVariation(100)
        const random3 = monster.GetRandomDropVariation(100)
        const random2 = monster.GetRandomDropVariation(100)

        expect(random1).not.toBe(random2)
        expect(random1).not.toBe(random3)
        expect(random2).not.toBe(random3)
        
    });



  });
const { TestResult } = require('@jest/types');
var lib_Monster=  require('../Model/Monster.ts');
  describe('GetRandomDropVariation Method', () => {

    var monster = new lib_Monster.Monster();

    it('should return a number between the min and the max',() =>   {

        const random = monster.GetRandomDropVariation()

        expect(random).toBeLessThanOrEqual(100 + monster.maxVariationOnDrop)
        console.log(random);
        expect(random).toBeGreaterThanOrEqual(100 + monster.minVariationOnDrop)
    });

    it('should return a random number, not the same number 3x on sequence',() =>   {

        const random1 = monster.GetRandomDropVariation()
        const random3 = monster.GetRandomDropVariation()
        const random2 = monster.GetRandomDropVariation()

        expect(random1).not.toBe(random2)
        expect(random1).not.toBe(random3)
        expect(random2).not.toBe(random3)
    });



  });
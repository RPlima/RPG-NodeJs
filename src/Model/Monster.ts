export class Monster {
    private readonly minLifePoints: number = 0;
    private readonly minVariationOnDrop: number = -10; //Seriam 10% a mais e 10% a menos
    private readonly maxVariationOnDrop: number = 10;

    constructor() 
    {
        this._LifePoints = 0
        this._MaxLifePoints = 0
        this._Level = 0
        this._Name = ''
        this._ExperienceDrop = 0
        this._CoinsDrop= 0
        this._Attack = 0
        this._Defense = 0
        this._Description = ''
    }

    private _LifePoints: number;
    private _MaxLifePoints: number;
    private _Level: number;
    private _Name: string;
    private _ExperienceDrop: number;
    private _CoinsDrop: number;
    private _Attack: number;
    private _Defense: number;
    private _Description: String;
    //private _ItensToDrop: Array<Item>; TODO
    //private _ItensToDropChance: Array<number>; TODO

    public get LifePoints(): number 
    {
        return this._LifePoints;
    }


    public get MaxLifePoints(): number 
    {
        return this._MaxLifePoints;
    }

    public get Level(): number 
    {
        return this._Level;
    }

    public get Name(): String 
    {
        return this._Name;
    }

    public get ExperienceDrop(): number 
    {
        return this._ExperienceDrop;
    }

    public get CoinsDrop(): number 
    {
        return this._CoinsDrop;
    }

    public get Attack(): number 
    {
        return this._Attack;
    }

    public get Defense(): number 
    {
        return this._Defense;
    }

    public get Description(): String 
    {
        return this._Description;
    }

    public get MinVariationOnDrop(): number 
    {
        return this.minVariationOnDrop;
    }

    public get MaxVariationOnDrop(): number 
    {
        return this.maxVariationOnDrop;
    }


    public ReceiveDamage(attack:number)
    {
        if(attack <= this._Defense)
        return;

        
        this._LifePoints -= attack - this._Defense;
        
        if(this._LifePoints <= 0){
            this.Die();
            return;
        }
       
    }

 
    public Die()
    {
       // this.DropOnDeath;
    }

    //Tem uns problemas de aqui
    //Será que a classe player deve estar dentro da monster?
    //Acredito que a interação das duas classes devem ser feitas por terceiros.
    // public DropOnDeath(player :Player) //NEED TO TEST!!!!!!!!!
    // {
    //     player.ReceiveExp(this.DropExp());
    //     player.ReceiveCoins(this.DropCoins());
    //     //this.DropItem; TODO   
    // }

    public DropExp()
    {
        return this.GetRandomDropVariation(this._ExperienceDrop)
    }

    public DropCoins()
    {
        return this.GetRandomDropVariation(this._CoinsDrop)
    }



    

    //TODO
    // public DropItem()
    // {
    //     //TODO
    // }

    private GetRandomDropVariation(ValueToDrop :number) {

        const random =  Math.floor(Math.random() * (this.maxVariationOnDrop + (this.minVariationOnDrop * -1))) + this.minVariationOnDrop;
        const PercentToDrop =100 + random;
        return (ValueToDrop/100) * PercentToDrop

    }

    public CreateMonsterTest(attack: number, defense: number, lifePoints: number) : Monster
    {
        var monster = new Monster();
        monster._Attack = attack;
        monster._Defense = defense;
        monster._LifePoints = lifePoints;
        return monster;
    }
}


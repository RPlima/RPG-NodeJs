import { isGenericTypeAnnotation } from "@babel/types";

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
        this._CoinDrop= 0
        this._Attack = 0
        this._Defense = 0
        this._Description = ''
    }

    private _LifePoints: number;
    private _MaxLifePoints: number;
    private _Level: number;
    private _Name: string;
    private _ExperienceDrop: number;
    private _CoinDrop: number;
    private _Attack: number;
    private _Defense: number;
    private _Description: String;


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

    public get CoinDrop(): number 
    {
        return this._CoinDrop;
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

        if(this._LifePoints <= this.minLifePoints)
        return;

        this._LifePoints -= attack - this._Defense;

        if(this._LifePoints <= 0)
         this.Die();
    }

    public Die()
    {
        //TODO
    }

    public DropOnDeath()
    {
        //TODO
    }

    public DropExp()
    {
        //TODO
    }

    public DropCoins()
    {
        //TODO
    }

    public DropItem()
    {
        //TODO
    }

    private GetRandomDropVariation() {

        const random =  Math.floor(Math.random() * (this.maxVariationOnDrop + (this.minVariationOnDrop * -1))) + this.minVariationOnDrop;
        return 100 + random;
    }


}


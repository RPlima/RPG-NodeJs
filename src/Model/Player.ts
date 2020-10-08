import { Lootbag } from "./Lootbag";

export class Player {
    private readonly levelInitial: number = 1;
    private readonly minLifePoints: number = 0;
    private readonly maxLifePoints: number = 100;
    private readonly lifePointsInitial: number = 100;
    private readonly experienceInitial: number = 0;
    private readonly attackInitial: number = 1;
    private readonly defenseInitial: number = 1;
    private readonly areaIdInitial: number = 1;
    private readonly coinsInitial: number = 0;
    private readonly experienceToNextLevel: number = 500;

    constructor(name: string) 
    {
        this._LifePoints = this.lifePointsInitial;
        this._MaxLifePoints = this.maxLifePoints;
        this._Level = this.levelInitial;
        this._Name = this.SanitazeNamePlayer(name);
        this._Experience = this.experienceInitial;
        this._Attack = this.attackInitial;
        this._Defense = this.defenseInitial;
        this._AreaId = this.areaIdInitial;
        this._Coins = this.coinsInitial;
        this.__ExperienceToNextLevel = this.experienceToNextLevel;
        
    }

    private _LifePoints: number;
    private _MaxLifePoints: number;
    private _Level: number;
    private _Name: string;
    private _Experience: number;
    private _Attack: number;
    private _Defense: number;
    private _AreaId: number;
    private _Coins: number;
    private __ExperienceToNextLevel: number;

    public get LifePoints(): number 
    {
        return this._LifePoints;
    }

    public get MaxLifePoints(): number {
        return this._MaxLifePoints;
    }

    public get Level(): number 
    {
        return this._Level;
    }

    public get Name(): string 
    {
        return this._Name;
    }

    public get Experience(): number {
        return this._Experience;
    }
    
    public get Attack(): number {
        return this._Attack;
    }

    public get Defense(): number {
        return this._Defense;
    }

    public get AreaId(): number {
        return this._AreaId;
    }

    public get Coins(): number {
        return this._Coins;
    }

    private SanitazeNamePlayer(name:string) : string
    {
       if(name.length == 0 || !name.trim())
       {
            throw new Error("O nome não pode ser vazio");
       }
       return name;
    }

    public ReceiveDamage(attack:number)
    {
        if(attack <= this._Defense)
        return;

        if(this._LifePoints <= this.minLifePoints)
        return;

        this._LifePoints -= attack - this._Defense;

        if(this._LifePoints <= 0)
         this.PenalitesFromDeath();
    }
    
    //trecho de código não testado
    public PenalitesFromDeath()
    {
        if(this._Level == 0 )
        return;
        
        this._LifePoints = this._MaxLifePoints - 10;
        this._Defense = this.Defense - 1;
        this._Attack = this.Attack - 1;
    }

    //trecho de código não testado
    public LevelUp()
    {
        this._Defense = this.Defense + 1;
        this._Attack = this.Attack + 1;
        this._MaxLifePoints = this.MaxLifePoints + 10;
        this._Level += 1; 
        this.__ExperienceToNextLevel *= 1.5;
    }
    
    public ReceiveDrop(Drop: Lootbag)
    {
        this.ReceiveCoins(Drop.GetCoins);
        this.ReceiveExp(Drop.GetExp);
    }

    public ReceiveExp(exp :number)
    {
        this._Experience += exp;
        if(this.Experience >= this.__ExperienceToNextLevel)
        this.LevelUp();
    }

    public ReceiveCoins(coins :number)
    {
        this._Coins += coins;
    }


    public CreatePlayerTest()
    {        
        this._Attack = 20;
        this._Defense = 20;
    }

    public CreateWeakPlayerTest()
    {        
        this._LifePoints = 1
    }

    //TODO Create class monster first
    // public DealDamage(attack:number)
    // {
    //     if(attack <= this.Defense)
    //     return;
    // }

}
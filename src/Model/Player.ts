import { Lootbag } from "./Lootbag";
import { Item } from "./Item";

export class Player 
{
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
    private readonly experienceToMinimunLevel: number = 0;
    private readonly experiencePreviousMinimunLevel: number = 0;
    private readonly experiencePreviousNextLevel: number = 0;

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
        this._ExperienceToNextLevel = this.experienceToNextLevel;
        this._ExperienceToMinimunLevel = this.experienceToMinimunLevel;
        this._ExperiencePreviousNextLevel = this.experiencePreviousNextLevel;
        this._ExperiencePreviousMinimunLevel = this.experiencePreviousMinimunLevel;
        this._Items = Array<Item>();
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
    private _ExperienceToNextLevel: number;
    private _ExperienceToMinimunLevel: number;
    private _ExperiencePreviousNextLevel: number;
    private _ExperiencePreviousMinimunLevel: number;
    private _Items: Array<Item>;

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

    public get Name(): string 
    {
        return this._Name;
    }

    public get Experience(): number 
    {
        return this._Experience;
    }

    public get Attack(): number 
    {
        return this._Attack;
    }

    public get Defense(): number 
    {
        return this._Defense;
    }

    public get AreaId(): number 
    {
        return this._AreaId;
    }

    public get Coins(): number 
    {
        return this._Coins;
    }

    public get ExperienceToNextLevel(): number 
    {
        return this._ExperienceToNextLevel;
    }

    public get ExperienceMinimunLevel(): number 
    {
        return this._ExperienceToMinimunLevel;
    }

    public get ExperiencePreviousNextLevel(): number 
    {
        return this._ExperiencePreviousNextLevel;
    }

    public get ExperiencePreviousMinimunLevel(): number 
    {
        return this._ExperiencePreviousMinimunLevel;
    }

    public get Items(): Array<Item> {
        return this._Items;
    }

    private SanitazeNamePlayer(name: string): string 
    {
        if (name.length == 0 || !name.trim()) 
            throw new Error("O nome não pode ser vazio");
        return name;
    }

    public ReceiveDamage(attack: number) 
    {
        this._LifePoints -= 4 * (attack - this.Defense / 2);
    }

    public Died() 
    {
        if (this._LifePoints <= this.minLifePoints) 
            return true;
        else 
            return false;
    }

    //Precisa do cálculo de experiência antes.
    public PenalitesFromDeath()
    {

        if (this._Level == 1)
            return;

        this._Experience -= this.ExperienceToNextLevel / 4;

        if(this._Experience <= this.ExperienceMinimunLevel)
        {
            this._ExperienceToMinimunLevel = this.ExperiencePreviousMinimunLevel;
            this._ExperienceToNextLevel = this.ExperiencePreviousNextLevel;

            this._MaxLifePoints = this._MaxLifePoints - 10;
            this._Defense = this.Defense - 1;
            this._Attack = this.Attack - 1;
            this._Level = this.Level - 1;
        }
        this._Coins = Math.floor(this._Coins * 0.95)
    }

    public LevelUp()
    {
        this._Defense = this.Defense + 1;
        this._Attack = this.Attack + 1;
        this._MaxLifePoints = this.MaxLifePoints + 10;
        this._Level += 1;

        //Experience
        this._ExperiencePreviousNextLevel = this.ExperienceToNextLevel;
        this._ExperiencePreviousMinimunLevel = this.ExperienceMinimunLevel;
        
        this._ExperienceToMinimunLevel = this.ExperienceToNextLevel;
        this._ExperienceToNextLevel += Math.floor(this._ExperienceToNextLevel * 1.5) ;
        this._Coins += this.Level * 100
    }

    public ReceiveDrop(Drop: Lootbag) 
    {
        this.ReceiveCoins(Drop.GetCoins);
        this.ReceiveExp(Drop.GetExp);
        this.ReceiveItems(Drop.GetItems);
    }

    public ReceiveItems(items: Array<Item>) 
    {
        if(items !=null && items.length > 0)
            items.forEach(item => {
                this._Items.push(item);
            });
    }

    public ReceiveExp(exp: number) 
    {
        this._Experience += exp;
        if (this.Experience >= this._ExperienceToNextLevel)
            this.LevelUp();
    }

    public ReceiveCoins(coins: number) 
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
}
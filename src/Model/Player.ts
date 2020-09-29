export class Player {
    private readonly levelInitial: number = 0;
    private readonly minLifePoints: number = 0;
    private readonly lifePointsInitial: number = 100;

    constructor(Name: string) 
    {
        this._LifePoints = this.lifePointsInitial;
        this._Level = this.levelInitial;
        this._Name = Name;
    }

    private _LifePoints: number;
    private _Level: number;
    private _Name: string;

    public get LifePoints(): number 
    {
        return this._LifePoints;
    }

    public get Level(): number 
    {
        return this._Level;
    }

    public get Name(): string 
    {
        return this._Name;
    }
}
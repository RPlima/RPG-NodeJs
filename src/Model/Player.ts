import { isGenericTypeAnnotation } from "@babel/types";

export class Player {
    private readonly levelInitial: number = 1;
    private readonly minLifePoints: number = 0;
    private readonly lifePointsInitial: number = 100;
    private readonly experienceInitial: number = 0;
    private readonly attackInitial: number = 1;
    private readonly defenseInitial: number = 1;

    constructor(name: string) 
    {
        this._LifePoints = this.lifePointsInitial;
        this._Level = this.levelInitial;
        this._Name = this.SanitazeNamePlayer(name);
        this._Experience = this.experienceInitial;
        this._Attack = this.attackInitial;
        this._Defense = this.defenseInitial;
    }

    private _LifePoints: number;
    private _Level: number;
    private _Name: string;
    private _Experience: number;
    private _Attack: number;
    private _Defense: number;

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

    public get Experience(): number {
        return this._Experience;
    }
    
    public get Attack(): number {
        return this._Attack;
    }

    public get Defense(): number {
        return this._Defense;
    }

    private SanitazeNamePlayer(name:string) : string
    {
       if(name.length == 0 || !name.trim())
       {
            throw new Error("O nome não pode ser vazio");
       }
       return name;
    }

 
}
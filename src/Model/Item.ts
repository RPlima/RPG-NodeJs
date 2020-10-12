export class Item implements InterfaceItems
{
    private _Name: string;
    private _Attack: number;
    private _Defense: number;
    private _Type: number;

    public get Name(): string {
        return this._Name;
    }

    public get Attack(): number {
        return this._Attack;
    }

    public get Defense(): number {
        return this._Defense;
    }

    public get Type(): number {
        return this._Type;
    }

    constructor()
    {
        this._Name = this.Name;
        this._Attack = this.Attack;
        this._Defense = this.Defense;
        this._Type = this.Type;
    }
}
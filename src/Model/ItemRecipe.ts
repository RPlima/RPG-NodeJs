import { Item } from "./Item";

export class ItemsRecipe implements InterfaceItems{
    private _Name: string;

    public get Name(): string {
        return this._Name;
    }

    constructor()
    {
        this._Name = name;
    }
}
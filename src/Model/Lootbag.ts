import { Item } from "./Item";

export class Lootbag
{
    private _Coins: number;
    private _Exp: number;
    private _ItemList: Array<Item>;

    constructor(Exp: number, Coins: number, ItemList: Array<Item>){
        this._Coins = Coins;
        this._Exp = Exp;
        this._ItemList = ItemList;
    }
    
    public get GetCoins(){
        return this._Coins;
    }

    public get GetExp(){
        return this._Exp;
    }

    public get GetItems(): Array<Item> {
        return this._ItemList;
    }
}
import { Items } from "./Item";

export class Lootbag
{
    private _Coins: number;
    private _Exp: number;
    private _ItemList: Array<Items>;

    constructor(Exp: number, Coins: number, ItemList: Array<Items>){
        this._Coins = Coins;
        this._Exp = Exp;
        this._ItemList = ItemList;
    }
    
    

}
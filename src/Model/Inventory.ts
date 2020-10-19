import { Item } from './Item';

export class Inventory
{
    private _Items: Array<Item> = [];
    private _EquippedSword: Item = new Item();
    private _EquippedArmor: Item = new Item();
    
    public get Items(): Array<Item> 
    {
        return this._Items;
    }
    public get EquippedSword(): Item 
    {
        return this._EquippedSword;
    }
    public get EquippedArmor(): Item 
    {
        return this._EquippedArmor;
    }

    public AddItemsInventory(items: Array<Item>)
    {
       if(items != null && items.length > 0)
           items.forEach(item => {
             this._Items.push(item);
           });
    }

    public RemoveItem(item: Item)
    {
        if(item !== null || item !== undefined)
            this._Items.splice(this._Items.indexOf(item), 1);
    }
}
import { injectable, inject } from 'tsyringe';
import { Monster } from '../Model/Monster';
import { Player } from '../Model/Player';


@injectable()
export class FightApplication{

    private _monster : Monster;
    private _player : Player;

    constructor(
        @inject('Monster') monster: Monster,
        @inject('Player') player: Player
    )
    {
        this._monster = monster;
        this._player = player;
    }

    public Hunt(player: Player)
    {
       var monster = this.SelectMonster(player.AreaId);
       do
       {
           monster.ReceiveDamage(player.Attack);
           player.ReceiveDamage(monster.Attack);
       }while(player.LifePoints > 0 || monster.LifePoints > 0);

       if(player.LifePoints <= 0)
        player.PenalitesFromDeath();
       else
        monster.Die();
    }

    private SelectMonster(areaId: number) : Monster {
        var monster = new Monster();
        //TODO
        //Select Random Monster per Area from Database --> Create MonsterRepository
        return monster;
    }
}
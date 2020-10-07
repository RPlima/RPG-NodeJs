//import { injectable, inject } from 'tsyringe';
import { Monster } from '../../Model/Monster';
import { Player } from '../../Model/Player';


//@injectable()
export class RegularFight{

    // private _monster : Monster;
    // private _player : Player;

    // constructor(
    //     @inject('Monster') monster: Monster,
    //     @inject('Player') player: Player
    // )
    // {
    //     this._monster = monster;
    //     this._player = player;
    // }

    public Fight(player: Player, monster:Monster) : boolean
    {
      // Deve estar na controller
      // var monster = this.SelectMonster(player.AreaId);
       do
       {
           monster.ReceiveDamage(player.Attack);
           player.ReceiveDamage(monster.Attack);
       }while(player.LifePoints <= 0 || monster.LifePoints <= 0);

       
       if(player.LifePoints <= 0)
       //TODO
        //player.PenalitesFromDeath();
       return true;
       else
       //TODO
       return false;
        //monster.Die();
    }

    private SelectMonster(areaId: number) : Monster {
        var monster = new Monster();
        //TODO
        //Select Random Monster per Area from Database --> Create MonsterRepository
        return monster;
    }
}
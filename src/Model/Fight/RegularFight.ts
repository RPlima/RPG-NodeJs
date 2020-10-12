//import { injectable, inject } from 'tsyringe';
import { Monster } from '../../Model/Monster';
import { Player } from '../../Model/Player';


export class RegularFight{

     constructor()
     {
        
     }

    public Fight(player: Player) : boolean
    {
      
       var monster = this.SelectMonster(player.AreaId);

       do
       {
           monster.ReceiveDamage(player.Attack);
           if(monster.LifePoints >= 0)
            player.ReceiveDamage(monster.Attack);
       }
       while(player.LifePoints >= 0 && monster.LifePoints >= 0 );
       
       if(player.Died())
       {
        player.PenalitesFromDeath();
        return true;
       }
       else
       {
        player.ReceiveDrop(monster.DropOnDeath());
        return false;
       }
        
    }

    private SelectMonster(areaId: number) : Monster {
        //Select Random Monster per Area from Database --> Create MonsterRepository
        var monster = new Monster();
        monster.CreateMonsterTest();
        return monster;
    }
}
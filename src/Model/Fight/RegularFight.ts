//import { injectable, inject } from 'tsyringe';
import { Monster } from '../../Model/Monster';
import { Player } from '../../Model/Player';


export class RegularFight{

     constructor()
     {
        
     }

    public Fight(player: Player) : boolean
    {
      // Deve estar na controller
       var monster = this.SelectMonster(player.AreaId);


       do
       {
           monster.ReceiveDamage(player.Attack);
           player.ReceiveDamage(monster.Attack);
       }
       while(player.LifePoints <= 0 || monster.LifePoints <= 0);

       
       if(player.LifePoints <= 0){
        player.PenalitesFromDeath();
        console.log("Player Morreu");
       return true;
       }
       else
       console.log("MonstroMorreu");
       player.ReceiveDrop(monster.DropOnDeath());
       return false;
        //monster.Die();
    }

    private SelectMonster(areaId: number) : Monster {
        //Select Random Monster per Area from Database --> Create MonsterRepository
        var monster = new Monster();
        monster.CriaMonstroTeste();
        return monster;
    }
}
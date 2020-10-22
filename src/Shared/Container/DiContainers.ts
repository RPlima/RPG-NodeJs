import { container } from 'tsyringe';

// Users RepositoryC:\Users\Pichau\Desktop\RPG-NodeJs\src\Model\Player.ts
import { Player } from '../../Model/Player';
import { Monster } from '../../Model/Monster';

export class Containers
{
    public RegisterContainers()
    {
        container.register<Player>('Player',Player);
        container.register<Monster>('Monster',Monster);
    }
}

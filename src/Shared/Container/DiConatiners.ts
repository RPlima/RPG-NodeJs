import { container } from 'tsyringe';

// Users RepositoryC:\Users\Pichau\Desktop\RPG-NodeJs\src\Model\Player.ts
import { Player } from '../../Model/Player';
import { Monster } from '../../Model/Monster';

export { Player };
container.register<Player>('Player',Player);

export { Monster };
container.register<Monster>('Monster',Monster);
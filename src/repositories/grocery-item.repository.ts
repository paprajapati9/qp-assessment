import { EntityRepository, Repository } from 'typeorm';
import { GroceryItem } from '../models/grocery-item.model';

@EntityRepository(GroceryItem)
export class GroceryItemRepository extends Repository<GroceryItem> {}
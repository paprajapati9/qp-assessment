import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { GroceryItem } from '../models/grocery-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroceryItemService {
  constructor(
    @InjectRepository(GroceryItem) private groceryItemRepository: Repository<GroceryItem>,
  ) {}

  async create(
    name: string,
    price: number,
    inventory: number,
  ): Promise<GroceryItem> {
    return this.groceryItemRepository.save({ name, price, inventory });
  }

  async update(
    id: any,
    updateData: Partial<GroceryItem>
  ): Promise<GroceryItem> {
    await this.groceryItemRepository.update(id, updateData);
    const item =  this.groceryItemRepository.findOne({ where: { id } })
    return item;
  }

  async reduceInventory(id: any, quantity: number) {
    const item =  await this.groceryItemRepository.findOne({ where: { id } })
    // Reduce inventory
    item.inventory -= quantity;
    if (item.inventory < 0) throw Error('Low Inventory');
    await this.groceryItemRepository.update(id, item);
  }

  async findAll(): Promise<GroceryItem[]> {
    return this.groceryItemRepository.find();
  }

  async deleteItem(id: any): Promise<any> {
    return await this.groceryItemRepository.delete(id);
  }
}

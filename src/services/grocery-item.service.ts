import { Injectable, NotFoundException } from '@nestjs/common';
import { GroceryItem } from '../models/grocery-item.model';
import { InjectRepository } from '@nestjs/typeorm';
import { GroceryItemRepository } from '../repositories/grocery-item.repository';

@Injectable()
export class GroceryItemService {
  constructor(
    @InjectRepository(GroceryItem)
    private groceryItemRepository: GroceryItemRepository,
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
    const item =  this.groceryItemRepository.findOne(id)
    return item;
  }

  async findAll(): Promise<GroceryItem[]> {
    return this.groceryItemRepository.find();
  }

  async deleteItem(id: any): Promise<any> {
    return await this.groceryItemRepository.delete(id);
  }
}

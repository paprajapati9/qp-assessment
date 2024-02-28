import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { GroceryItemService } from '../services/grocery-item.service';
import { GroceryItemRepository } from '../repositories/grocery-item.repository';

@Module({
  controllers: [AdminController],
  providers: [GroceryItemRepository, GroceryItemService]
})
export class AdminModule {}

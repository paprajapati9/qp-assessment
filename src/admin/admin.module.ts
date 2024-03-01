import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { GroceryItemService } from '../services/grocery-item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryItem } from '../models/grocery-item.entity';

@Module({
  controllers: [AdminController],
  providers: [GroceryItemService],
  imports: [
    TypeOrmModule.forFeature([GroceryItem])
  ]
})
export class AdminModule {}

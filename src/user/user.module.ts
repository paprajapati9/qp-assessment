import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GroceryItemService } from '../services/grocery-item.service';
import { OrderService } from '../services/order.service';
import { SubOrderService } from '../services/suborder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroceryItem } from '../models/grocery-item.entity';
import { Order } from '../models/order.entity';
import { SubOrder } from '../models/suborder.entity';

@Module({
  controllers: [UserController],
  providers: [
    GroceryItemService,
    OrderService,
    SubOrderService
  ],
  imports: [
    TypeOrmModule.forFeature([GroceryItem, Order, SubOrder])
  ]
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GroceryItemService } from '../services/grocery-item.service';
import { OrderService } from '../services/order.service';
import { SubOrderService } from '../services/suborder.service';
import { GroceryItemRepository } from 'src/repositories/grocery-item.repository';
import { OrderRepository } from 'src/repositories/order.repository';
import { SubOrderRepository } from 'src/repositories/suborder.repository';

@Module({
  controllers: [UserController],
  providers: [
    GroceryItemRepository,
    OrderRepository,
    SubOrderRepository,
    GroceryItemService,
    OrderService,
    SubOrderService
  ]
})
export class UserModule {}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { GroceryItem } from '../models/grocery-item.entity';
import { GroceryItemService } from '../services/grocery-item.service';
import { OrderService } from 'src/services/order.service';
import { SubOrderService } from 'src/services/suborder.service';
import { SubOrder } from 'src/models/suborder.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly groceryItemService: GroceryItemService,
    private readonly orderService: OrderService,
    private readonly suborderService: SubOrderService,
  ) {}

  @Get('/grocery-items')
  async getAllGroceryItems(): Promise<GroceryItem[]> {
    return this.groceryItemService.findAll();
  }

  @Post('/order')
  async createOrder(
    @Body('userId') userId: number,
    @Body('items') items: { itemId: number; quantity: number }[],
  ) {
    try {
      const order = await this.orderService.createOrder(userId);

      // Create suborders for each item and associate them with the parent order
      const subOrders = items.map((item) => {
        const subOrder = new SubOrder();
        subOrder.itemId = item.itemId;
        subOrder.quantity = item.quantity;
        subOrder.order = order;
        return subOrder;
      });

      // Save the suborders
      await this.suborderService.createSubordersMulti(subOrders);

      // Update inventory of items
      items.map(async (item) => {
        await this.groceryItemService.reduceInventory(item.itemId, item.quantity) 
      })
    } catch (error) {
      throw error;
    }
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GroceryItemService } from '../services/grocery-item.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly groceryItemService: GroceryItemService) {}

  @Post('/grocery-items')
  async addNewGroceryItem(
    @Body('name') name: string,
    @Body('inventory') inventory: number,
    @Body('price') price: number,
  ) {
    try {
      return await this.groceryItemService.create(name, price, inventory);
    } catch (error) {
      throw error;
    }
  }

  @Put('/grocery-items/update-inventory/:id')
  async updateInventory(
    @Param('id') id: number,
    @Body('inventory') inventory: number,
  ) {
    try {
      const item = await this.groceryItemService.update(id, { inventory });
      return {
        data: item,
        message: `Inventory for item with ID ${id} updated successfully.`,
      };
    } catch (error) {
      throw error;
    }
  }

  @Put('/grocery-items/:id')
  async updateGroceryItem(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('price') price: number,
  ) {
    try {
      const item = await this.groceryItemService.update(id, { name, price });
      return {
        data: item,
        message: `Grocery item with ID ${id} updated successfully.`,
      };
    } catch (error) {
      throw error;
    }
  }

  @Get('/grocery-items')
  async fetchAllGroceryItems() {
    return await this.groceryItemService.findAll();
  }

  @Delete('/grocery-items/:id')
  async removeGroceryItem(@Param('id') id: number) {
    try {
      await this.groceryItemService.deleteItem(id);
      return { message: `Grocery item with ID ${id} deleted successfully.` };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(
        `Item with ID ${id} not found in the groceries.`,
      );
    }
  }
}

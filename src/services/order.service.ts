import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../models/order.model';
import { OrderRepository } from '../repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
  ) {}

  async createOrder(userId: number): Promise<Order> {
    const newOrder = new Order();
    newOrder.userId = userId
    return await this.orderRepository.save(newOrder);
  }
}
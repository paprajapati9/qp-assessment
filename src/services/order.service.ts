import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../models/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(userId: number): Promise<Order> {
    const newOrder = new Order();
    newOrder.userId = userId
    return await this.orderRepository.save(newOrder);
  }
}
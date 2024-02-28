import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubOrder } from '../models/suborder.model';
import { SubOrderRepository } from '../repositories/suborder.repository';

@Injectable()
export class SubOrderService {
  constructor(
    @InjectRepository(SubOrder)
    private subOrderRepository: SubOrderRepository,
  ) {}

  async createSubordersMulti(subOrders: SubOrder[]): Promise<void> {
    const savedSuborder = await this.subOrderRepository.save(subOrders);
  }
}
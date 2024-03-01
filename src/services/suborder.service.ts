import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubOrder } from '../models/suborder.entity';

@Injectable()
export class SubOrderService {
  constructor(
    @InjectRepository(SubOrder)
    private subOrderRepository: Repository<SubOrder>,
  ) {}

  async createSubordersMulti(subOrders: SubOrder[]): Promise<void> {
    const savedSuborder = await this.subOrderRepository.save(subOrders);
  }
}
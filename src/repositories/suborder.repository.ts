import { EntityRepository, Repository } from 'typeorm';
import { SubOrder } from '../models/suborder.model';

@EntityRepository(SubOrder)
export class SubOrderRepository extends Repository<SubOrder> {}

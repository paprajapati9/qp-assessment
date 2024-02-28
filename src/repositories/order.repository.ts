import { EntityRepository, Repository } from 'typeorm';
import { Order } from '../models/order.model';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {}

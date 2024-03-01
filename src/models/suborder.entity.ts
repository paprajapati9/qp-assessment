import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity('suborder')
export class SubOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.subOrders)
  order: Order;

  @Column()
  itemId: number;

  @Column()
  quantity: number;
}
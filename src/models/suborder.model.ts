import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.model';
import { GroceryItem } from './grocery-item.model';

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
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SubOrder } from './suborder.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @OneToMany(() => SubOrder, subOrder => subOrder.order)
  subOrders: SubOrder[];
}
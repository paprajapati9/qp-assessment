import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('grocery_item')
export class GroceryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  inventory: number;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  division: string;

  @Column()
  district: string;

  @Column()
  area: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  rentBudget: number;

  @Column()
  room: string;

  @Column()
  propertyNeedFrom: string;

  @Column()
  package: string;

  @Column()
  cost: number;
}

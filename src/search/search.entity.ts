import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Search {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  division: string;

  @Column()
  district: string;

  @Column()
  area: string;

  @Column()
  propertyId: string;
}

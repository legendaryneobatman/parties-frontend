import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Files } from '../files/files.entity';

@Entity()
export class Party {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  text: string;

  @Column()
  date: Date;

  @Column()
  address: string;

  @Column()
  hasWishList: boolean;

  @Column()
  img: string;

  @OneToMany(() => Files, (files) => files.party)
  files: Files[];

  @Column('integer', { array: true, default: [] })
  assignedUsers: number[];
}

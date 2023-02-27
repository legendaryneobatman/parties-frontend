import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Files } from '../files/files.entity';
import { JoinColumn } from "typeorm/browser";

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
  wishList: boolean;
  @Column()
  img: string;
  @OneToMany(() => Files, (files) => files.party)
  files: Files[];
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Party } from '../parties/party.entity';

@Entity()
export class Files {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Party, (party) => party.files)
  party: Party;
  @Column()
  fileName: string;
}

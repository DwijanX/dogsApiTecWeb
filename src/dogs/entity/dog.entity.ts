import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  raza: string;
  @Column()
  tamanho: string;
}
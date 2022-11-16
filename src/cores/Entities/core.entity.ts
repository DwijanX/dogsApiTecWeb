import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Core {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Nombre: string;
  @Column()
  Marca: string;
  @Column()
  FrecuenciaMhz: number;
  @Column()
  Nucleos:number;
  @Column()
  Hilos: number;
  @Column()
  Zocalo: string;
  @Column()
  Cache: number;
}
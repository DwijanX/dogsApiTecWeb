import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoresController } from './cores/cores.controller';
import { CoresModule } from './cores/cores.module';
@Module({
  imports: [DogsModule,
    CoresModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'cores_schema',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'dogs_schema',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

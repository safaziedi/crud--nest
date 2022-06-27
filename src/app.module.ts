import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbUser:safaziadi07012001@cluster0.thbgv.mongodb.net/todolist?retryWrites=true&w=majority'),
    TodosModule ,
      ],
  controllers: [AppController],
  providers: [AppService ]
})
export class AppModule {}

import { Injectable ,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {

  constructor(
    @InjectModel('Todo') private TodoModel: Model<Todo>,
  ) {}

    async create(createTodoDto: CreateTodoDto): Promise<Todo> {
        const createdTodo = new this.TodoModel(createTodoDto);
        return createdTodo.save();
      }

    async getAll(): Promise<Todo[]> {
        return this.TodoModel.find().exec();
      }

      async update(todo: UpdateTodoDto) {
        const updateTodo = new this.TodoModel(todo);
        return updateTodo.save();
      }
    

      async delete(prodId: string) {
        const result = await this.TodoModel.deleteOne({ _id: prodId }).exec();
        if (result.deletedCount === 0) {
          throw new NotFoundException('Could not find task.');
        }
      }
    
    }

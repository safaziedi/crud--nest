import {  Body, Controller, Delete, Get,  Patch, Post, Query } from '@nestjs/common';
import {  ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';
@ApiTags('To Do List')
@Controller()
export class TodosController {

    constructor (private todosService : TodosService      ){}


    // CRUD
  @Post()
  create(
    @Body() todo: CreateTodoDto
  ) {
    return this.todosService.create(todo);
  }

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Patch()
  update(
    @Body() todo: UpdateTodoDto
  ) {
    return this.todosService.update(todo);
  }

  @Delete()
  delete(
    @Query('id') id: string
  ) {
    return this.todosService.delete(id)
  }

}
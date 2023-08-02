import { Body, Controller, Get, Post, ValidationPipe,UsePipes, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Delete, Param, Patch, Query } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiliterDto } from './dto/get-task-filiter.sto';
import { TaskStatusValidationPipe } from './pipe/task-status-validation.pipe';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService){}

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFiliterDto):Task[]{
    //     if(Object.keys(filterDto).length){
    //         return this.taskService.getTasksWithFiliter(filterDto);
    //     }else{
    //         return this.taskService.gellAllTasks();
    //     }
    // } 
    @Get('/:id')
    getTaskById(@Param('id',ParseIntPipe) id:number):Promise<Task>{
        return this.taskService.getTaskById(id);
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto : CreateTaskDto):Task{
    //    return this.taskService.createTask(createTaskDto)
    // }
    // @Delete('/:id')
    // deleteTask(@Param('id') id:string):void{
    //     this.taskService.deleteTask(id);
    // }
    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id:string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ):Task{
    //     return this.taskService.updateTaskStatus(id, status);
    // }

}

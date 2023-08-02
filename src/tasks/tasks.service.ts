import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFiliterDto } from './dto/get-task-filiter.sto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ){}
    // gellAllTasks():Task[]{
    //     return this.tasks;
    // }

    // getTasksWithFiliter(filiterDto : GetTasksFiliterDto): Task[] {
    //     const {status, search} = filiterDto;
    //     let tasks = this.gellAllTasks();
    //     if(status){
    //         tasks = tasks.filter(task=> task.status === status);
    //     }
    //     if(search){
    //         tasks = tasks.filter(task =>
    //             task.title.includes(search)||
    //             task.description.includes(search),
    //             );
    //     }
    //     return tasks;
    // }
    async getTaskById(id:number):Promise<Task>{
        const found = await this.taskRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`Task with id ${id} not found!!`)
        }
        return found;
    }
    // getTaskById(id:string):Task{
    //     const found = this.tasks.find(task=>task.id===id)
    //     if(!found){
    //         throw new NotFoundException(`Task with id ${id} not found!!`)
    //     }
    //     return found;
    // }

    // createTask(createTaskDto: CreateTaskDto): Task{
    //     const{title, description} = createTaskDto;
    //     const task: Task={
    //         id: uuidv1(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }
    // deleteTask(id:string):void{
    //     const found = this.getTaskById(id);
    //     this.tasks =this.tasks.filter(task => task.id !==id);
    // }
    
    // updateTaskStatus(id: string, status: TaskStatus):Task{
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}


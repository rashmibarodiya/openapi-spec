import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

import Todo from "./todo"
import { todoCreateParams, todoService } from "./todoService"

@Route
export class todosController extends Controller {
    @Get("{id}")
    public async getTodo(
        @Path() id: string
    ): Promise<Todo> {
        let todoSer = new todoService()
        return todoSer.get(id)
    }


    // @SuccessResponse("201", "Created") 
    // @Post()
    // public async createTodo(
    //     @Body() requestBody: todoCreateParams
    // ) : Promise<void>{
    //     this.setStatus(201);
    //     new todoService().create(requestBody)
    //     return
    // }
}
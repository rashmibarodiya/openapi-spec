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
//import { todoCreateParams, todoService } from "./todoService";

@Route("tod")
export class TodoController extends Controller {
    //@Get("{todoId})
         @Get()
    public async getTodo(
        // @Path() todoId: string
    ): Promise<Todo> {
       // let ts = new todoService();
        return {
            title : "mytodo",
            description : "mydescription",
            done : true,
            id: "4"
        }
    }

    
}
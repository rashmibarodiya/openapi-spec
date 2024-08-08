import { Controller } from "tsoa";
import Todo from "./todo";
import { todoCreateParams } from "./todoService";
export declare class todosController extends Controller {
    getTodo(id: string): Promise<Todo>;
    createTodo(requestBody: todoCreateParams): Promise<void>;
}

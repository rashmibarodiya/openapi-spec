import Todo from "./todo";
export type todoCreateParams = Pick<Todo, "title" | "description">;
export declare class todoService {
    get(id: string): Todo;
    create(todoCreateParams: todoCreateParams): Todo;
}

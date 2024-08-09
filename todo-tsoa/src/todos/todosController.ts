import Todo from "./todo";

export type todoCreateParams = Pick<Todo, "title" | "description">;

export class todoService {
    public async get(id: string): Promise<Todo> {
        
        return {
            id: id,
            title: "cook",
            done: false,
            description: "dinner at 8"
        };
    }

    public async create(todoCreateParams: todoCreateParams): Promise<Todo> {
        
        return {
            id: "1",
            title: todoCreateParams.title,
            done: false,
            description: todoCreateParams.description
        };
    }
}

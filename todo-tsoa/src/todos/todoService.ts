import Todo from "./todo";


export type todoCreateParams = Pick<Todo, "title" | "description">

export class todoService {

    public get(id: string): Todo {
        return {
            id: id,
            title: "cook",
            done: false,
            description: "dinner at 8"
            
        }
    }

    public create(todoCreateParams : todoCreateParams):Todo{
        return{
            id : "1",
            title : "Creting todo",
            done : true,
            description: "creating des of todo"
            
        }
    }
}
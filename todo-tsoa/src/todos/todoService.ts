import Todo from "./todo";


export type todoCreateParams = Pick<Todo, "title" | "description">

export class todoService {

    public get(id: string): Todo {
        return {
            id: id,
            title: "cook",
            description: "dinner at 8",
            done: false
        }
    }

    public create(todoCreateParams : todoCreateParams):Todo{
        return{
            id : "1",
            title : "Creting todo",
            description: "creating des of todo",
            done : true
        }
    }
}
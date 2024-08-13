import {Todo} from "./todo";


export type todoCreateParams = Pick<Todo, "title" | "description">

export class todoService {

    public get(id: string): Todo {

        return {
            title: "cook",
            description: "dinner at 8",
            done: false,
            id: "1"
            
        }
    }

    public create(todoCreateParams : todoCreateParams):Todo{
        return{
            title : "Creting todo",
            description: "creating des of todo",
            done : true,
            id : "1",
            
        }
    }
}
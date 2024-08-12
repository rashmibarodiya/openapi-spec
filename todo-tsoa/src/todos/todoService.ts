import Todo from "./todo";


export type todoCreateParams = Pick<Todo, "title" | "description">

export class todoService {

    //public get(id: string): Todo {
        public get(): Todo {
        return {
            id: "1",
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
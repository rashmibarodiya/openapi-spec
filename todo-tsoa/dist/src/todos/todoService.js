"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
class todoService {
    get(id) {
        return {
            id: id,
            title: "cook",
            done: false,
            description: "dinner at 8"
        };
    }
    create(todoCreateParams) {
        return {
            id: "1",
            title: "Creting todo",
            done: true,
            description: "creating des of todo"
        };
    }
}
exports.todoService = todoService;

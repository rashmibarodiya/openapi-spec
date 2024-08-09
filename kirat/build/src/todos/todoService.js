"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
class todoService {
    get(id) {
        return {
            id: id,
            title: "cook",
            description: "dinner at 8",
            done: false
        };
    }
    create(todoCreateParams) {
        return {
            id: "1",
            title: "Creting todo",
            description: "creating des of todo",
            done: true
        };
    }
}
exports.todoService = todoService;

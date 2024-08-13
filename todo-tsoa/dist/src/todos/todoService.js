"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
class todoService {
    get(id) {
        return {
            title: "cook",
            description: "dinner at 8",
            done: false,
            id: "1"
        };
    }
    create(todoCreateParams) {
        return {
            title: "Creting todo",
            description: "creating des of todo",
            done: true,
            id: "1",
        };
    }
}
exports.todoService = todoService;

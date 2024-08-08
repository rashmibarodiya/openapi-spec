"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
var todoService = /** @class */ (function () {
    function todoService() {
    }
    todoService.prototype.get = function (id) {
        return {
            id: id,
            title: "cook",
            description: "dinner at 8",
            done: false
        };
    };
    todoService.prototype.create = function (todoCreateParams) {
        return {
            id: "1",
            title: "Creting todo",
            description: "creating des of todo",
            done: true
        };
    };
    return todoService;
}());
exports.todoService = todoService;

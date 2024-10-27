import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from '../interfaces/todo.interface';


const baseURL:string = "https://671513e433bc2bfe40b95089.mockapi.io/api/v1/"


@Injectable({ providedIn: 'root' })
export class TodoService {
    constructor(private http: HttpClient) {}

    getTodos() {
        return this.http.get<TodoList>(`${baseURL}/todolist`);
    }

    addTodo(title: string) {
        return this.http.post<TodoList>(`${baseURL}/api/todos`, { title });
    }

    deleteTodo(id: number) {
        return this.http.delete<TodoList>(`${baseURL}/api/todos`);
    }
}

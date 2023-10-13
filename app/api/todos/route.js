import { NextResponse } from "next/server"

let todos = [
    {id: 1, name: "Do Homework"},
    {id: 2, name: "Sleep"},
    {id: 3, name: "Repeat"}
]

export async function GET(){
    return NextResponse.json({todos});
}

export async function DELETE(request){
    const data = await request.json();
    todos = todos.filter((todo) => todo.id ==! data.id)
    return nextResponse.json({todos});

}

export async function POST(request){
    const data = await request.json();
    const newTodo = {id: todos.length + 1, name: data.todoName}
    todos.push(newTodo);
    return nextResponse.json({todos});
}
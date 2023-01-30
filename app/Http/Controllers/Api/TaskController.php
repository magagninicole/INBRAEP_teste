<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::orderby('id', 'desc')->get();
        return response()->json($tasks);
    }
    public function store(Request $request)
    {
        $task = Task::create($request->all());
        return response()->json([
            'status' => 'Task Criada',
            'task'   => $task
        ]);
    }
    public function show($id)
    {
        $task = Task::find($id);
        return response()->json($task);
    }
    public function update(Request $request, $id)
    {
        $task = Task::find($id);
        $task->update($request->all());
        return response()->json([
            'status' => 'Task editada',
            'task'   => $task
        ]);
    }
    public function destroy($id)
     {
         $task = Task::find($id);
         $task->delete();
         return response()->json('Task deletada!');
     }
}
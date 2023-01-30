<template>
    <main id="app">
        <div class="container">
            <div class="row">
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center">Tarefas</h2>
                    <table class="cutetable">
                        <thead class="headtable">
                        <tr>
                            <th>Id</th>
                            <th>Tarefa</th>
                            <th>Descrição</th>
                            <th>Estado</th>
                            <th>Opções</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(task, key) of tasks">
                                <td class="indice">{{ key+1 }}</td>
                                <td>{{ task.tarefa }}</td>
                                <td>{{ task.descricao }}</td>
                                <td>{{ tarefa(task.done) }}</td>
                                <td>
                                    <router-link  class="cutelittleedit" :to="{ name: 'Edit', params: { taskId: task.id }} " tag="button">Editar tarefa</router-link>
                                    <button class="cutelittlebtn" @click="deleteTask(task.id)">Excluir</button>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        data() {
            return {
                tasks: {}
            }
        },
        created() {
            this.getTasks();
        },
        methods: {
            getTasks() {
              this.axios.get('http://127.0.0.1:8000/api/tasks').then(response => {
                this.tasks = response.data;
            }).catch(error=>{
                console.log(error)
            })
            },
            deleteTask(taskId) {
                this.axios
                    .delete(`http://127.0.0.1:8000/api/tasks/${taskId}`)
                    .then(response => {
                        let i = this.tasks.map(data => data.id).indexOf(taskId);
                        this.tasks.splice(i, 1)
                    });
            },
            tarefa(tar){
                if(tar == 0){
                    return "Não feita";
                }else{
                    return "Finalizada";
                }
            }
        }
    }
    
</script>
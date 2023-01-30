<template>
    <main id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form class="formadd">
                    <h2 class="text-center">Atualizar tarefa</h2>
                    <div class="form-group">
                            <label>Tarefa</label>
                            <input type="text" class="form-control cuteinpt" v-model="task.tarefa">
                        </div>
                        <div class="form-group">
                            <label>Descrição</label>
                            <input type="text" rows="5" class="form-control cuteinpt" v-model="task.descricao">
                        </div>
                        <div class="form-group">
                            <label>Estado</label>
                            <input type="checkbox" class="form-control cuteinpt" v-model="task.done">
                        </div>
                        <button type="button" class="cuteadd" @click="updateTask()"> Atualizar </button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        data() {
            return {
                task: {}
            }
        },
        mounted() {
            this.editTask(this.$route.params.taskId);
        },
        methods: {
            editTask(taskId) {
                this.axios.get(`http://127.0.0.1:8000/api/tasks/${taskId}`)
                   .then((response) => {
                       this.task = response.data;
                   });
            },
            updateTask() {
                this.axios
                    .patch(`http://127.0.0.1:8000/api/tasks/${this.$route.params.taskId}`, this.task)
                    .then((response) => {
                        this.$router.push({ name: 'Index' });
                    });
            }
        }
    }
</script>
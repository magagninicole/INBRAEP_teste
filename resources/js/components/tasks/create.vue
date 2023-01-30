<template>
    <main id="app">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form class="formadd">
                        <h2 class="text-center mt-2">Adicionar tarefa</h2>
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
                        <button type="button" class="cuteadd" @click="createTask()">Adicionar</button>
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
        methods: {
            createTask() {
                this.axios.post('http://127.0.0.1:8000/api/tasks', this.task)
                    .then(response => {
                        this.$router.push({ name: 'Index' })
                    })
                    .catch(error=>{
                      console.log(error)
                    })
            }
        }
    }
</script>
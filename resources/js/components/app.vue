<template>
    <main id="app">
        <div class="container">
            <h1 class="todotitle">To-do List</h1>
            <div class="row">
                <div class="col-md-12 text-center">
                    <ul class="menu">
                        <li>
                            <router-link  to="/tasks" tag="button" class="cutebtn">Listar</router-link>
                        </li>
                        <li>
                            <router-link  to="/tasks/create" tag="button" class="cutebtn">Criar task</router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </main>
</template>
<script>
    export default {}
</script>

<style>
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: #FFB6C1;
    }
</style>
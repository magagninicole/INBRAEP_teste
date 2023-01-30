#To-do List

<br>
Este repositório corresponde a uma lista de atividades implementada utilizando o framework <b>Laravel</b> como back-end e o framework <b>Vue.js</b> para o front-end. A lista deve possibilitar a adição, alteração, exclusão e listagem de atividades.
<br><br>

Para execução deste projeto, é necessário o uso de um software de servidor aberto, como Xampp ou Wamp e a criação de um arquivo .env, ligando o mesmo a um banco de dados (ex: phpmyadmin). O arquivo .env utilizado como base para o desenvolvimento foi o seguinte: 

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:tKEXABdtrd3d77jSWyWUCTXdPBGD7fRFhG8dHdrwLFg=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todolist
DB_USERNAME=root
DB_PASSWORD=
```

Após, deve ser utilizado um terminal para execução dos seguintes comandos:

```
php artisan migrate -- Para migração das tabelas
npm run dev -- Execução do front em modo de desenvolvedor
php artisan serve -- Execução do backend
```

<br>
Assim, o to do list deverá estar rodando em seu localhost, no endereço http://localhost:8000/ e pronto para uso!


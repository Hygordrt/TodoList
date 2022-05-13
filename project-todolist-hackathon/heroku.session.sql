CREATE TABLE tarefas(
    id_tarefa serial PRIMARY KEY,
    tarefa TEXT NOT NULL
);
INSERT INTO tarefas(tarefa)
values('Tarefa Teste 1');
INSERT INTO tarefas(tarefa)
values('Tarefa Teste 2');
INSERT INTO tarefas(tarefa)
values('Tarefa Teste 4');
SELECT *
FROM tarefas;
drop database loja;

create database loja;

use loja;

create table produtos(
id int auto_increment primary key,
nome varchar(100),
preco decimal,
quantidade int
);

SELECT * FROM produtos;

create table funcionarios(
id int auto_increment primary key,
nome varchar(100),
cargo varchar(100),
salario decimal
);

SELECT * FROM funcionarios;
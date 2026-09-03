show databases;

create database oficina;

show tables;

desc veiculo;

use oficina;

create table veiculo (
	placa varchar(7) primary key,
    marca varchar(20) not null,
    modelo varchar(20) not null,
    ano year not null
);

select * from veiculo;

insert into veiculo
(placa, marca, modelo, ano)
values
('zzz2a99', 'honda', 'civic de cria', 2019);
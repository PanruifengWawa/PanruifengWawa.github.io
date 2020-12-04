drop database if exists wenjuan;
create database wenjuan;
use wenjuan;

drop table if exists t_admin;
create table t_admin(
    id serial primary key,
    user_name varchar(32) not null unique,
	name varchar(64) not null,
	password varchar(128) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create index admin_user_name_index on t_admin(user_name);


drop table if exists t_admin_token;
create table t_admin_token(
    id serial primary key,
    admin_id bigint(20) unsigned not null,
    token_str varchar(64) not null unique,
    login_date datetime not null,
    foreign key(admin_id) references t_admin(id) on delete cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
create index admin_token_tokenstr_index on t_admin_token(token_str);


drop table if exists t_wenjuan;
create table t_wenjuan(
    id varchar(256) not null primary key,
    name varchar(256) not null,
    description varchar(512) not null,
    status int not null,
    content longtext not null,
    create_date datetime not null,
    update_date datetime not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

drop table if exists t_wenjuan_result;
create table t_wenjuan_result(
    id serial primary key,
    wenjuan_id varchar(256)  not null,
    content longtext not null,
    result longtext not null,
    user_name varchar(256) not null,
    submit_date date not null,
    foreign key(wenjuan_id) references t_wenjuan(id) on delete cascade,
    unique(wenjuan_id, user_name,submit_date )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- admin123.
INSERT INTO t_admin (`user_name`, `name`, `password`) VALUES ('admin', 'admin', 'd3af3c6ee49bca3db0ebe491ee6a324b');
title: "mysql timestamp和datetime"
date: 2017-02-25 15:00:00 +0800
update: 2017-02-25 15:00:00 +0800
author: me
tags:
    - mysql
    - timestamp
    - datetime
preview: 在实习的时候，看到mysql建表，对于时间字段用的都是timestamp类型。之后在自己的项目中，不问缘由，也全部使用timestamp，然后发生了一系列问题。

---

## date，timestamp和datetime
首先，介绍一下mysql中，常用的时间字段，有date、timestamp和datetime。

- `date` 大小：3 bytes，格式：'YYYY-MM-DD'，范围：'1000-01-01 ~ 9999-12-31'
- `timestamp` 大小：4 bytes，格式：'YYYY-MM-DD HH:MM:SS'，范围：'1970-01-01 08:00:01 ~ 2038-01-19 11:14:07'
- `datetime` 大小：8 bytes，格式：'YYYY-MM-DD HH:MM:SS'，范围：'1000-01-01 00:00:00 ~ 9999-12-31 23:59:59'

在需要精确到时秒分的情况下，我们通常会选择timestamp或者datetime。当时我看别人写的都是用timestamp，而自己又没有去查mysql的文档，所以用的时间戳都是timestamp。

## 问题描述
首先，我们创建一张有timestamp类型的表，用于记录名字和注册时间
``` mysql
create table test1 (
id serial primary key,
name varchar(30) not null,
register_time timestamp not null
);
```
然后插入一条数据
``` myysql
insert into test1(name,register_time) values('dog',now());
```
![](-/images/mysql-timestamp/selectdata.png)
到目前为止，还没有出现任何问题

有一天，dog用户表示自己改名字了，他觉得自己应该叫'chick'，然后他就改名字了
``` mysql
update test1 set name = 'chick' where id = 1;
```
![](-/images/mysql-timestamp/selectdata2.png)
好像也没什么问题。等等！注册时间怎么变了？dog表示不服，因为老用户有很多福利，而自己不过是修改了一下名字，怎么注册时间更新了？

## timestamp
timestamp所占存储空间比较小，但是它有一个特性：默认情况下，在`insert, update`数据时，timestamp 列会自动以当前时间`填充/更新`。

基于这个特性，timestamp适用类似于`updated_time`的字段，而且它所占的存储空间也比较小；不过需要注意的是timestamp比较受时区timezone的影响。

当然也可以取消timestamp在`update`下的自动更新时间
``` mysql
create table test2 (
id serial primary key,
name varchar(30) not null,
register_time timestamp not null default current_timestamp
);
```
这种情况下，当执行`update`的时候，不会去自动更新时间

## datetime
它只是个普通的时间字段，不会自动以当前时间`填充/更新`，注意的是datetime在非空的情况下也会自动填充。
``` mysql 
create table test3 (
id serial primary key,
name varchar(30) not null,
register_time datetime not null
);
insert into test3(name) values('dog');
```
上述情况不会报错，而是会给出一个warning，而且datetime字段会自动填充。
![](-/images/mysql-timestamp/selectdata3.png)

当然如果是可为空的情况下，那么register_time的值就是NULL。

由于datetime比较大，选择datetime作为索引，可能会遇到大量数据查询慢的情况，不过可以使用分区表解决。
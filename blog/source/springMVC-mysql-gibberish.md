title: "springMVC-mysql中文乱码"
date: 2017-02-17 17:00:00 +0800
update: 2017-02-17 17:00:00 +0800
author: me
tags:
    - 中文乱码
    - mysql中文乱码
    - springMVC中文乱码
preview: 在使用springMVC + Hibernate时，有时会出现中文乱码。一般中文乱码出现在web页面，后端服务器和数据库中，而其原因有很多。

---

## web页面乱码
如果是html页面，可以使用
``` html
<meta http-equiv="content-type" content="text/html;charset=gbk" />
```
如果是jsp页面，可以使用
``` html
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
```

## 后端服务器中中文乱码
当服务器接收到网页请求参数，参数是中文，而且发生乱码，则可能是由于一下原因：

- web页面中文编码和后端服务器编码不一致，比如说web客户端使用的是ISO的编码，而服务器使用的是其他编码，就会出现乱码
- 客户端使用了URLEncode

可能的解决方案：

- 对于第一种原因，需要对接收的每个字符串变量重新编码或者对请求增加filter

&emsp;&emsp;&emsp;1. 重新编码比较简单

``` java
new String(request.getParameter("str").getBytes("ISO-8859-1"),"UTF-8")
```

&emsp;&emsp;&emsp;2. 增加filter

&emsp;&emsp;&emsp;修改项目配置文件`web.xml`，增加如下代码
``` xml
<filter>  
    <filter-name>characterEncodingFilter</filter-name>  
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>  
    <init-param>  
    	<param-name>encoding</param-name>  
    	<param-value>UTF-8</param-value>  
    </init-param>  
    <init-param>  
            <param-name>forceEncoding</param-name>  
            <param-value>true</param-value>  
    </init-param>  
</filter>  
<filter-mapping>  
    <filter-name>characterEncodingFilter</filter-name>  
    <url-pattern>/*</url-pattern>  
</filter-mapping>  
```
<br/>

- 对于第二种原因，一般是不会发生乱码的，发生乱码一般是由于请求为`GET`请求，中文参数放在URL内，而服务器没有进行相应的设置

&emsp;&emsp;&emsp;以tomcat为例，修改`server.xml`，增加`URIEncoding="UTF-8"`即可
``` xml
<Connector URIEncoding="UTF-8" connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443"/>
```

## 数据库乱码（mysql）
如果服务没有出现乱码，那么说明是数据库的语言配置出问题了，可以通过`show variables like 'character_set_%';`来查看数据库的编码
![](-/images/springMVC-mysql-gibberish/mysql-charset.jpeg)

其中需要关注的是`服务器`、`数据库`和`数据表部分`的编码，如果这三部分不是你想要的编码，那么需要修改。
``` sql
mysql> SET character_set_client='utf8';
mysql> SET character_set_connection='utf8';
mysql> SET character_set_results='utf8';
```

> 注意的是，上述的仅作用于当前的session，也就是当前数据库用户退出后失效

如果想永久设置，需要修改mysql的`my.cnf`，通过`vim /etc/my.cnf`命令来编辑该文件，进入编辑状态后，在其中修改
``` cnf
[mysqld]
default-character-set=utf8

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
```
修改完成后，重启数据库即可，`service mysqld restart`

除了上述修改编码的方式，还可以在建表时指定表的charset。有的时候一个数据库可能有多个用户在使用，如果直接修改整个数据库的编码，可能造成其他用户的不便，所以可以不改变整个系统的语言，仅指定自己所建表的编码
``` sql
create table mytable(
	name varchar(100)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```




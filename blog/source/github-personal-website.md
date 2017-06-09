title: "github个人主页搭建"
date: 2017-02-14 15:00:00 +0800
update: 2017-02-14 15:00:00 +0800
author: me
tags:
    - 网站搭建
    - 主页搭建
    - 博客搭建
preview: github除了提供分布式代码管理，还提供了个人主页的搭建。

---

## github个人主页(github pages)简介

github pages简介以及如何搭建在[github help](https://help.github.com/categories/github-pages-basics/)里有详细的描述。
本文目的是将其步骤简化，达到快速搭建github个人主页的目的。

### 搭建步骤
1. 申请一个github账号
2. 登录后，新建一个代码仓库，仓库名为 yourusername.github.io

    ![新建代码仓库过程](-/images/github-personal-website/create_new_repository.jpeg)

    > 图片中的warning是由于本人已经创建过该仓库了

3. 在本地电脑安装[github工具](https://git-for-windows.github.io/)，这里给出的是windows版本的，linux和mac的自行安装
4. 在本地新建一个文件夹，进入文件夹后新建一个`index.html`的文件，用记事本打开它，在里面写入`我的个人主页`(如果你会html，那么可以在里面编辑自己想要的页面)
5. 将该文件夹里面的文件`index.html`推到新建的代码仓库，github本地配置以及将代码推到远程仓库的教程已经有很多了，这里可以参照[这一篇](http://blog.csdn.net/qq_24489717/article/details/52556072)
6. 上传代码完成后，可通过`yourusername.github.io`这个域名访问你的个人主页了

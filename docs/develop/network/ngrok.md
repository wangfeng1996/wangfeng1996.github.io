---
title: 内网穿透-ngrok
category: 内网穿透
order: 内网穿透
tag:

- 内网穿透

---

## 什么叫做内网穿透

首先，我们生活中的网络分为内网和外网

内网: 内网就是我们自己的网络环境，就你自己能够访问的，比如说你自己的的本地: localhost

外网: 外网就不言而喻了，你看网页，视频等这些网址都是外网

那么什么叫做内网穿透呢，简单点来说，就是通过访问到外网的地址，然后穿透到你的内网地址

> 内网穿透又叫端口映射，用一句最简单的话来讲就是：将你的计算机所连接的私有网络映射到公网上，别人通过你给的域名或ip即可访问你本地的服务。

## ngrok简介

> 个人认为最好用的，那就是：ngrok 。只需要一行命令就能帮你轻松实现内网穿透！

ngrok 是一个反向代理，通过在公共端点和本地运行的 Web 服务器之间建立一个安全的通道，实现内网主机的服务可以暴露给外网。 ngrok 可捕获和分析所有通道上的流量，便于后期分析和重放，所以ngrok可以很方便地协助服务端程序测试。

## 特点

+ 官方维护,一般比较稳定
+ 跨平台,非开源
+ 有流量记录和重发功能

## 注册登录账号

从官网（https://ngrok.com/） 右上角 Sign Up 进入，完成庄户注册。如果有GitHub账号的，直接GitHub授权登录，快得很！
完成注册并登录之后，可以看到Dashboard中就给出了使用的三个步骤：

+ 主页面
    <div align="center">
    <img src="/images/network/01-home.png" style="zoom:30%;" alt="ngrok主页面"/>
    </div>
+ 登录页面
    <div align="center">
    <img src="/images/network/02-login.png" style="zoom:30%;" alt="ngrok主页面"/>
    </div>

`注:` <font color="green">如果有GitHub账号直接可以使用GitHub账号直接登录</font>

+ 完成登录后-Dashboard页面
    <div align="center">
    <img src="/images/network/03-img.png" style="zoom:30%;" alt="Dashboard页面"/>
    </div>

## 安装Ngrok

+ 进入官网/Dashboard 页面下载与操作系统相匹配的版本
    + macOS
    + Linux
    + Windows
    + freeBSD

+ 官方给出了每个操作系统的安装方式，很良心，直接访问官网按照官网的步骤操作即可
+ 个人推荐直接下载ZIP包，然后直接解压，这种方式最为迅速！
+ 下面以macos为列，进行配置安装
    + 安装
  ```shell
  brew install ngrok/ngrok/ngrok
  ```

## 配置账户

直接复制Dashboard中第二步的ngrok config add-authtoken xxxxx命令，然后打开终端，定位到之前解压ngrok的位置执行它！
```shell
ngrok config add-authtoken xxxxxx
```

+ 终端会输出为你保存的配置路径(macos)

  ```shell
  路径地址:    /Users/wang/Library/Application Support/ngrok
  ```

+ 启动ngrok
执行命令启动内网穿透：
  ```shell
  ngrok http 8089
  ```
这里没用dashboard的80端口，用了其他的端口，如果你本地的服务用了其他端口，记得修改一下就可以了。

此时，终端也变了一副画面，具体如下：
  <div align="center">
      <img src="/images/network/04-img.png" style="zoom:80%;" alt="启动窗口"/>
  </div>







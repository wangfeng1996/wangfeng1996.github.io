---
title: Homebrew
category: homebrew
order: 1
tag:
- homebrew
---
# Homebrew 使用指南

对于习惯了使用命令来完成一切的程序员来说，安装软件这种小事，自然是能够用命令解决，就不用图形界面选择。但是在 Linux 中，我们有 `yum`、`apt`、`dnf`、`pkg`等命令来完成软件的安装，macOS 却并未为我们提供一个好用的包管理器，帮助我们更好的使用 macOS。

好在，虽然官方没有提供，我们却可以使用 **Homebrew** 这一神器，来完成类似的工作，就如同 Homebrew 的 Slogan ：“The missing package manager for macOS (or Linux)”

## Homebrew介绍

Homebrew 由开发者 Max Howell 开发，并基于 BSD 开源，是一个非常方便的包管理器工具。在早期， Homebrew 仅有 macOS 的版本，后续随着用户的增多，Homebrew 还提供了 Linux 的版本，帮助开发者在 Linux 同样使用 Homebrew 来配置环境。

## Homebrew 的几个核心概念

在正式介绍 Homebrew 的使用之前，我先为你介绍一下 Homebrew 中的一些核心的概念，了解这些概念，就可以帮助你更好的去使用 Homebrew。

| 词汇        | 含义                                                         |
| :---------- | :----------------------------------------------------------- |
| formula (e) | 安装包的描述文件，formulae 为复数                            |
| cellar      | 安装好后所在的目录                                           |
| keg         | 具体某个包所在的目录，keg 是 cellar 的子目录                 |
| bottle      | 预先编译好的包，不需要现场下载编译源码，速度会快很多；官方库中的包大多都是通过 bottle 方式安装 |
| tap         | 下载源，可以类比于 Linux 下的包管理器 repository             |
| cask        | 安装 macOS native 应用的扩展，你也可以理解为有图形化界面的应用。 |
| bundle      | 描述 Homebrew 依赖的扩展                                     |

其中，最关键的是 tap 、cask，我们在后续会经常用到。

## Homebrew 常用操作

### 安装 Homebrew

#### 要求
+ 64-bit Intel CPU 或者 Apple Silicon CPU(苹果自己研发的CPU)
+ macOS版本为Mojave（10.14）或者以上
+ Xcode命令行工具（安装Command Line Tools）
  `安装xcode命令`
    ```shell
    xcode-select --install
    ```
+ 支持shell (zsh或者bash) 在macOS 10.15 之后 默认shell是zsh
    ```shell
    # 查看当前使用的shell
    echo $SHELL
    # 查看所有的shell
    cat /etc/shells
    # 修改默认shell为zsh
    chsh -s /bin/zsh
    ```
#### 安装和卸载
+ 安装
    ```shell
    # 拉脚本
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # 检查brew是否安装成功
    brew help
    # 替换brew.git
    cd "$(brew --repo)"
    git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
    # homebrew-core.git
    cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
    git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
    # 替换Bottles源
    
    # zsh
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
    # 全局配置
    source ~/.zshrc
    
    # bash
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
    source ~/.bash_profile
    
    # 更新brew
    brew update
    ```
  
+ 卸载
    ```shell
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
    ```
    **`tip:`** Homebrew 会将软件包安装到独立目录，并将其文件软链接至 `/usr/local`

### 安装软件

当你完成了 Homebrew 以后，就可以使用 Homebrew 来完成软件的安装了，安装命令行软件的时候非常简单，只需要执行 `brew install [软件名]` 就可以安装软件了，比如说，我们要安装 wget，那么只需要执行 `brew install wget` 就可以了。

### 搜索软件

很多时候，我们不知道自己想要的软件是否有，或者说具体的名字是什么，这个时候你有两种方式来完成搜索

#### 1. 使用命令搜索

在命令行中，你可以直接使用 `brew search [关键词]` 来进行搜索
![关键字搜索](/images/homebrew/homebrew-01.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">搜索软件</center>

> 命令行搜索软件 输入你想要的关键词，来搜索即可得到结果。 
> 在搜索时应当遵循宁可少字，不能错字的原则来搜索。

#### 2. 使用网页搜索
除了使用命令行搜索以外，你可以使用网页端的搜索工具来辅助你进行搜索。在 Homebrew 的官网，你可以找到 formulae 的链接，或者直接访问 [https://formulae.brew.sh/](https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2F) 来进行搜索。你只需要在界面的输入框中输入你要搜索的命令，然后就会出现对应的候选命令
![img](/images/homebrew/homebrew-03.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">搜索软件</center>
选择其中你要使用的那个，点击就会进入到软件的介绍页面

![img](/images/homebrew/homebrew-02.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">查看软件介绍</center>
你就可以看到 Homebrew 中的软件具体信息。

### 查看已经安装的包

如果你想要查看你都安装了哪些包，你可以执行 `brew list` 命令，来查看所有你已经安装的软件。
![img](/images/homebrew/homebrew-04.png)

<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">查看所有软件</center>

### 更新一个已经安装的包

我们安装的软件并不会自动更新，因此，我们可以根据自己的需求，批量更新软件，或者更新单个软件。

你可以先使用 `brew outdated` 来查看所有有更新版本的软件。

![img](/images/homebrew/homebrew-05.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">查看需要更新的软件</center>
然后使用 `brew upgrade` 来更新所有的软件，或者是使用 `brew upgrade [软件名]`来更新单个软件。

### 卸载某个已经安装的包
如果你想要卸载某个包，你可以执行 `brew uninstall [软件名]` 来卸载一个特定的软件，比如卸载 wget 是这样的。
![img](/images/homebrew/homebrew-06.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">卸载某个已经安装的包</center>

### 查看包的信息

如果你想要查看某个特定软件的信息，你可以执行命令 `brew info [软件名]` 来查看该软件的详情。
![img](/images/homebrew/homebrew-07.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">查看包的信息</center>

### 清理软件的旧版

Homebrew 用久了，会有一些历史版本的软件遗留在系统里，这个时候，你可以使用 `brew cleanup` 命令来清理系统中所有软件的历史版本，或者可以使用 `brew cleanup [软件名]`来清理特定软件的旧版。
![img](/images/homebrew/homebrew-08.png)
<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">清理软件的旧版</center>

### 常用命令 
#### 管理后台软件命令
> 诸如 Nginx、MySQL 等软件，都是有一些服务端软件在后台运行，如果你希望对这些软件进行管理，可以使用 `brew services` 命令来进行管理
- `brew services list`: 查看所有服务
- `brew services run [服务名]`: 单次运行某个服务
- `brew services start [服务名]`: 运行某个服务，并设置开机自动运行。
- `brew services stop [服务名]`：停止某个服务
- `brew services restart`：重启某个服务

#### 其他命令
- `brew -v`: 查看homebrew版本
- `brew list`: 查看已安装的包 
- `brew install packageName`: 安装某个软件 
- `brew uninstall packageName`: 卸载某个软件
- `brew searck packageName`: 查找某个软件
- `brew info packageName`: 查看软件包的信息
- `brew update`: 更新homebrew
- `brew doctor`: 诊断homebrew
- `brew -h`: 查看帮助信息
- `brew cleanup`: 清理旧版本
- `brew upgrade `: 全部更新 
- `brew upgrade packageName`: 更新指定包
- `brew outdated`: 查询可更新的包
- `brew install --cask packageName`: 安装 macOS 应用程序、字体和插件以及其他非开源软件
- `brew uninstall --cask packageName`: 卸载 macOS 应用程序、字体和插件以及其他非开源软件
- `brew tap`: 列出当前的存储库

### 检查 Hombrew 环境

如果你的 Hombrew 没有办法正常的工作，你可以执行 `brew doctor` 来开启 Homebrew 自带的检查，从而确认有哪些问题，并进行修复。
![img](/images/homebrew/homebrew-09.png)

<center style="font-size:14px;color:#C0C0C0;padding-bottom:5px;line-height: 0.9">检查 Hombrew 环境</center>

### 更新 Homebrew

Homebrew 经常会在执行命令的时候触发更新，不过如果你想要主动检查更新，可以执行 `brew update` 来唤起 Homebrew 的更新。

### 添加一个新的 tap

homebrew 官方在安装的时候会有一些 tap 但是在使用时，依然会需要安装一些特殊的 tap ，这个时候，我们就要用到 tap 的命令来添加新的 tap.

在添加 tap 时，输入命令 `brew tap [user/repo]` ，就可以完成添加 tap 了

## 常用 tap

在使用 homebrew 时，我们一般会添加几个常用的 tap，来确保我们有足够的软件来安装。

### 1. Caskroom

Caskroom 是 Homebrew 下一个非常出名的 tap ，有了 caskroom，我们就可以安装一些有图形化界面的软件了，比如 VSCode、Typora 等软件。

使用起来也非常简单，最新版 Homebrew 中，你可以直接使用 `brew cask install [软件名]` 来安装特定的软件，homebrew 会自动安装 Caskroom。

### 2. homebrew-cask-fonts

程序员难免要安装一些代码字体，这样才能更好的写代码，Homebrew 也提供了方便我们安装字体的 tap。

在使用时，你需要先添加对应的 tap ，然后执行安装即可了，比如我们要安装 source code pro ，只需要执行如下命令。



```undefined
brew tap homebrew/cask-fonts
brew cask install font-source-code-pro
```

## 使用技巧

### 切换国内的镜像源

Homebrew 默认使用的是国外的源，在下载时速度可能会比较慢。好在国内的清华大学和中科大提供了 Homebrew 的镜像源，我们可以很轻松的切换源，从而提升我们的下载速度。

#### 使用中科大的镜像

执行如下命令，即可切换为中科大的镜像

```bash
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
```

#### 使用清华大学的镜像

执行如下命令，即可切换为清华大学的镜像

```bash
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

### 使用 Brewfile 完成环境迁移

设备永久了，我们的电脑中会有大量的软件，如果你需要迁移环境，重新安装会是一个大麻烦，好在 Homebrew 本身为我们提供了一个非常好用的环境迁移的工具 —— Homebrew Bundle

你首先需要在之前的电脑中执行 `brew bundle dump` 来完成当前环境的导出,导出完成后，你会得到一个 *Brewfile*。

![img](/images/homebrew/homebrew-10.png)

然后将 *Brewfile* 复制到新的电脑中，并执行 `brew bundle` 来开始安装的过程。

### 使用网页搜索 Caskroom 的软件

Brew Caskroom 并没有提供搜索的命令，不过我们可以借助一些网站来进行搜索，一个是 Homebrew 官方的 Caskrrom 页面：[https://formulae.brew.sh/cask/](https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2Fcask%2F)

![img](/images/homebrew/homebrew-11.png)

在这个页面，你可以看到所有被收录的页面，在命令行中输入对应的软件就可以安装了。

你也可以访问 [http://macappstore.org/，在网站中输入你要安装的软件，点击搜索，在弹出的页面中，查看安装指南即可。](https://links.jianshu.com/go?to=http%3A%2F%2Fmacappstore.org%2F%EF%BC%8C%E5%9C%A8%E7%BD%91%E7%AB%99%E4%B8%AD%E8%BE%93%E5%85%A5%E4%BD%A0%E8%A6%81%E5%AE%89%E8%A3%85%E7%9A%84%E8%BD%AF%E4%BB%B6%EF%BC%8C%E7%82%B9%E5%87%BB%E6%90%9C%E7%B4%A2%EF%BC%8C%E5%9C%A8%E5%BC%B9%E5%87%BA%E7%9A%84%E9%A1%B5%E9%9D%A2%E4%B8%AD%EF%BC%8C%E6%9F%A5%E7%9C%8B%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97%E5%8D%B3%E5%8F%AF%E3%80%82)
![img](/images/homebrew/homebrew-12.png)
## 辅助软件

除了命令行，还有两款软件可以帮助我们更好的使用 Homebrew ，他们分别是 Cakebrew 和 launchrocket。

### Cakebrew

Cakebrew 是 Homebrew 的 GUI 管理器，在 Cakebrew 中，你可以看到当前所有已经安装的软件，并可以在 Caskbrew 中对其他软件执行升级等操作。

你只需要执行 `brew cask install cakebrew` 就可以完成 Cakebrew 的安装。

安装完成后，在 LaunchPad 中打开即可。

### launchrocket

launchrocket 可以用于管理 Homebrew 安装的服务，在使用时，你需要先添加对应的tap，然后再安装软件。

```undefined
brew tap jimbojsb/launchrocket
brew cask install launchrocket
```

安装完成后，在 LaunchPad 中打开即可。



## 安装配置开发环境

### JDK的安装与环境变量的配置

#### 安装

+ 搜索软件

```shell
brew  search adoptopenjdk
```

+ 安装软件
  + 安装源（我使用的是第二个）
    + homebrew/cask-versions/adoptopenjdk8
    + adoptopenjdk/openjdk/adoptopenjdk8

```shell
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

+ 安装完毕后，输入下面的指令

```shell
# 查看java版本号
java -version
# 回显版本号的相关信息
openjdk version "1.8.0_292"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
```

#### 环境变量的配置

+ 查看jdk安装地址

```shell
# 查看地址
/usr/libexec/java_home
# 回显
Matching Java Virtual Machines (1):
    1.8.0_292 (x86_64) "AdoptOpenJDK" - "AdoptOpenJDK 8" /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

+ 从终端输出结果可以得出：JAVA_HOME路径

```shell
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

+ 查看是否配置了环境变量

```shell
echo $JAVA_HOME
如果出现空白，说明还没有配置
```

+ 配置环境变量（在.zshrc添加下面几行）

```shell
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH
export CLASS_PATH=$JAVA_HOME/lib
```

+ 使修改的文件生效

```shell
source ~/.zshrc
```

+ 查看环境变量是否生效

```shell
echo $JAVA_HOME
如果出现空白，说明还没有生效

# 如果能正确输出Java安装目录，则说明配置已生效
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
```

### maven的安装

+ brew查找maven版本

```shell
brew search maven
```

+ 安装

```shell
brew install maven@3.5
```

+ maven在zsh环境变量配置，安装完了有提示的，直接复制就行

```shell
echo 'export PATH="/usr/local/opt/maven@3.5/bin:$PATH"' >> ~/.zshrc
```

+ 查看是否安装成功

```shell
# 查看是否安装成功
mvn -v
# 回显
Maven home: /usr/local/Cellar/maven@3.5/3.5.4_1/libexec
Java version: 1.8.0_292, vendor: AdoptOpenJDK, runtime: /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "mac os x", version: "10.16", arch: "x86_64", family: "mac"
```

### git的安装

+ brew 查找git版本

```shell
brew search git
```

+ brew 安装Git

```shell
brew install git
```

+ 安装完毕后查看版本号

```shell
# 查看git的版本号
git --verison
# 回显
git version 2.33.0
```

### node的安装

+ brew 查找node版本

```shell
brew search node
```

+ brew 安装node

```shell
brew install node@12
```

+ node在zsh环境变量配置，安装完了有提示的，直接复制就行

```shell
echo 'export PATH="/usr/local/opt/node@12/bin:$PATH"' >> ~/.zshrc
```

+ 配置npm

> 遇到过 cnpm 的 bug，所以不适用 cnpm，直接配置淘宝镜像			

```shell
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

# 查看镜像源是否配置成功
npm config get registry
npm config get disturl
```

### mysql的安装


+ brew查找mysql版本

```shell
brew search mysql
```

+ 安装

```shell
brew install mysql@5.7
```

+ 开机自动启动

```shell
brew services start mysql@5.7

# 如果你不想/不需要后台服务，你可以运行:
/usr/local/opt/mysql@5.7/bin/mysqld_safe --datadir=/usr/local/var/mysql
```

+ mysql在zsh环境变量配置，安装完了有提示的，直接复制就行

```shell
export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"
```

+  连接mysql，root用户无初始密码，直接回车

```shell
mysql -uroot -p

ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)  ---这个情况是mysql还没有被启动
```

+  设置root用户初始密码，为'root'

```mysql
set password for 'root'@'localhost' = 'root';
```

+ mysql创建新的用户（必须在root用户下执行）

```mysql
// 语句
CREATE USER '用户名'@'ip' IDENTIFIED BY '密码';
// 样列
CREATE USER 'wangfeng'@'LOCALHOST' IDENTIFIED BY 'wangfeng';
```

+ mysql新用户赋予权限（必须在root用户下执行）

```mysql
grant 权限 on *.* to '用户'@'ip'; //  *.* 代表所有库下的所有表

// 比如给该用户下所有的库赋予查询的权限
grant select on *.* to '用户'@'ip';

// 给用户赋予crud的权限
grant select,delete,update,create,drop on *.* to 'wangfeng'@'localhost' identified by "wangfeng";

// 赋予所有的权限
grant all privileges on *.* to '用户'@'ip';

赋权限后记得刷新： flush privileges;

```

+ mysql 删除权限

```mysql
// 查看用户的权限
show grants for 'wangfeng'@'localhost';

// 删除用户的权限
revoke all privileges on *.* from '用户'@'ip';

// 刷新权限
flush privileges;

```

+ 删除用户

```mysql
# 要查看MySQL服务器中的数据库:mysql的所有用户信息
USE mysql;
SELECT user, host FROM mysql.user;

# 假设您要删除用户帐户：`wangfeng`，请使用以下语句：
1、DROP USER 'wangfeng';
2、再次从[mysql.user]表中查询数据，您将看到用户ip@localhost已被删除。

# 要删除数据库中的两个用户：remote_user和auditor的帐户，请使用以下语句：
DROP USER user1, user2;
  ```


## Reference

- Homebrew 官网：[https://brew.sh](https://links.jianshu.com/go?to=https%3A%2F%2Fbrew.sh)
- Homebrew Github：[https://github.com/Homebrew/brew](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FHomebrew%2Fbrew)
- Homebrew 的 Manpage 说明书：[https://docs.brew.sh/Manpage](https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.brew.sh%2FManpage)




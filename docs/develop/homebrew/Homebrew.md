---
title: Homebrew
category: homebrew
order: 1
tag:
  - homebrew
---

# Homebrew 使用指南

对于习惯了使用命令来完成一切的程序员来说，安装软件这种小事，自然是能够用命令解决，就不用图形界面选择。但是在 Linux
中，我们有 `yum`、`apt`、`dnf`、`pkg`等命令来完成软件的安装，macOS 却并未为我们提供一个好用的包管理器，帮助我们更好的使用
macOS。

好在，虽然官方没有提供，我们却可以使用 **Homebrew** 这一神器，来完成类似的工作，就如同 Homebrew 的 Slogan ：“The missing
package manager for macOS (or Linux)”

## 一、Homebrew介绍

Homebrew 由开发者 Max Howell 开发，并基于 BSD 开源，是一个非常方便的包管理器工具。在早期， Homebrew 仅有 macOS
的版本，后续随着用户的增多，Homebrew 还提供了 Linux 的版本，帮助开发者在 Linux 同样使用 Homebrew 来配置环境。

## 二、Homebrew 的几个核心概念

在正式介绍 Homebrew 的使用之前，我先为你介绍一下 Homebrew 中的一些核心的概念，了解这些概念，就可以帮助你更好的去使用
Homebrew。

| 词汇          | 含义                                                  |
|:------------|:----------------------------------------------------|
| formula (e) | 安装包的描述文件，formulae 为复数                               |
| cellar      | 安装好后所在的目录                                           |
| keg         | 具体某个包所在的目录，keg 是 cellar 的子目录                        |
| bottle      | 预先编译好的包，不需要现场下载编译源码，速度会快很多；官方库中的包大多都是通过 bottle 方式安装 |
| tap         | 下载源，可以类比于 Linux 下的包管理器 repository                   |
| cask        | 安装 macOS native 应用的扩展，你也可以理解为有图形化界面的应用。             |
| bundle      | 描述 Homebrew 依赖的扩展                                   |

其中，最关键的是 tap 、cask，我们在后续会经常用到。

## 三、Homebrew 常用操作

### 1、要求

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

### 2、安装

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

### 3、卸载

  ```shell
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
  ```

**`tip:`** Homebrew 会将软件包安装到独立目录，并将其文件软链接至 `/usr/local`

### 4、安装软件

> 当你完成了 Homebrew 以后，就可以使用 Homebrew
> 来完成软件的安装了，安装命令行软件的时候非常简单，只需要执行 `brew install [软件名]` 就可以安装软件了，比如说，我们要安装
> wget，那么只需要执行 `brew install wget` 就可以了。

### 5、搜索软件

> 很多时候，我们不知道自己想要的软件是否有，或者说具体的名字是什么，这个时候你有两种方式来完成搜索

#### 5.1 使用命令搜索

在命令行中，你可以直接使用 `brew search [关键词]` 来进行搜索
![搜索软件](/images/homebrew/homebrew-01.png)

**`tip:`** 命令行搜索软件 输入你想要的关键词，来搜索即可得到结果。 在搜索时应当遵循宁可少字，不能错字的原则来搜索。

#### 5.2 使用网页搜索

> 除了使用命令行搜索以外，你可以使用网页端的搜索工具来辅助你进行搜索。在 Homebrew 的官网，你可以找到 formulae
> 的链接，或者直接访问 [https://formulae.brew.sh/](https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2F)
> 来进行搜索。你只需要在界面的输入框中输入你要搜索的命令，然后就会出现对应的候选命令

![搜索软件](/images/homebrew/homebrew-03.png)

**`tip:`** 选择其中你要使用的那个，点击就会进入到软件的介绍页面

![查看软件介绍](/images/homebrew/homebrew-02.png)

**`tip:`** 你就可以看到 Homebrew 中的软件具体信息。

### 6、查看已经安装的包

如果你想要查看你都安装了哪些包，你可以执行 `brew list` 命令，来查看所有你已经安装的软件。
![查看所有软件](/images/homebrew/homebrew-04.png)

### 7、更新一个已经安装的包

> 我们安装的软件并不会自动更新，因此，我们可以根据自己的需求，批量更新软件，或者更新单个软件。
> 你可以先使用 `brew outdated` 来查看所有有更新版本的软件。
> 然后使用 `brew upgrade` 来更新所有的软件，或者是使用 `brew upgrade [软件名]`来更新单个软件。

![查看需要更新的软件](/images/homebrew/homebrew-05.png)

### 8、卸载某个已经安装的包

如果你想要卸载某个包，你可以执行 `brew uninstall [软件名]` 来卸载一个特定的软件，比如卸载 wget 是这样的。
![卸载某个已经安装的包](/images/homebrew/homebrew-06.png)

### 9、查看包的信息

如果你想要查看某个特定软件的信息，你可以执行命令 `brew info [软件名]` 来查看该软件的详情。
![查看包的信息](/images/homebrew/homebrew-07.png)

### 10、清理软件的旧版

> Homebrew 用久了，会有一些历史版本的软件遗留在系统里，这个时候，你可以使用 `brew cleanup`
> 命令来清理系统中所有软件的历史版本，或者可以使用 `brew cleanup [软件名]`来清理特定软件的旧版。
![清理软件的旧版](/images/homebrew/homebrew-08.png)

### 11、常用命令

#### 11.1 管理后台软件命令

> 诸如 Nginx、MySQL 等软件，都是有一些服务端软件在后台运行，如果你希望对这些软件进行管理，可以使用 `brew services` 命令来进行管理

- `brew services list`: 查看所有服务
- `brew services run [服务名]`: 单次运行某个服务
- `brew services start [服务名]`: 运行某个服务，并设置开机自动运行。
- `brew services stop [服务名]`：停止某个服务
- `brew services restart`：重启某个服务

#### 11.2 其他命令

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

### 12、检查 Hombrew 环境

> 如果你的 Hombrew 没有办法正常的工作，你可以执行 `brew doctor` 来开启 Homebrew 自带的检查，从而确认有哪些问题，并进行修复。

![检查 Hombrew 环境](/images/homebrew/homebrew-09.png)

### 13、更新 Homebrew

> Homebrew 经常会在执行命令的时候触发更新，不过如果你想要主动检查更新，可以执行 `brew update` 来唤起 Homebrew 的更新。

### 14、tap命令

> homebrew 官方在安装的时候会有一些 tap 但是在使用时，依然会需要安装一些特殊的 tap ，这个时候，我们就要用到 tap 的命令来添加新的tap

#### 14.1 添加tap

```shell
  brew tap [user/repo]
````

#### 14.2 常用 tap

> 在使用 homebrew 时，我们一般会添加几个常用的 tap，来确保我们有足够的软件来安装。

+ Caskroom

> Caskroom 是 Homebrew 下一个非常出名的 tap ，有了 caskroom，我们就可以安装一些有图形化界面的软件了，比如 VSCode、Typora
> 等软件。
> 使用起来也非常简单，最新版 Homebrew 中，你可以直接使用 `brew cask install [软件名]` 来安装特定的软件，homebrew
> 会自动安装Caskroom。

+ homebrew-cask-fonts

> 1、程序员难免要安装一些代码字体，这样才能更好的写代码，Homebrew 也提供了方便我们安装字体的tap。
> 2、在使用时，你需要先添加对应的 tap ，然后执行安装即可了，比如我们要安装 source code pro，只需要执行如下命令。

```shell
brew tap homebrew/cask-fonts
brew cask install font-source-code-pro
```

## 四、使用技巧

### 1、切换国内的镜像源

> Homebrew 默认使用的是国外的源，在下载时速度可能会比较慢。好在国内的清华大学和中科大提供了Homebrew的镜像源，我们可以很轻松的切换源，从而提升我们的下载速度。

#### 1.1 使用中科大的镜像

```shell
# 执行如下命令，即可切换为中科大的镜像（打开item2或者item）
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
```

#### 1.2 使用清华大学的镜像

```shell
# 执行如下命令，即可切换为中科大的镜像（打开item2或者item）
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

### 2、使用 Brewfile 完成环境迁移

> 1、设备永久了，我们的电脑中会有大量的软件，如果你需要迁移环境，重新安装会是一个大麻烦，好在 Homebrew
> 本身为我们提供了一个非常好用的环境迁移的工具 —— Homebrew Bundle
> 2、你首先需要在之前的电脑中执行 `brew bundle dump` 来完成当前环境的导出,导出完成后，你会得到一个 *Brewfile*。

![img](/images/homebrew/homebrew-10.png)

**注意：:** 然后将 *Brewfile* 复制到新的电脑中，并执行 `brew bundle` 来开始安装的过程。

### 3、 使用网页搜索 Caskroom 的软件

> Brew Caskroom 并没有提供搜索的命令，不过我们可以借助一些网站来进行搜索，一个是 Homebrew 官方的 Caskrrom

页面：[https://formulae.brew.sh/cask/](https://links.jianshu.com/go?to=https%3A%2F%2Fformulae.brew.sh%2Fcask%2F)

![img](/images/homebrew/homebrew-11.png)

在这个页面，你可以看到所有被收录的页面，在命令行中输入对应的软件就可以安装了。

你也可以访问 [http://macappstore.org/，在网站中输入你要安装的软件，点击搜索，在弹出的页面中，查看安装指南即可。](https://macappstore.org/)
![img](/images/homebrew/homebrew-12.png)

### 4、 辅助软件

> 除了命令行，还有两款软件可以帮助我们更好的使用 Homebrew ，他们分别是 Cakebrew 和 launchrocket。

+ Cakebrew

> Cakebrew 是 Homebrew 的 GUI 管理器，在 Cakebrew 中，你可以看到当前所有已经安装的软件，并可以在 Caskbrew 中对其他软件执行升级等操作。

```shell
# 安装
brew install --cask cakebrew
```

**tip:** 安装完成后，在 LaunchPad 中打开即可。

+ launchrocket

> launchrocket 可以用于管理 Homebrew 安装的服务，在使用时，你需要先添加对应的tap，然后再安装软件。

```shell
brew tap jimbojsb/launchrocket
brew install --cask launchrocket
```

**tip:** 安装完成后，在 LaunchPad 中打开即可。

## 五、安装配置开发环境

### 1、JDK安装

> 使用HomeBrew推荐Adoptium提供的包

[安装网站：Adoptium](https://adoptium.net/zh-CN/docs/)

+ 搜索软件(输入)

```shell
brew  search temurin
```

+ 输出

```shell
==> Casks
temurin                            homebrew/cask-versions/temurin17   homebrew/cask-versions/temurin19   homebrew/cask-versions/temurin21
homebrew/cask-versions/temurin11   homebrew/cask-versions/temurin18   homebrew/cask-versions/temurin20   homebrew/cask-versions/temurin8
```

+ 安装指定版本 1.8

```shell
brew install --cask homebrew/cask-versions/temurin8
```

+ 安装指定版本 17

```shell
brew install --cask homebrew/cask-versions/temurin17
```

+ 配置环境变量（在.zshrc添加下面几行）

```shell
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH
export CLASS_PATH=$JAVA_HOME/lib
```

+ Mac 下的 Java 版本管理工具 Jenv
  > jEnv是一个命令行工具，正如它的官网所宣称的那样，它是来让你忘记怎么配置JAVA_HOME环境变量的神队友。使用简单的命令就可以在不同的Java版本之间进行切换。
  [Jenv官网](https://www.jenv.be/)    &nbsp; &nbsp; &nbsp; &nbsp;    [GitHub地址](https://github.com/jenv/jenv)
    + 使用homebrew安装jenv
      ```shell
      brew install jenv
      ```
    + jenv配置环境
      ```shell
      # 打开 ~/.zshrc 进行简单的配置
      vim ~/.zshrc
  
      # 写入配置（.zshrc）
      export PATH="$HOME/.jenv/bin:$PATH"
      eval "$(jenv init -)"
  
      # 保存并退出（切换为插入模式）
      :wq
  
      # 全局配置
      source ~/.zshrc
      ```
    + 安装jenv成功后,添加需要管理的JDK
        + 查看已安装的JDK版本本地存储路径
          ```shell
          /usr/libexec/java_home -V
          ```
        + 输出
          ```shell
            Matching Java Virtual Machines (2):
          17.0.10 (x86_64) "Oracle Corporation" - "Java SE 17.0.10" /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
          1.8.0_402 (x86_64) "Eclipse Temurin" - "Eclipse Temurin 8" /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
          /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
          ```
    + jenv添加需要管理的本地路径
      ```shell
      # 添加jdk17
        jenv add /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
      # 添加jdk8  
        jenv add /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
      ```
    + 诊断jenv是否配置成功
        + 输入
          ```shell
          jenv doctor
          ```
        + 输出
          ```shell
            [OK]    No JAVA_HOME set
            [OK]    Java binaries in path are jenv shims
            [OK]    Jenv is correctly loaded
          ```
    + 查看添加到jenv的JDK版本
      ```shell
        jenv versions
          
        # 输出（* 代表当前使用的java版本）
        system
      * 1.8  (set by /Users/wang/.jenv/version)
        1.8.0.281
        18.0
        18.0.2
        oracle64-1.8.0.281
        oracle64-18.0.2
       ```
    + 删除添加到jenv的JDK版本
      ```shell
      # 添加新版本时，每个版本都会一次性自动加入多个不同版本，有些就是简称而已，其实都指向同一个版本，这里便于区分，可以将简略版本删除
      jenv remove  1.8.0.281
      ```
    + jEnv配置全局的jdk版本（推荐使用）
      ```shell
      #  global 不会覆盖已经使用了 jenv local 指定了 JDK 版本的命令行窗口
      jenv global 17.0
      ```
    + 配置本地版本（每个目录）
      ```shell
      # 若提示没有权限 使用 sudo 即可,
      # 注意：慎用此命令，此命令会在当前目录下生成名为 .java-version 的隐藏文件
      
      jenv local 17.0
      ```
    + 配置shell实例版本（当前shell）
      ```shell
      jenv shell 17.0
      ```
    + 启用maven插件
        ```shell
      # 输入
        jenv enable-plugin maven
      # 输出
        maven plugin activated
        ```
    + 停用maven插件
        ```shell
        # 输入
      jenv disable-plugin maven
       # 输出
      maven disabled
        ```
    + 查看当前版本的引用位置
      ```shell
      # 输入
        jenv which java
       # 输出
        /Users/wang/.jenv/versions/temurin64-1.8.0.402/bin/java
      
      # /Users/wang/.jenv/versions 目录，所有的 jdk 版本都在这里，这里只是引用地址
      # 通过 ls -l 可以看到实际的安装目录
      # 输入
        cd /Users/wang/.jenv/versions
        ls -l
      # 输出
        total 0
        lrwxr-xr-x  1 wang  staff  58  3  1 15:58 17.0 -> /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
        lrwxr-xr-x  1 wang  staff  61  3  1 14:56 temurin64-1.8.0.402 -> /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
       ```
    + 其他注意点
        + jenv只改变了java -version的版本
        + /usr/libexec/java_home 的版本自动默认使用最高版本
    + 修改/usr/libexec/java_home的指向版本
        + 打开java jdk安装路径中的plist配置文件：
          ```shell
          # 选择高版本的配置文件
          /Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Info.plist
          ```
        + 修改标签JVMVersion
            + 需要改为比其他的jdk版本好，如当前版本为17.0.10，可修改为 1.8.0.281
            + 终端再次执行/usr/libexec/java_home命令，发现已修改成功：
               ```shell
                # 输入
              /usr/libexec/java_home
                # 输出
               /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
              ```

### 2、maven的安装

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

### 3、git的安装

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

### 4、node的安装

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
npm config set registry https://registry.npmmirror.com --global
npm config set disturl https://npmmirror.com/dist --global

# 查看镜像源是否配置成功
npm config get registry
npm config get disturl
```

### 5、mysql的安装

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

+ 连接mysql，root用户无初始密码，直接回车

```shell
mysql -uroot -p

ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)  ---这个情况是mysql还没有被启动
```

+ 设置root用户初始密码，为'root'

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
grant 权限 on *.* to '用户'@'ip';
//  *.* 代表所有库下的所有表

// 比如给该用户下所有的库赋予查询的权限
grant select on *.* to '用户'@'ip';

// 给用户赋予crud的权限
grant select, delete, update, create, drop on *.* to 'wangfeng'@'localhost' identified by "wangfeng";

// 赋予所有的权限
grant all privileges on *.* to '用户'@'ip';

赋权限后记得刷新：
flush privileges;

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
SELECT user, host
FROM mysql.user;

# 假设您要删除用户帐户：`wangfeng`，请使用以下语句：
1、DROP USER 'wangfeng';
2、再次从[mysql.user]表中查询数据，您将看到用户ip@localhost已被删除。

# 要删除数据库中的两个用户：remote_user和auditor的帐户，请使用以下语句：
DROP USER user1, user2;
  ```

## Reference

- Homebrew 官网：[https://brew.sh](https://links.jianshu.com/go?to=https%3A%2F%2Fbrew.sh)
- Homebrew
  Github：[https://github.com/Homebrew/brew](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FHomebrew%2Fbrew)
- Homebrew 的 Manpage
  说明书：[https://docs.brew.sh/Manpage](https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.brew.sh%2FManpage)




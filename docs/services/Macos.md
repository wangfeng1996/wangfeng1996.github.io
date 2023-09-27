---
title: macOS
category: macOS
order: 2
tag:

- macOS

---

## Macos

### macos鼠标卡顿问题

```shell
# 这个命令会查看当前鼠标移动速度
defaults read -g com.apple.mouse.scaling 

# 这个命令是设置默认鼠标移动速度我设置的是5
defaults write -g com.apple.mouse.scaling 5 
```

### 刷新缓存

```shell
# 第一步
sudo dscacheutil -flushcache
# 第二步
sudo killall -HUP mDNSResponder
```

### 环境变量

```shell
# 查看环境变量
echo $PATH
# 添加环境变量
/Users/wangfeng/.zshrc
```

### 基本命令

```shell
# 查看端口
lsof -i tcp:port

# 杀死摸个进程
kill -9 pid
```
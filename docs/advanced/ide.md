# IDE

## 底层能力

### Command

IDE 基础功能模块之间的一种解耦方式，同时提供部分内置命令供插件使用

### File Service

文件服务抽象，提供 FS Provider 接口，可以基于 Node.js fs 实现本地文件读写，或基于 BrowserFS、MemoryFS 等实现纯前端文件系统

### Storage

IDE 存储服务，管理 IDE 如用户设置及插件配置等缓存内容

### Theme/Syntax highlighting

CSS variables、Textmate、vscode-onigurume

## 支撑服务

### 插件市场

Egg、OSS、权限管控、Group、Client 分组

### 日志服务

spdlog

### 更新服务

electron-updater、差量更新

### 容器服务

K8S、Docker、Pounch

## 核心能力

### 通信服务

遵循基于 JSONRPC 2.0 协议，使用 vscode-jsonrpc

### 插件体系

兼容 VS Code 插件协议，自有 KAITIAN 插件 API 扩展

### 编译器（LSP）

Monaco Editor、Language Server Protocol

### 调试服务

Debug Adapter Protocal

## 功能模块

### 资源管理

文件树虚拟列表

### Terminal

node-pty、xterm、断连恢复

### SCM 源代码管理

源代码管理抽象借口，通过 Git 等插件实现

### Layout

可扩展、高自由度、配置化插槽

## 场景

### Local

- 小程序开发者工具
- ProCode 开发

### Cloud

- 模块搭建
- D2C
- LowCode 开发

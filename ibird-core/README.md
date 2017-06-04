# 简介

ibird是一套基于Node设计的应用构建方案，它包含了从项目开发到部署上线的全套流程设计。ibird选择MongoDB作为应用数据库，选择Redis作为缓存工具，使用Docker作为应用部署方案。

ibird采用模块化设计，框架核心只负责配置注册、模型注册、路由挂载三个主要功能，其他功能通过扩展模块实现，不同模块之间功能独立，相互协作，极大地提高了应用的灵活性和可配置性。

每一个使用ibird的开发者的应用开发流程都将变得非常简单：

1. 构建数据模型
2. 服务端接口设计与实现（可选）
3. 管理后端配置（可选）
4. 应用前端开发（可选）
5. 测试上线

### 在线文档

点击链接访问ibird的[在线文档](https://yinfxs.gitbooks.io/ibird/content/)

### **构建数据模型**

开发者根据需求按规范构建出合适的数据模型，描述清楚每个业务实体以及业务实体的属性。

### 服务端接口设计与实现

在开发者完成数据模型注册后，框架会在启动时默认为每一个数据模型挂载通用的操作接口：增、删、改、查（列表、单个、ID），每一个接口的响应都拥有通用化的结构。当默认接口无法满足应用需求时，才需要开发者额外设计和开放接口。

### 管理后端配置

如果系统需要管理后端，需要额外对管理后端进行配置，如系统菜单、主要界面、系统角色、操作权限、业务流程等。如不需要也可直接跳过进入下一步。

### 应用前端开发

应用前端是直接面向用户的一端，它可能是微信公众号内的H5网页、也可能是手机端的APP、也可能是浏览器的网站，但并不是所有的系统都需要应用前端，如果你的应用只是作为API服务器，那完全可以直接忽略这一步。

## 模块列表

以下是ibird提供的Node模块列表：

* ibird-core：核心模块
* ibird-log：日志模块
* ibird-i18n：国际化处理
* ibird-docs：文档模块
* ibird-token：令牌模块
* ibird-auth：权限模块
* ibird-task：调度任务
* ibird-cli：命令行工具
* ibird-admin：管理后台
* ibird-utils：通用工具模块
* ibird-test：测试模块
* ibird-examples：示例模块
* ......

### ibird的目标

ibird的短期目标是通过改善开发体验来缩短项目周期，进一步提高项目质量。ibird的长期目标是希望每一个开发者都能随心所欲地构建出自己喜欢的应用，缩短把想法变成现实的时间，轻松走上全栈开发的道路。

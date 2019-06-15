# IITCLogger
该脚本为 `IITC` 插件，可以将 Ingress Intel Map 中的信息进行记录。

## 警告
- 该脚本设计目的仅仅为了防止错过信息，组织活动时记录大家的游玩过程，方便些战报。
- 请勿使用该脚本对 Ingress 的玩家或游戏内容进行监视和分析！你将违反游戏规则！
- 作者是白军，不对蓝军或者绿军用户提供技术支持。

## 记录内容
支持拆开详细信息，包括：
- 时间
- `PLAYER`: 玩家
  - `plain`: 玩家名字
  - `team`: 玩家动作
- `TEXT`: 信息
  - `plain`: 聊天内容
- `PORTAL`: 传送门(po)
  - `name`: 传送门名称
  - `address`: 传送门地址
  - `team`: 传送门被做了什么

支持的行为：
- `deployed a Resonator`
- `captured a Resonator`
- `linked to`
- `created a Control Field`

# 安装
- Chrome 应用店安装 `Tampermonkey` 插件。
- 安装 `IITC: Ingress intel map total conversion` 。
- 安装此脚本。
- 进入 Intel 地图。

# 使用
打开浏览器控制台，可以执行以下命令：

- 显示记录的数据：
  - console.log(localStorage.iitcl);
  - 执行后会显示出已经记录下的资料，可以复制保存成.csv文件直接用Excel打开。
- 清除记录的数据：
  - localStorage.iitcl="";
  - 浏览器提供的临时存储空间有限，请经常导出并清空数据。

建议上面两个命令同时输入防止下载的数据有重复。
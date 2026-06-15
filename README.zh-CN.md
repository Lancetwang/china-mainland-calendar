# 中国大陆日历

这是一个面向 iPhone、macOS 日历、Google Calendar、Outlook 等日历应用的 iCalendar（`.ics`）订阅文件，包含中国大陆节假日、调休补班和常用纪念日。

仓库按阳历年份维护，因此仓库名不绑定某一年，后续可以逐年更新。

## 文件说明

- `china-mainland.ics`：当前维护年份的固定入口。建议把这个文件作为长期订阅地址。
- `calendars/china-mainland-2026.ics`：2026 年日历文件。

## 2026 年包含内容

- 中国大陆法定节假日。
- 调休补班日。
- 常用节日和纪念日，例如母亲节、父亲节、元宵节、七夕节、教师节、重阳节、圣诞节等。

其中法定节假日和调休补班信息基于国务院办公厅发布的 2026 年放假安排。

## iPhone 订阅方式

仓库发布到 GitHub 后，使用 `china-mainland.ics` 的 raw 地址作为订阅地址。

iPhone 操作路径：

1. 打开 `设置`。
2. 进入 `日历` > `账户`。
3. 点击 `添加账户` > `其他`。
4. 点击 `添加已订阅的日历`。
5. 粘贴 `.ics` 文件的 raw 地址。

示例：

```text
https://raw.githubusercontent.com/<your-username>/china-mainland-calendar/main/china-mainland.ics
```

很多日历应用也支持把 `https://` 替换为 `webcal://`。

## 更新新年份

1. 在 `calendars/` 下新增年度文件，例如 `calendars/china-mainland-2027.ics`。
2. 用最新维护年份覆盖根目录的 `china-mainland.ics`。
3. 更新中英文 README。
4. 如有需要，发布一个 release。

## 说明

- 所有事件都是全天事件，时区为 `Asia/Shanghai`。
- 本项目主要用于个人日程规划。涉及法律、商务、合规或单位排班时，请以官方通知为准。

## English README

See [README.md](README.md) for the English version.

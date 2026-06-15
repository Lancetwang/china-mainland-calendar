import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const calendarName = "中国大陆日历 2026";
const calendarDescription =
  "2026年中国大陆法定节日、调休补班、传统节日、二十四节气及常用纪念日";
const dtstamp = "20260615T080000Z";

const sources = {
  holidays:
    "国务院办公厅关于2026年部分节假日安排的通知：https://big5.www.gov.cn/gate/big5/www.gov.cn/gongbao/2025/issue_12406/202511/content_7048922.html",
  solarTerms:
    "香港天文台二十四节气资料：https://www.hko.gov.hk/en/gts/astronomy/Solar_Term.htm",
};

const events = [
  // Statutory public holidays and adjusted workdays.
  event("2026-01-01", "元旦", "法定节日"),
  event("2026-01-04", "补班：元旦调休", "调休补班", sources.holidays),
  event("2026-02-14", "补班：春节调休", "调休补班", sources.holidays),
  event("2026-02-17", "春节", "传统节日；法定节日"),
  event("2026-02-28", "补班：春节调休", "调休补班", sources.holidays),
  event("2026-04-05", "清明节（清明）", "传统节日；法定节日；二十四节气"),
  event("2026-05-01", "劳动节", "法定节日"),
  event("2026-05-09", "补班：劳动节调休", "调休补班", sources.holidays),
  event("2026-06-19", "端午节", "传统节日；法定节日"),
  event("2026-09-20", "补班：国庆节调休", "调休补班", sources.holidays),
  event("2026-09-25", "中秋节", "传统节日；法定节日"),
  event("2026-10-01", "国庆节", "法定节日"),
  event("2026-10-10", "补班：国庆节调休", "调休补班", sources.holidays),

  // 24 solar terms. Times are from HKO, but calendar entries are all-day.
  event("2026-01-05", "小寒", "二十四节气", `${sources.solarTerms}；香港时间16:23`),
  event("2026-01-20", "大寒", "二十四节气", `${sources.solarTerms}；香港时间09:45`),
  event("2026-02-04", "立春", "二十四节气", `${sources.solarTerms}；香港时间04:02`),
  event("2026-02-18", "雨水", "二十四节气", `${sources.solarTerms}；香港时间23:52`),
  event("2026-03-05", "惊蛰", "二十四节气", `${sources.solarTerms}；香港时间21:59`),
  event("2026-03-20", "春分", "二十四节气", `${sources.solarTerms}；香港时间22:46`),
  event("2026-04-20", "谷雨", "二十四节气", `${sources.solarTerms}；香港时间09:39`),
  event("2026-05-05", "立夏", "二十四节气", `${sources.solarTerms}；香港时间19:49`),
  event("2026-05-21", "小满", "二十四节气", `${sources.solarTerms}；香港时间08:37`),
  event("2026-06-05", "芒种", "二十四节气", `${sources.solarTerms}；香港时间23:48`),
  event("2026-06-21", "夏至", "二十四节气", `${sources.solarTerms}；香港时间16:25`),
  event("2026-07-07", "小暑", "二十四节气", `${sources.solarTerms}；香港时间09:57`),
  event("2026-07-23", "大暑", "二十四节气", `${sources.solarTerms}；香港时间03:13`),
  event("2026-08-07", "立秋", "二十四节气", `${sources.solarTerms}；香港时间19:43`),
  event("2026-08-23", "处暑", "二十四节气", `${sources.solarTerms}；香港时间10:19`),
  event("2026-09-07", "白露", "二十四节气", `${sources.solarTerms}；香港时间22:41`),
  event("2026-09-23", "秋分", "二十四节气", `${sources.solarTerms}；香港时间08:05`),
  event("2026-10-08", "寒露", "二十四节气", `${sources.solarTerms}；香港时间14:29`),
  event("2026-10-23", "霜降", "二十四节气", `${sources.solarTerms}；香港时间17:38`),
  event("2026-11-07", "立冬", "二十四节气", `${sources.solarTerms}；香港时间17:52`),
  event("2026-11-22", "小雪", "二十四节气", `${sources.solarTerms}；香港时间15:23`),
  event("2026-12-07", "大雪", "二十四节气", `${sources.solarTerms}；香港时间10:53`),
  event("2026-12-22", "冬至", "传统节日；二十四节气", `${sources.solarTerms}；香港时间04:50`),

  // Traditional Chinese festivals and common mainland observances.
  event("2026-01-26", "腊八节", "传统节日"),
  event("2026-02-10", "北方小年", "传统节日"),
  event("2026-02-11", "南方小年", "传统节日"),
  event("2026-02-16", "除夕", "传统节日"),
  event("2026-03-03", "元宵节", "传统节日"),
  event("2026-03-20", "龙抬头", "传统节日"),
  event("2026-04-04", "寒食节", "传统节日"),
  event("2026-04-19", "上巳节", "传统节日"),
  event("2026-08-19", "七夕节", "传统节日"),
  event("2026-08-27", "中元节", "传统节日"),
  event("2026-10-18", "重阳节", "传统节日"),
  event("2026-11-09", "寒衣节", "传统节日"),
  event("2026-11-23", "下元节", "传统节日"),

  // Widely used civil, family, and modern observances.
  event("2026-02-14", "情人节", "常用纪念日"),
  event("2026-03-08", "妇女节", "部分公民节日"),
  event("2026-03-12", "植树节", "常用纪念日"),
  event("2026-05-04", "青年节", "部分公民节日"),
  event("2026-05-10", "母亲节", "常用纪念日"),
  event("2026-06-01", "儿童节", "部分公民节日"),
  event("2026-06-21", "父亲节", "常用纪念日"),
  event("2026-07-01", "建党节", "常用纪念日"),
  event("2026-08-01", "建军节", "部分公民节日"),
  event("2026-09-10", "教师节", "常用纪念日"),
  event("2026-11-11", "光棍节", "常用纪念日"),
  event("2026-12-24", "平安夜", "常用纪念日"),
  event("2026-12-25", "圣诞节", "常用纪念日"),
];

events.sort((a, b) => a.date.localeCompare(b.date) || a.summary.localeCompare(b.summary, "zh-CN"));

const ics = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Lancetwang//China Mainland Calendar//ZH-CN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  `X-WR-CALNAME:${escapeText(calendarName)}`,
  `X-WR-CALDESC:${escapeText(calendarDescription)}`,
  "X-WR-TIMEZONE:Asia/Shanghai",
  "BEGIN:VTIMEZONE",
  "TZID:Asia/Shanghai",
  "BEGIN:STANDARD",
  "TZOFFSETFROM:+0800",
  "TZOFFSETTO:+0800",
  "TZNAME:CST",
  "DTSTART:19700101T000000",
  "END:STANDARD",
  "END:VTIMEZONE",
  ...events.flatMap(toVevent),
  "END:VCALENDAR",
].join("\n") + "\n";

writeFileSync(resolve(root, "china-mainland.ics"), ics, "utf8");
writeFileSync(resolve(root, "calendars", "china-mainland-2026.ics"), ics, "utf8");

function event(date, summary, category, source = "") {
  return { date, summary, category, source };
}

function toVevent(item) {
  const start = item.date.replaceAll("-", "");
  const end = addOneDay(item.date).replaceAll("-", "");
  const uid = `${start}-${slug(item.summary)}@china-mainland-calendar`;
  const description = [`类别：${item.category}`, item.source ? `来源：${item.source}` : ""]
    .filter(Boolean)
    .join("\\n");

  return [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `SUMMARY:${escapeText(item.summary)}`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${end}`,
    `CATEGORIES:${escapeText(item.category)}`,
    `DESCRIPTION:${escapeText(description)}`,
    "TRANSP:TRANSPARENT",
    "END:VEVENT",
  ];
}

function addOneDay(date) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
}

function escapeText(value) {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll("\n", "\\n");
}

function slug(value) {
  return Array.from(value)
    .map((char) => {
      if (/^[a-z0-9]$/i.test(char)) return char.toLowerCase();
      return char.codePointAt(0).toString(16);
    })
    .join("-");
}

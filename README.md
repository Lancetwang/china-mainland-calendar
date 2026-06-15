# China Mainland Calendar

An iCalendar (`.ics`) subscription for China mainland holidays, adjusted workdays, and commonly used observances.

This repository is organized by Gregorian calendar year, so it can be updated year by year without changing the project name.

## Files

- `china-mainland.ics`: current maintained calendar file. Use this path when you want a stable subscription URL.
- `calendars/china-mainland-2026.ics`: 2026 calendar file.

## Included In 2026

- Official China mainland public holidays.
- Adjusted make-up workdays.
- Common observances such as Mother's Day, Father's Day, Lantern Festival, Qixi Festival, Teachers' Day, Double Ninth Festival, Christmas, and others.

Holiday and adjusted workday data is based on the official 2026 public holiday arrangement released by the General Office of the State Council.

## Subscribe On iPhone

After this repository is published to GitHub, use the raw file URL for `china-mainland.ics`.

On iPhone:

1. Open `Settings`.
2. Go to `Calendar` > `Accounts`.
3. Tap `Add Account` > `Other`.
4. Tap `Add Subscribed Calendar`.
5. Paste the raw `.ics` URL.

For example:

```text
https://raw.githubusercontent.com/<your-username>/china-mainland-calendar/main/china-mainland.ics
```

You can also replace `https://` with `webcal://` in many calendar apps.

## Updating A New Year

1. Add the new yearly file under `calendars/`, for example `calendars/china-mainland-2027.ics`.
2. Replace `china-mainland.ics` with the newest maintained year.
3. Update the README files.
4. Tag a release if useful.

## Notes

- All events are all-day events in the `Asia/Shanghai` timezone.
- The calendar is intended for personal planning convenience. Always check official notices for legal, business, or compliance-sensitive scheduling.

## Chinese README

中文说明见 [README.zh-CN.md](README.zh-CN.md).

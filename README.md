# China Mainland Calendar

An iCalendar (`.ics`) subscription for China mainland statutory holidays, vacation ranges, adjusted workdays, traditional Chinese festivals, the 24 solar terms, and commonly used observances.

This repository is organized by Gregorian calendar year, so it can be updated year by year without changing the project name.

## Files

- `china-mainland.ics`: current maintained calendar file. Use this path when you want a stable subscription URL.
- `calendars/china-mainland-2026.ics`: 2026 calendar file.

## Included In 2026

- Statutory China mainland holidays as single-day calendar entries.
- Official vacation ranges, named like `春节休假`.
- Adjusted make-up workdays, clearly marked with `补班`.
- The 24 solar terms.
- Traditional Chinese festivals such as Lunar New Year's Eve, Spring Festival, Lantern Festival, Dragon Boat Festival, Qixi Festival, Mid-Autumn Festival, Double Ninth Festival, Winter Solstice, and others.
- Common observances such as Mother's Day, Father's Day, Women's Day, Youth Day, Children's Day, Teachers' Day, Christmas, and others.

Holiday and adjusted workday data is based on the official 2026 public holiday arrangement released by the General Office of the State Council. Solar term data is based on the Hong Kong Observatory.

Festival days and their vacation ranges are separate entries. For example, Dragon Boat Festival appears as `端午节`, while the vacation range appears as `端午节休假`; make-up workdays are listed separately.

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

1. Add or update a generator script under `scripts/`.
2. Generate the new yearly file under `calendars/`, for example `calendars/china-mainland-2027.ics`.
3. Replace `china-mainland.ics` with the newest maintained year.
4. Update the README files.
5. Tag a release if useful.

## Notes

- All events are all-day events in the `Asia/Shanghai` timezone.
- The calendar is intended for personal planning convenience. Always check official notices for legal, business, or compliance-sensitive scheduling.

## Chinese README

中文说明见 [README.zh-CN.md](README.zh-CN.md).

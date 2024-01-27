import dayjs from "dayjs";
export const notBeforeToday = (value) => {
    const now = dayjs().format('YYYY-MM-DD');
    return dayjs(value).isAfter(now) || dayjs().isSame(value, 'day');
};
//# sourceMappingURL=time.js.map
/*
 * @datepicker.util;
 */
var util = {
    date: function (date) {
        if ($.is.isString(date)) {
            if ($.is.isNumberic(date)) {
                return new Date(date);
            } else {
                var a = date.replace(/\-/g, "/");
                if (a.indexOf(":") === -1) {
                    a = a + " 0:0:0";
                }
                return new Date(a);
            }
        } else if ($.is.isNumber(date)) {
            return new Date(date);
        } else if (date instanceof Date) {
            return date;
        } else if ($.is.isObject(date)) {
            var base = util.dateInfo(util.now());
            var _a = [
                date.year ? date.year : base.year,
                date.month ? date.month : base.month,
                date.day ? date.day : base.day
            ];
            var _b = [
                date.hour ? date.hour : "00",
                date.minute ? date.minute : "00",
                date.second ? date.second : "00"
            ];
            return new Date(_a.join("/") + " " + _b.join(":"));
        }
    },
    now: function () {
        return new Date();
    },
    dateInfo: function (date) {
        var date = util.date(date);
        if (date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        } else {
            return null;
        }
    },
    getDayNumberOfMonth: function (year, month) {
        var m = [31, ((year % 4 === 0) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return m[month];
    },
    getDaysOfMonth:function (year,month) {
        var date=util.date({year:year,month:month,day:1});
        var begin=date.getDay();

    }
};
module.exports = util;
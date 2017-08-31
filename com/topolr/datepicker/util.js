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
        } else {
            return null;
        }
    },
    now:function () {
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
    getMonthDays: function (year, month) {
        var m = [31, ((year % 4 === 0) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return m[month];
    }
};
module.exports = util;
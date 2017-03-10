//日历
var i18n = {
    previousMonth   : '上个月',
    nextMonth       : '下个月',
    months          : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    weekdays        : ['周日','周一','周二','周三','周四','周五','周六'],
    weekdaysShort   : ['S','M','T','W','T','F','S']
}
var adddate = new Pikaday({
    numberOfMonths: 1,
    field:jQuery('#adddate')[0],
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000,2020],
    i18n: i18n,
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format('YYYY-MM-DD') + ' ');
        $('#datepicker').appendChild(date);
    }
});
var editdate = new Pikaday({
    numberOfMonths: 1,
    field:jQuery('#editdate')[0],
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000,2020],
    i18n: i18n,
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format('YYYY-MM-DD') + ' ');
        $('#datepicker').appendChild(date);
    }
});

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
var adddate2 = new Pikaday({
    numberOfMonths: 1,
    field:jQuery('#adddate2')[0],
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000,2020],
    i18n: i18n,
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format('YYYY-MM-DD') + ' ');
        $('#datepicker').appendChild(date);
    }
});

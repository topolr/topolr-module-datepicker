/*
 * @packet datepicker.base;
 * @template datepicker.template.temp;
 * @style datepicker.style.date;
 * @require datepicker.util;
 */
var util=require("@util");
 Module({
     name:"date",
     extend:"view",
     template:"@temp.date",
     style:"@date",
     className:"tdate",
     init:function(){
         var current=util.date(util.now());
         this._data={
             year:current.year,
             month:current.month,
             day:current.day,
             days:util.getMonthDays(current.year,current.month)
         };
     },
     getState:function(){

     }
 });
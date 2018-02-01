<template lang="pug">
  .datepicker.card
    .card-header
      .container-fluid
        .selected.bg-secondary.text-white(v-if="buttons") {{curmonth.getFormattedDate(selectedDate, dateformat)}}
        .row(v-if="blockyearsize")
          .btn.dirbtn.btn-light.col-md-2(@click.stop="prevblockyear")
            i.fa.fa-angle-double-left
          .btn.dirbtn.btn-light.col-md-2(@click.stop="prevyear")
            i.fa.fa-angle-left
          h6.col-md-4 {{curmonth.getFormattedYear()}}
          .btn.dirbtn.btn-light.col-md-2(@click.stop="nextyear")
            i.fa.fa-angle-right
          .btn.dirbtn.btn-light.col-md-2(@click.stop="nextblockyear")
            i.fa.fa-angle-double-right
        .row(v-else)
          .btn.dirbtn.btn-light.col-md-4(@click.stop="prevyear")
            i.fa.fa-angle-left
          h6.col-md-4 {{curmonth.getFormattedYear()}}
          .btn.dirbtn.btn-light.col-md-4(@click.stop="nextyear")
            i.fa.fa-angle-right
        .row
          .btn.dirbtn.btn-light.col-md-3(@click.stop="prevmonth")
            i.fa.fa-angle-left
          h6.col-md-6 {{curmonth.getFormattedMonth()}}
          .btn.dirbtn.btn-light.col-md-3(@click.stop="nextmonth")
            i.fa.fa-angle-right
    .card-body
      .container-fluid
        dayNames(:items="days")
        daysGrid(:items="curmonth.getDays()"
            :startDate="curmonth.getFirstMonthdate()"
            :buttons="buttons"
            :icondesable="icondesable"
            :date="selectedDate"
            :locale="locale"
            :maxdate="maxdate"
            :mindate="mindate"
            v-on:dayclicked="clickonDay")
    .card-footer
      .container-fluid
        div(v-if="todaybtn")
          .btn.btn-light.bg-secondary.text-white.col-md-12(@click.prevent="doToday")
            i.px-1.prev.fa(:class="icontoday")
            | {{buttonTobay}}
        div(v-if="buttons")
          .btn.btn-light.bg-secondary.text-white.col-md-6(@click.prevent="doCancel")
            i.px-1.prev.fa(:class="iconcancel")
            | {{buttonCancel}}
          .btn.btn-light.bg-secondary.text-white.col-md-6(@click.prevent="doOk" :class="{'active':selectedDate}")
            i.px-1.prev.fa(:class="iconok")
            | {{buttonOk}}



</template>

<script>
  //import Vue from "vue"
  import moment from "moment"
  import Monthlib from "./momentlib.js" // own library
  import dayNames from "./day-names"
  import daysGrid from "./days-grid"
  export default {
    name: "DatepickerCal",
    mixins: [
    ],
    extends: {
    },
    props: {
      // when buttons are present the date on click should be inactive
      'blockyearsize': { type: Number},
      'buttonCancel': { Type: String, default : 'Cancel'},
      'buttonOk'    : { Type: String, default : 'Ok'},
      'buttonTobay' : { Type: String, default : 'Today'},
      'buttons'     : { Type: Boolean, default: false},
      'date'        : { type: String},
      'dateformat'  : { type: String, default : 'YYYY-MM-DD'},
      'holydays'    : { type: Array },
      'iconcancel'  : { type: String, default : 'fa-close'},
      'icondesable' : { type: String, default : ''},
      'iconok'      : { type: String, default : 'fa-check'},
      'icontoday'   : { type: String, default : 'fa-calendar'},
      'isodate'     : { type: String, default : 'YYYY-MM-DD'},
      'locale'      : { type: String, default : 'en' },
      'maxdate'     : { type: String, },
      //'maxmonth'  : { type: Number, },
      'maxyear'     : { type: Number, default : 2100 },
      'mindate'     : { type: String, },
      //'minmonth'  : { type: Number, },
      'minyear'     : { type: Number, default : 1970 },
      'startdate'   : { type: String, default : '2018-03-07' },
      'todaybtn'    : { Type: Boolean, default: false },
    },
    data () {
      return {
        items: this.days,
        curdate: new Date(),
        currentdate: moment(this.curdate, this.dateformat),
        curmonth: new Monthlib(new Date(this.date).getMonth(), new Date(this.date).getFullYear(), this.locale),
        selectedDate : this.date,

      }
    },
    computed: {
      days: function () {
        return this.curmonth.getWeekDayslocale() },
      firstweekday: function () {
        return this.curmonth.getfirstWeekDay() },
      maxdte: function () {
        return new Monthlib(new Date(this.maxdate).getMonth(), new Date(this.maxdate).getFullYear(), this.locale) },
      mindte: function () {
        return new Monthlib(new Date(this.mindate).getMonth(), new Date(this.mindate).getFullYear(), this.locale) },
    },
    components: {
      dayNames,
      daysGrid
    },
    watch: {},
    methods: {
      doOk: function () {
        let mm = this.curmonth.getFormattedDate(this.selectedDate, this.isodate)
        this.$emit ('newdate', this.selectedDate) },
      doCancel: function () {
        this.$emit ('cancel') },
      doToday: function () {
        this.clickonDay(this.curdate) },
      clickonDay: function (day) {
        //console.log('clickonDay: ' + day)
        this.selectedDate = day
        if (!this.buttons) {
          this.doOk()
        } },
      nextblockyear: function () {
        let mm = this.curmonth.month
        let yy = this.curmonth.year
        if (yy < this.maxyear) {
          yy += this.blockyearsize
        }
        if (this.maxdte.year + "" + this.maxdte.month > yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
      nextmonth: function () {
        let mm = this.curmonth.month + 1
        let yy = this.curmonth.year
        if(mm > 11){
          mm = 0
          if (yy < this.maxyear) {
            yy += 1
          }
        }
        if (this.maxdte.year + "" + this.maxdte.month >= yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
      nextyear: function () {
        let mm = this.curmonth.month
        let yy = this.curmonth.year
        if (yy < this.maxyear) {
          yy += 1
        }
        if (this.maxdte.year + "" + this.maxdte.month > yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
      prevmonth: function () {
        let mm = this.curmonth.month - 1
        let yy = this.curmonth.year
        if(mm < 0 ){
          mm = 11
          if (yy > this.minyear) {
            yy -= 1
          }
        }
        if (this.mindte.year + "" + this.mindte.month <= yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
      prevblockyear: function () {
        let mm = this.curmonth.month
        let yy = this.curmonth.year
        if (yy > this.minyear) {
          yy -= this.blockyearsize
        }
        if (this.mindte.year + "" + this.mindte.month < yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
      prevyear: function () {
        let mm = this.curmonth.month
        let yy = this.curmonth.year
        if (yy > this.minyear) {
          yy -= 1
        }
        if (this.mindte.year + "" + this.mindte.month < yy + "" + mm ) {
          this.curmonth = new Monthlib(mm, yy, this.locale)
        } },
    },
    // component life cycle hooks, use kebab-cased-names
      beforeCreate () {},
      mounted() {
        }
  }
</script>

<style scoped lang="scss">
  @import "./datepicker.scss";
  .datepicker{
    width: $cardwidth;
    margin: 1rem;
    margin-top : -2rem;
    box-shadow: 0 14px 45px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  }
  .selected{
    text-align: center;
  }
  .container1{
    padding :0;
  }
  .hidden {
    width: 100%;
    text-align: center;
  }
  .buttons{
    float: right;
  }
  .btn{
    line-height: 0.7rem;
  }
  .dirbtn{
    font-size: 1.4rem;
    line-height: $dayheight;
    padding: 0;
  }
  .card-body,.card-footer,.card-header {
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    padding: 0.2rem;
  }
  h6{
    margin-bottom: 0;
    padding: 0;
    line-height: $dayheight;
  }
</style>

<template lang="pug">
  .daysgrid
    .days.border-top-0.border-left-0(
        v-for="item in items"
        :class="{'muted':isMuted(item), today:isToday(item), selected:isSelected(item)}"
        )
      dayMask(v-if="isDesabled(item)" :icondesable="icondesable")
      .fullspace(v-if="!isDesabled(item)" @click.prevent="txDate(item)")
      span.daynum(:class="{'text-danger':isWeekend(item)}") {{item.format('D')}}


</template>

<script>
  import moment from 'moment'
  import Month from './momentlib'
  import dayMask from './day-mask'
  export default {
    name: "daysGrid",
    mixins: [
    ],
    extends: {
    },
    props: {
      'buttons': {
        type: Boolean,
        default: true
      },
      //Alphabetized for better readability
      'date'       : {type: String},
      'endDate'    : '',
      'dayscount'  : {type : Number, default: 28},
      'icondesable': {type : String},
      'item'       : {type : Object },
      'itemkey'    : {type : String, default: '' },
      'items'      : {type : Array },
      'locale'     : {type : String, default: "en"},
      'maxdate'    : {type : String, default: ""},
      'mindate'    : {type : String, default: ""},
      'month'      : {type : Number, default: 0 },
      'startDate'  : {type : Object},
    },
      data () {
        return {
          Weekend: false

        }
      },
    computed: {

    },
    components: {
      dayMask
    },
    watch: {},
    methods: {
      isMuted: function (day) {
        return day.format('M') !== this.startDate.format('M')

      },
      txDate:  function (day) {
        this.$emit ('dayclicked', day)
      },
      isWeekend: function (day) {
        return day.isoWeekday() > 5
      },
      isSelected: function (day){
        let answer = false
        if(day !== undefined && this.date !== undefined) {
          let mydate = moment(this.date)
          //let mydate = moment("2018-01-23")
          answer = mydate.unix() === day.unix()
        }
        return answer
      },
       isDesabled: function (day){
        let answer = false
        let lib = new Month(1, 2018, this.locale)
        let e = lib.getmomentdate(this.mindate)
        let f = lib.getmomentdate(this.maxdate)
        let g = lib.getmomentdate(day)
        if (g < e || g > f) answer = true

        return answer
      },
      isToday: function (day){
        //return Month.isToday(day)
        let e = parseInt(moment(day).unix() / (24 * 3600))
        let f = parseInt(moment(new Date()).unix() / (24 * 3600)) - 1
        return e === f
      }

    },
  }
</script>

<style scoped lang="scss">
  @import "./datepicker.scss";
  .days{
    float: left;
    width : $daywidth;
    height: $dayheight;
    margin : 0;
    padding : 0;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
      background-color:$color2;
      opacity: 0.6;
      color: $color1;
    }
    &.days-border{
      border-style: solid;
      border-width: 0px 2px 3px 1px;
      border-color:  $color3;
    }
    &.muted{
      opacity: 0.5;
    }

  }
  .selected{
    background-color :$color2;
    opacity: 0.8;
    color : $color1;
  }

  .today{
    border-width: 1px;
    border-style: solid;
    border-color: $color3;
  }

  .days_effect {
    transition: all  450ms cubic-bezier(0.23);
    transform : scale(0);
    opacity: 0;
  }
  .daynum{
    box-sizing: border-box;
    text-align: center;
    padding-top: 0px;
    padding-bottom :0px;
    line-height: $daywidth;
      .daynum-effect{
        transform : scale (1);
      }
  }
  .muted{
    color:  rgb(12, 26, 12);
  }
  .weekend{
    color:  $color5;
  }
  .desabledday{
    position:absolute;
    width : $daywidth;
    height: $dayheight;
    font-size: $dayheight;
    color: grey;
    opacity : 0.5;
    text-align: center;
    padding-top: 0px;
    padding-bottom :0px;
    line-height: $daywidth;

  }
  .fullspace{
    position: absolute;
    width: $daywidth;
    height: $dayheight;
  }
</style>

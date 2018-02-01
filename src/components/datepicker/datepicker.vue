<template lang="pug">
    .dateinput
      .input-group.mb-4( @click.prevent="showpicker")
          .input-group-prepend
            span.input-group-text {{label}}
          input.col-5(type='text' :placeholder="dateformat" :value="formattedDate")
          // next field is to be used as form input field
          input(type='hidden' :placeholder="isodate" :value="dbDate" :name="name")
          .input-group-append
            span.input-group-text(v-if="iconcalendar")
              i.fa(:class="iconcalendar")
      transition(name="slide-fade" appear)
        datepickerCal.cls(
            v-if = "isVisible"
              :blockyearsize= "blockyearsize"
              :buttons      = "buttons"
              :buttonCancel = "buttonCancel"
              :buttonOk     = "buttonOk"
              :buttonToday  = "buttonToday"
              :date         = "refdate"
              :dateformat   = "dateformat"
              :iconcancel   = "iconcancel"
              :iconcalendar = "iconcalendar"
              :icondesable  = "icondesable"
              :iconok       = "iconok"
              :icontoday    = "icontoday"
              :isodate      = "isodate"
              :locale       = "locale"
              :mindate      = "mindate"
              :maxdate      = "maxdate"
              :todaybtn     = "todaybtn"
          v-on:cancel       = "hidepicker"
          v-on:newdate      = "selectDate"
        )

</template>

<script>
  import datepickerCal from './datepicker-cal'
  import mthlib from './momentlib'
  import moment from 'moment'
  export default {
    name: "datepicker",
    mixins: [
    ],
    extends: {
    },
    props: {
      blockyearsize: { type: Number}, // a number of years going back or foreward.  To pass a numbre use v-bind or short : (A behavior by vuejs)
      buttons     : { type: Boolean, default: false },  //add Ok and Cancel buttons, ok confirms selection
      buttonCancel: { type: String, default : "Cancel"  }, // the predifened cancel button text
      buttonOk    : { type: String, default : "Ok"  }, // the predifened Ok button text
      buttonToday : { type: String, default : "Today"  }, // the predifened Today button text
      date        : { type: String }, // the dpredifened date
      dateformat  : { type: String, default : "DD-MM-YYYY" }, // the user date format
      iconcalendar: { type: String, default : ""}, // the icon at the right side of component, hidden if not present
      iconcancel  : { type: String, default : "fa-close"}, // the icon at the right side of component
      icondesable : { type: String, default : "fa-close"}, // the icon at the right side of component
      iconok      : { type: String, default : "fa-check"}, // the icon at the right side of component
      icontoday   : { type: String, default : 'fa-calendar'},
      isodate     : { type: String, default : "YYYY-MM-DD"}, // the date format used as form parameter
      label       : { type: String, default : "" }, // the text at the left side of component
      locale      : { type: String, default : 'en' }, // the locale to use with moment (changes first day of week too)
      mindate     : { type: String, default : '1900-01-01' }, // limit the min da  te availeble in picker
      maxdate     : { type: String, default : '2900-01-01'}, // limit the max date available in picker
      name        : { type: String, default : ''}, // the form field name
      todaybtn    : { type: Boolean }, // show/hide a functionnal today button


    },
    data () {
      return{
        isVisible: false,
        selectedDate: this.date,
        mnth: new mthlib(new Date(this.refdate).getMonth(), new Date(this.refdate).getFullYear()+1, this.locale)
      }
    },
    computed: {
      refdate () {
        //let str
        if (this.date === undefined) {
          let today = new Date()
          let yy = today.getFullYear()
          // the iso date is made of YYYY-MM-DD with 2 digits month and day
          let mm = ("0" + today.getMonth()+1).slice(-2)
          let dd = ("0" + today.getDate()).slice(-2)
          return `${yy}-${mm}-${dd}`
        } else {
          this.selectedDate = this.date
          return this.date
        }
        return str
      },
      refyear () {
        return new Date(this.refdate).getFullYear()
      },
      refmonth () {
        return new Date(this.refdate).getMonth()+1
      },
      formattedDate () {
        console.log('FormattedDate = ' + moment(this.selectedDate).format(this.dateformat))
        return moment(this.selectedDate).format(this.dateformat)
      },
      dbDate () {
        console.log('dbDate = ' + moment(this.selectedDate).format(this.isodate))
        return moment(this.selectedDate).format(this.isodate)
      }
    },
    components: {
      datepickerCal
    },
    watch: {},
    methods: {
      showpicker: function () {
        this.isVisible = true
        console.log('show datepicke and set timeout')
        setTimeout (() => document.addEventListener('click', this.hidepicker), 0)

      },
      hidepicker: function () {
        this.isVisible = false
        console.log('hide datepicker remove event')
        setTimeout (() =>document.removeEventListener('click', this.hidepicker),0)
      },
      selectDate : function (date) {
        this.selectedDate = date
        //console.log("selected date is : " + this.selectedDate)
        this.hidepicker()
      },
      cancel : function () {
        this.hidepicker
      }

    },
    // component life cycle hooks, use kebab-cased-names
    mounted() {
      console.log('mounted')
      console.log(this.$el.textContent)
    }

  }
</script>

<style scoped lang="scss">
  @import "./datepicker.scss";
  .dateinput{
    margin-right: 0.5rem;
  }
  .cls{
    position: absolute;
    z-index: 5;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-30px);
    opacity: 0;
  }

</style>

<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h2 {{ msg }}
    .container
      .row
        div On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
        Datepicker(:buttons="true" label="Date de départ:" date="2011-11-11" name="date1" :blockyearsize="5")
        Datepicker(:buttons="false" label="Date d'arrivée:" name="date2")
        div
          p Date 2 départ contient des dates min uniquement. 2018-12-15
          Datepicker(:buttons="false" label="Date 2 de départ:" date="2019-10-01" mindate="2018-12-15" locale="fr" name="date3" iconcalendar="fa-calendar")
          p Date 2 'd'arrivée contient des dates min et max. 2017-01-10 et 2018-01-30
          Datepicker(:buttons="false" label="Date 2 d'arrivée:" todaybtn=true mindate="2017-01-10" maxdate="2018-01-30" name="date4")

        div On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

</template>

<script>
import Datepicker from "./components/datepicker/datepicker"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue.js Datepicker sample with font Awesome 4.7 & TWBS V4'
    }
  },
  components: {
    Datepicker

  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

row{
  text-align: left;
  margin-left: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

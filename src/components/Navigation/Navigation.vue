<template>
  <div class="Navigation">
    <div class="nav__inner">
        <img class="nav__logo" src="../../assets/icones/LOGO.svg" alt="logo"/>
        <nav class="nav__bar">
            <li class="nav__bar__container" v-for="element in $t('nav')" :key="element.key">
                <a class="nav__bar__container-element" :href="`#/${lang.locale}/#${element.link}`">{{element.title}}</a>
            </li>
        </nav>
        <select @change="switchLang($event.target.value)" class="nav__select" id="nav__lang">
            <option :value="select.first">{{select.first}}</option>
            <option :value="select.second">{{select.second}}</option>
        </select>
        <Burger :lang="lang"/>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'

import Burger from './Burger/Burger'

import './navigation.css'

export default {
  name: 'Navigation',
  components: {
    Burger
  },
  methods: {
    switchLang: function (language) {
      this.$router.push({
        params: {lang: language}
      })
    }
  },
  data () {
    const initLang = (arg) => {
      let lang = {
        first: 'en',
        second: 'fr'
      }
      if (arg === 'fr') {
        lang = {
          first: 'fr',
          second: 'en'
        }
      }
      return lang
    }
    return {
      lang: i18n,
      select: initLang(i18n.locale)
    }
  }
}
</script>

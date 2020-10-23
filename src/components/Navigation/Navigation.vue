<template>
  <div class="Navigation">
    <div class="nav__inner">
        <img class="nav__logo" src="../../assets/icones/LOGO.svg" alt="logo"/>
        <nav class="nav__bar">
            <li class="nav__bar__container" v-for="element in $t('nav')" :key="element.key">
                <a class="nav__bar__container-element" :href="`#/${lang.locale}/#${element.link}`">{{element.title}}</a>
            </li>
        </nav>
        <div v-on:click="active = !active" class="nav__select" id="nav__lang">
            <img class="nav__lang__img" src="../../assets/icones/ARROW.svg" alt="logo"/>
            <div class="first" v-if="active" v-on:click="switchLang(select.first)" :value="select.first">{{select.first}}</div>
            <div class="second" v-if="active" v-on:click="switchLang(select.second)" :value="select.second">{{select.second}}</div>
        </div>
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
      if (this.switch !== language) {
        this.$router.push({
          params: {lang: language}
        })
      }
      this.switch = language
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
      active: false,
      switch: i18n.locale,
      select: initLang(i18n.locale)
    }
  }
}
</script>

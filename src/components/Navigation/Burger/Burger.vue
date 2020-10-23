<template>
  <div class="Burger">
    <div class="burger__inner">
        <div v-on:click="toggleFunction" v-bind:class="{active: burgerToggle}" class="burger__icon"><span/></div>
        <ul class="burger__sidebar" v-bind:class="sideToggle">
            <li v-for="element in $t('nav')" :key="element.key">
                <a  v-on:click="toggleFunction" class="burger__sidebar-element" :href="`#/${lang.locale}/#${element.link}`">{{element.title}}</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import './burger.css'

export default {
  name: 'Navigation',
  props: ['lang'],
  methods: {
    toggleFunction: function () {
      this.burgerToggle = !this.burgerToggle
      if (this.sideToggle !== 'open') {
        this.sideToggle = 'open'
      } else {
        this.sideToggle = 'close'
      }
    }
  },
  data () {
    return {
      burgerToggle: false,
      sideToggle: 'none'
    }
  }
}
</script>

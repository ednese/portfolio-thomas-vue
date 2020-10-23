<template>
  <div class="Work">
    <div class="work__inner">
        <div class="work__container grid-2">
            <div v-for="element in work" :key="element.key" class="work__container__feature">
                <img alt="visuel" :src="element.img"/>
                <div class="info">
                    <h3>{{element.title}}</h3>
                    <h4>{{ $t('work.project') }}: <span class="lighter">{{ element.project }}</span></h4>
                    <h4 class="type">Type: <span class="lighter">{{ $t(element.type) }}</span></h4>
                    <h4>{{ $t('work.software') }}: <img v-for="logo in element.software" :key="logo.key" alt="software" :src="logo" v-on:click="test(logo)"/></h4>
                    <h3>{{ $t('work.see') }}</h3>
                    <a class="eye" :href="element.link" target="_blank">
                        <img alt="eye" src="../../assets/shapes/EYE.svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import i18n from '../../i18n'

import Kick from '../../assets/portfolio/kick.png'
import Agerez from '../../assets/portfolio/agerez.png'
import Oeu from '../../assets/portfolio/oeu.png'
import Pixel from '../../assets/portfolio/pixel.png'

import Ae from '../../assets/icones/LOGO_AFTER_EFFECTS.svg'
import Ai from '../../assets/icones/LOGO_ILLUSTRATOR.svg'
import Ps from '../../assets/icones/LOGO_PHOTOSHOP.svg'
import Xd from '../../assets/icones/LOGO_ADOBE_XD.svg'

import './work.css'

export default {
  name: 'Work',
  methods: {
    test: function (arg) {
      console.log(arg)
    }
  },
  data () {
    return {
      lang: i18n,
      work: [
        {img: Kick,
          title: 'MOTION DESIGN',
          project: 'Kick',
          type: 'work.animation',
          link: 'https://kickapp.fr',
          software: [Ae, Ai]},
        {img: Agerez,
          title: 'WEB DESIGN',
          project: 'Portfolio Alexandre',
          type: 'work.design',
          link: 'https://alexandregerez.com',
          software: [Xd]},
        {img: Oeu,
          title: 'LOGO',
          project: 'OEU Studio',
          type: 'work.logo',
          link: 'https://www.instagram.com/thomxrts/',
          software: [Ps]},
        {img: Pixel,
          title: 'BANNIERE',
          project: 'Pixel Community',
          type: 'work.banner',
          link: 'https://www.instagram.com/thomxrts/',
          software: [Ps]}
      ]
    }
  }
}
</script>

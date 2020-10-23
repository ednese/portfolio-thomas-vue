<template>
  <div class="About">
    <div :id="`/${this.lang.locale}/#${ $t('nav.about.link')}`" class="about__nav"/>
    <div class="about__inner">
        <div class="about__shape norm"><img v-for="element in shapes.norm" :key="element.key" alt="shape" :src="element"/></div>
        <div class="about__textbox">
            <h1 class="about__title">{{ $t('nav.about.title') }}, <span>THOMAS JAUZE</span></h1>
            <p class="about__paragraphe">
                {{ $t('about.paragraph') }}
            </p>
            <h2 class="about__softwares_title">{{ $t('about.software') }}</h2>
            <div class="about__softwares_items">
                <img alt="software" v-for="element in adobe" :key="element.key" :src="element.item" />
            </div>
        </div>
        <img class="about__avatar" alt="avatar" src="../../assets/img/AVATAR_ABOUT.svg"/>
        <div class="about__shape inv"><img v-for="element in shapes.inv" :key="element.key" alt="shape" :src="element"/></div>
    </div>
  </div>
</template>

<script>

import i18n from '../../i18n'

import './about.css'

import Ae from '../../assets/icones/LOGO_AFTER_EFFECTS.svg'
import Ai from '../../assets/icones/LOGO_ILLUSTRATOR.svg'
import Ps from '../../assets/icones/LOGO_PHOTOSHOP.svg'
import Xd from '../../assets/icones/LOGO_ADOBE_XD.svg'

import CIRCLE from '../../assets/shapes/CIRCLE.svg'
import S from '../../assets/shapes/S.svg'
import CROSS from '../../assets/shapes/CROSS.svg'

export default {
  name: 'About',
  data () {
    const tab = [CIRCLE, S, CROSS]
    const inv = [CROSS, S, CIRCLE]
    return {
      adobe: [
        {item: Ae},
        {item: Ai},
        {item: Ps},
        {item: Xd}
      ],
      lang: i18n,
      shapes: {
        norm: tab,
        inv: inv
      }
    }
  }
}
</script>

import type { WorkProps } from './VWork.vue'

import sneakerImg from '../images/sneaker.webp'
import leasingImg from '../images/shop.webp'
import getwatchImg from '../images/getwatch.webp'
// import meImg from '../images/me.webp'

export const works: Array<WorkProps> = [
  {
    name: 'Магазин Sneaker',
    desc: 'SPA на Vue 3 с поиском, сортировкой и корзиной. Используются Vue Router, TailwindCSS, Axios.',
    source: 'https://github.com/Yanikoo/sneaker-store',
    website: 'https://sneaker-store-demo.vercel.app',
    img: sneakerImg
  },
  {
    name: 'Leasing From D&M',
    desc: 'Многостраничный сайт с формой, слайдером и адаптивной вёрсткой. Использован HTML, CSS, JS, методология БЭМ.',
    source: 'https://github.com/Yanikoo/leasing-dm',
    website: 'https://leasing-demo.vercel.app',
    img: leasingImg
  },
  {
    name: 'GetWatch',
    desc: 'Одностраничный лендинг с кнопками и текстом. Адаптивная вёрстка по методологии БЭМ.',
    source: 'https://github.com/Yanikoo/getwatch',
    website: 'https://getwatch-demo.vercel.app',
    img: getwatchImg
  }
  // {
  //   name: 'Me',
  //   desc: 'Текущее портфолио-приложение.',
  //   source: 'https://github.com/Yanikoo/portfolio-me',
  //   website: '/',
  //   img: meImg
  // }
]

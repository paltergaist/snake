'use strict'
import './styles/index.css'

//dynamic import
document.querySelector('.js-index') && import('./js/index/index').then(resolve => resolve.initIndexPage())


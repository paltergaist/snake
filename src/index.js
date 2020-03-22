'use strict'
import './styles/index.css'
import config from "./js/snake/config";

//dynamic import
document.querySelector('.js-index') && import('./js/index/index').then(resolve => resolve.initIndexPage())

console.log(config)


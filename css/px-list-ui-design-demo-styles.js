const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-list-ui-design-demo-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%;box-sizing:border-box}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}dd,ol,ul{margin-left:2rem}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}*,:after,:before{box-sizing:inherit}:host{/*! Comment to prevent cssmin munging this rule with html above and borking Safari */box-sizing:border-box}a{background-color:transparent}a:link,a:visited{color:#007acc}a:hover{color:#005c99}a:active{color:#003d66}a:active,a:hover{outline:0}.float--right{float:right!important}.float--left{float:left!important}.float--none{float:none!important}.text--left{text-align:left!important}.text--center{text-align:center!important}.proceed,.text--right{text-align:right!important}.full-height{height:100%!important}.informative{cursor:help!important}.pointer{cursor:pointer!important}.muted{opacity:.5!important}.caps{text-transform:uppercase!important}.hidden{display:none!important;visibility:hidden}.a11y,.visuallyhidden{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}.a11y.focusable:active,.a11y.focusable:focus,.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{position:static;overflow:visible;width:auto;height:auto;margin:0;clip:auto}@media screen and (min-width:45em) and (max-width:63.9375em){.a11y-lap,.visuallyhidden-lap{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:63.9375em){.a11y-portable,.visuallyhidden-portable{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:44.9375em){.a11y-palm,.visuallyhidden-palm{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:45em){.a11y-lap-and-up,.visuallyhidden-lap-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:64em){.a11y-desk,.a11y-desk-and-up,.visuallyhidden-desk,.visuallyhidden-desk-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:120em){.a11y-large-and-up,.visuallyhidden-large-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.a11y-retina,.visuallyhidden-retina{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}.invisible{visibility:hidden!important}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.flex{display:flex}.inline--flex{display:inline-flex}.flex--row{flex-direction:row}.flex--row--rev{flex-direction:row-reverse}.flex--col{flex-direction:column}.flex--col--rev{flex-direction:column-reverse}.flex--nowrap{flex-wrap:nowrap}.flex--wrap{flex-wrap:wrap}.flex--wrap--rev{flex-wrap:wrap-reverse}.flex--left{justify-content:flex-start}.flex--center{justify-content:center}.flex--right{justify-content:flex-end}.flex--justify{justify-content:space-between}.flex--spaced{justify-content:space-around}.flex--top{align-items:flex-start}.flex--middle{align-items:center}.flex--bottom{align-items:flex-end}.flex--stretch{align-items:stretch}.flex--baseline{align-items:baseline}.flex--top--multi{align-content:flex-start}.flex--middle--multi{align-content:center}.flex--bottom--multi{align-content:flex-end}.flex--stretch--multi{align-content:stretch}.flex--justify--multi{align-content:space-between}.flex--spaced--multi{align-content:space-around}.flex__item{flex:1}.flex__item--msfix{flex:1 1 auto}.u-1\\/2,.u-1\\/3{flex:none!important}.flex__item--top{align-self:flex-start}.flex__item--middle{-ms-grid-row-align:center;align-self:center}.flex__item--bottom{align-self:flex-end}.flex__item--baseline{align-self:baseline}.viewport{width:100%;max-width:80rem;margin-right:auto;margin-left:auto}.viewport--full-height{min-height:100vh}.list-ui{margin:0;padding:0;list-style:none}.list-ui__item{padding:1rem;border-bottom:1px solid var(--px-list-ui-separator-color,#b6c3cc)}.list-ui__item:first-of-type{border-top:1px solid var(--px-list-ui-border-color,#677e8c)}.list-ui__item:last-of-type{border-bottom:1px solid var(--px-list-ui-border-color,#677e8c)}.list-ui--tiny>.list-ui__item{padding:.33333rem}.list-ui--small>.list-ui__item{padding:.66667rem}.list-ui--large>.list-ui__item{padding:1.33333rem}.list-ui--huge>.list-ui__item{padding:2rem}.u-1\\/1{width:100%!important}.u-1\\/2{width:50%!important}.u-1\\/3{width:33.33333%!important}.u-1\\/4,.u-2\\/3{flex:none!important}.u-2\\/3{width:66.66667%!important}.u-1\\/4{width:25%!important}.u-2\\/4,.u-3\\/4{flex:none!important}.u-2\\/4{width:50%!important}.u-3\\/4{width:75%!important}.u-1\\/6,.u-2\\/6{flex:none!important}.u-1\\/6{width:16.66667%!important}.u-2\\/6{width:33.33333%!important}.u-3\\/6,.u-4\\/6{flex:none!important}.u-3\\/6{width:50%!important}.u-4\\/6{width:66.66667%!important}.u-5\\/6{width:83.33333%!important;flex:none!important}@media screen and (min-width:48rem) and (max-width:63.9rem){.u-1\\/1-lap{width:100%!important}.u-1\\/2-lap{width:50%!important;flex:none!important}.u-1\\/3-lap{width:33.33333%!important;flex:none!important}.u-2\\/3-lap{width:66.66667%!important;flex:none!important}.u-1\\/4-lap{width:25%!important;flex:none!important}.u-2\\/4-lap{width:50%!important;flex:none!important}.u-3\\/4-lap{width:75%!important;flex:none!important}.u-1\\/6-lap{width:16.66667%!important;flex:none!important}.u-2\\/6-lap{width:33.33333%!important;flex:none!important}.u-3\\/6-lap{width:50%!important;flex:none!important}.u-4\\/6-lap{width:66.66667%!important;flex:none!important}.u-5\\/6-lap{width:83.33333%!important;flex:none!important}}@media screen and (max-width:63.9rem){.u-1\\/1-portable{width:100%!important}.u-1\\/2-portable{width:50%!important;flex:none!important}.u-1\\/3-portable{width:33.33333%!important;flex:none!important}.u-2\\/3-portable{width:66.66667%!important;flex:none!important}.u-1\\/4-portable{width:25%!important;flex:none!important}.u-2\\/4-portable{width:50%!important;flex:none!important}.u-3\\/4-portable{width:75%!important;flex:none!important}.u-1\\/6-portable{width:16.66667%!important;flex:none!important}.u-2\\/6-portable{width:33.33333%!important;flex:none!important}.u-3\\/6-portable{width:50%!important;flex:none!important}.u-4\\/6-portable{width:66.66667%!important;flex:none!important}.u-5\\/6-portable{width:83.33333%!important;flex:none!important}}@media screen and (min-width:63.9rem){.u-1\\/1-desk{width:100%!important}.u-1\\/2-desk{width:50%!important;flex:none!important}.u-1\\/3-desk{width:33.33333%!important;flex:none!important}.u-2\\/3-desk{width:66.66667%!important;flex:none!important}.u-1\\/4-desk{width:25%!important;flex:none!important}.u-2\\/4-desk{width:50%!important;flex:none!important}.u-3\\/4-desk{width:75%!important;flex:none!important}.u-1\\/6-desk{width:16.66667%!important;flex:none!important}.u-2\\/6-desk{width:33.33333%!important;flex:none!important}.u-3\\/6-desk{width:50%!important;flex:none!important}.u-4\\/6-desk{width:66.66667%!important;flex:none!important}.u-5\\/6-desk{width:83.33333%!important;flex:none!important}}@media screen and (min-width:100%){.u-1\\/1-desk-wide{width:100%!important}.u-1\\/2-desk-wide{width:50%!important;flex:none!important}.u-1\\/3-desk-wide{width:33.33333%!important;flex:none!important}.u-2\\/3-desk-wide{width:66.66667%!important;flex:none!important}.u-1\\/4-desk-wide{width:25%!important;flex:none!important}.u-2\\/4-desk-wide{width:50%!important;flex:none!important}.u-3\\/4-desk-wide{width:75%!important;flex:none!important}.u-1\\/6-desk-wide{width:16.66667%!important;flex:none!important}.u-2\\/6-desk-wide{width:33.33333%!important;flex:none!important}.u-3\\/6-desk-wide{width:50%!important;flex:none!important}.u-4\\/6-desk-wide{width:66.66667%!important;flex:none!important}.u-5\\/6-desk-wide{width:83.33333%!important;flex:none!important}}@media screen and (max-width:47.9em){.u-1\\/1-palm{width:100%!important}.u-1\\/2-palm{width:50%!important;flex:none!important}.u-1\\/3-palm{width:33.33333%!important;flex:none!important}.u-2\\/3-palm{width:66.66667%!important;flex:none!important}.u-1\\/4-palm{width:25%!important;flex:none!important}.u-2\\/4-palm{width:50%!important;flex:none!important}.u-3\\/4-palm{width:75%!important;flex:none!important}.u-1\\/6-palm{width:16.66667%!important;flex:none!important}.u-2\\/6-palm{width:33.33333%!important;flex:none!important}.u-3\\/6-palm{width:50%!important;flex:none!important}.u-4\\/6-palm{width:66.66667%!important;flex:none!important}.u-5\\/6-palm{width:83.33333%!important;flex:none!important}}@media screen and (min-width:48em){.u-1\\/1-lap-and-up{width:100%!important}.u-1\\/2-lap-and-up{width:50%!important;flex:none!important}.u-1\\/3-lap-and-up{width:33.33333%!important;flex:none!important}.u-2\\/3-lap-and-up{width:66.66667%!important;flex:none!important}.u-1\\/4-lap-and-up{width:25%!important;flex:none!important}.u-2\\/4-lap-and-up{width:50%!important;flex:none!important}.u-3\\/4-lap-and-up{width:75%!important;flex:none!important}.u-1\\/6-lap-and-up{width:16.66667%!important;flex:none!important}.u-2\\/6-lap-and-up{width:33.33333%!important;flex:none!important}.u-3\\/6-lap-and-up{width:50%!important;flex:none!important}.u-4\\/6-lap-and-up{width:66.66667%!important;flex:none!important}.u-5\\/6-lap-and-up{width:83.33333%!important;flex:none!important}}@media screen and (min-width:64em){.u-1\\/1-desk-and-up{width:100%!important}.u-1\\/2-desk-and-up{width:50%!important;flex:none!important}.u-1\\/3-desk-and-up{width:33.33333%!important;flex:none!important}.u-2\\/3-desk-and-up{width:66.66667%!important;flex:none!important}.u-1\\/4-desk-and-up{width:25%!important;flex:none!important}.u-2\\/4-desk-and-up{width:50%!important;flex:none!important}.u-3\\/4-desk-and-up{width:75%!important;flex:none!important}.u-1\\/6-desk-and-up{width:16.66667%!important;flex:none!important}.u-2\\/6-desk-and-up{width:33.33333%!important;flex:none!important}.u-3\\/6-desk-and-up{width:50%!important;flex:none!important}.u-4\\/6-desk-and-up{width:66.66667%!important;flex:none!important}.u-5\\/6-desk-and-up{width:83.33333%!important;flex:none!important}}@media screen and (min-width:120em){.u-1\\/1-large-and-up{width:100%!important}.u-1\\/2-large-and-up{width:50%!important;flex:none!important}.u-1\\/3-large-and-up{width:33.33333%!important;flex:none!important}.u-2\\/3-large-and-up{width:66.66667%!important;flex:none!important}.u-1\\/4-large-and-up{width:25%!important;flex:none!important}.u-2\\/4-large-and-up{width:50%!important;flex:none!important}.u-3\\/4-large-and-up{width:75%!important;flex:none!important}.u-1\\/6-large-and-up{width:16.66667%!important;flex:none!important}.u-2\\/6-large-and-up{width:33.33333%!important;flex:none!important}.u-3\\/6-large-and-up{width:50%!important;flex:none!important}.u-4\\/6-large-and-up{width:66.66667%!important;flex:none!important}.u-5\\/6-large-and-up{width:83.33333%!important;flex:none!important}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.u-1\\/1-retina{width:100%!important}.u-1\\/2-retina{width:50%!important;flex:none!important}.u-1\\/3-retina{width:33.33333%!important;flex:none!important}.u-2\\/3-retina{width:66.66667%!important;flex:none!important}.u-1\\/4-retina{width:25%!important;flex:none!important}.u-2\\/4-retina{width:50%!important;flex:none!important}.u-3\\/4-retina{width:75%!important;flex:none!important}.u-1\\/6-retina{width:16.66667%!important;flex:none!important}.u-2\\/6-retina{width:33.33333%!important;flex:none!important}.u-3\\/6-retina{width:50%!important;flex:none!important}.u-4\\/6-retina{width:66.66667%!important;flex:none!important}.u-5\\/6-retina{width:83.33333%!important;flex:none!important}}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;

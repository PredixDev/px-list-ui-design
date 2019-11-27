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
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-list-ui-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-list-ui-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-list-ui-design" description="The Predix UI List UI module creates blocky, keyline-delimited list items." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-colors-design&quot;,
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Padding" choose-with="dropdown" choices="[
    &quot;tiny&quot;,
    &quot;small&quot;,
    &quot;regular (default)&quot;,
    &quot;large&quot;,
    &quot;huge&quot;
  ]" default-choice="regular (default)">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<ul class\$="{{listClasses}}">
  <li class="list-ui__item">List Item</li>
  <li class="list-ui__item">List Item</li>
  <li class="list-ui__item">List Item</li>
</ul>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- List Tiny -->
<ul class="list-ui list-ui--tiny">
  <li class="list-ui__item">...</li>
</ul>


<!-- List Small -->
<ul class="list-ui list-ui--small">
  <li class="list-ui__item">...</li>
</ul>


<!-- List Regular -->
<ul class="list-ui">
  <li class="list-ui__item">...</li>
</ul>


<!-- List Large -->
<ul class="list-ui list-ui--large">
  <li class="list-ui__item">...</li>
</ul>


<!-- List Huge -->
<ul class="list-ui list-ui--Huge">
  <li class="list-ui__item">...</li>
</ul>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-list-ui-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.importCode = this._importCode();
    this.listClasses = this._listClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _listClasses : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Padding === "tiny")    strings.push("list-ui--tiny");
    if (opts.Padding === "small")   strings.push("list-ui--small");
    if (opts.Padding === "large")   strings.push("list-ui--large");
    if (opts.Padding === "huge")    strings.push("list-ui--huge");
    return ("list-ui " + strings.join(" ")).trim();
  },

  _importCode : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Padding === "tiny")    strings.push("$inuit-enable-list-ui--tiny : true;");
    if (opts.Padding === "small")   strings.push("$inuit-enable-list-ui--small : true;");
    if (opts.Padding === "large")   strings.push("$inuit-enable-list-ui--large : true;");
    if (opts.Padding === "huge")    strings.push("$inuit-enable-list-ui--huge : true;");
    return (strings.join("\n") + "\n@import 'px-list-ui-design/_objects.list-ui.scss';").trim();
  }
});

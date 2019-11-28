
<style>
#install-button {
  margin-right: 1rem;
  padding: 0.75rem 1rem;

  color: #fff;
  
  background: rgb(29,142,255); /* Old browsers */
  background: -moz-linear-gradient(-45deg,  rgb(29,142,255) 0%, rgb(14,129,244) 44%, rgb(19,113,207) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  rgb(29,142,255) 0%,rgb(14,129,244) 44%,rgb(19,113,207) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  rgb(29,142,255) 0%,rgb(14,129,244) 44%,rgb(19,113,207) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d8eff', endColorstr='#1371cf',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 2rem;

  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}
#install-button:nth-child(2) {
  margin-left: 1rem;

  background: rgb(0,95,190); /* Old browsers */
  background: -moz-linear-gradient(-45deg,  rgb(0,95,190) 0%, rgb(7,86,165) 44%, rgb(13,76,139) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  rgb(0,95,190) 0%,rgb(7,86,165) 44%,rgb(13,76,139) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  rgb(0,95,190) 0%,rgb(7,86,165) 44%,rgb(13,76,139) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#005fbe', endColorstr='#0d4c8b',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>


# cvutplus

Userscript to improve your user experience with CVUT systems.


## Installation:

### 1. Install [Tapermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://www.greasespot.net/) or other preferred userscript extension.

### 2. Install Userscript by choosing:

<a href="https://github.com/QuentinCaffeino/cvutplus/blob/master/dist/cvutplus.user.js"
   title="Stable" id="install-button" class="noBg">
   Stable
</a>
or
<a href="https://github.com/QuentinCaffeino/cvutplus/blob/develop/dist/cvutplus.user.js"
   title="Development (Unstable)" id="install-button" class="noBg">
   Development
</a>


## Features:

- Brute:
  - Warn user on attempt to reupload assigment if current score is >= to the minimum required score.


## Todo:

- Brute:
  - [ ] Sort assignments by date
  - [ ] Components (Upcoming deadlines, Course, Assignment)
  - [ ] Controllers to run specific components on specific pages
  - [ ] Add opacity to already completed assignments in lists

# Changelog

## [6.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.5...6.0.0) 
* Add: emit all events, fixes [#37](https://github.com/ankurk91/vue-flatpickr-component/issues/37)
* Fix: dynamically change configs, [#20](https://github.com/ankurk91/vue-flatpickr-component/issues/20)
* Change: export name, default export remains same

## [5.0.5](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.4...5.0.5) 
* Internal: Remove the need of `Object.assign`

## [5.0.4](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.3...5.0.4) 
* Revert the changes made in v5.0.3

## [5.0.3](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.2...5.0.3) 
* Fix: a bug where changes in `config` object properties were not being detected

## [5.0.2](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.1...5.0.2) 
* Fix: `input` event was being emitted twice, [#44](https://github.com/ankurk91/vue-flatpickr-component/issues/44), [#29](https://github.com/ankurk91/vue-flatpickr-component/issues/29)

## [5.0.1](https://github.com/ankurk91/vue-flatpickr-component/compare/5.0.0...5.0.1) 
* Fix: Don't update DOM when `allowInput` is set to true in config

## [5.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/4.0.0...5.0.0) (breaking)
* Change:
    - `input-class` prop has been removed, you can always use Vue.js inbuilt [class](https://vuejs.org/v2/guide/class-and-style.html#With-Components) binding
    ```html
    <flat-pickr v-model="date" class="form-control input"></flat-pickr>
    ```
    - Similarly `name`, `id`, `placeholder` and `required` props has been removed, you can still specify any number of attributes on component
    ```html
        <flat-pickr v-model="date" name="date-of-birth" id="js-date" placeholder="Select date" aria-required="true"></flat-pickr>
    ```
    - Non module environment usage, no longer required to call `.default`
    ```js
    Vue.component('flat-pickr', VueFlatpickr);
    ```
* Add:
    - Allow timestamps as value    

## [4.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/3.1.3...4.0.0) (breaking)
* Change: 
    - Upgrade to flatpickr [v4.x](https://github.com/chmln/flatpickr/releases/tag/v4.0.0)
    - Change `onChange` event name to `on-change`
* Fix: 
    - v-model validator method typo
    - IE11 support
* tests: add test case with coverage
* chore: `dist` folder is no longer a part of repo, it will be published on npm only. It means bower no longer supported.

## [3.1.3](https://github.com/ankurk91/vue-flatpickr-component/compare/3.1.2...3.1.3) 
* Fix: value prop validation 

## [3.1.2](https://github.com/ankurk91/vue-flatpickr-component/compare/3.1.1...3.1.2) 
* Fix: Prevent multiple `onChange` event after component destroy, [#27](https://github.com/ankurk91/vue-flatpickr-component/issues/27)

## [3.1.1](https://github.com/ankurk91/vue-flatpickr-component/compare/3.1.0...3.1.1) 
* Fix: Prevent `onChange` event being emitted twice 

## [3.1.0](https://github.com/ankurk91/vue-flatpickr-component/compare/3.0.0...3.1.0) 
* Add: Emit `onChange` event, [#20](https://github.com/ankurk91/vue-flatpickr-component/issues/20)

## [3.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.4.1...3.0.0) (Breaking)
- Change: `flatPicker.vue` file name to `component.vue`
   - This will be breaking for users who were directly importing `.vue` file
- Change: Don't force `form-control` CSS class on input field, [#18](https://github.com/ankurk91/vue-flatpickr-component/pull/18)
   - If you wants to add a new class on input, you need to do like this
   - `<flatpickr input-class="form-control custom-css-class">`
   - `:class` prop will replace default CSS class on input field
- Add: Ability to pass component name when used as plugin
   - `Vue.use(flatPickr,'date-picker')`
   - You can pass name as second parameter
- Chore: Upgrade to webpack v3.x

## [2.4.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.3.0...2.4.0)
- Fix UglifyJS issue

## [2.3.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.2.0...2.3.0)
- New way to use as plugin, old one is deprecated, see new [example](https://github.com/ankurk91/vue-flatpickr-component#as-plugin)
    - You should NOT import plugin like this
    - `import {flatPickrPlugin} from 'vue-flatpickr-component';`
- Add `id` prop

## [2.2.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.1.0...2.2.0)   
- Rollback importing css, component is no longer importing any css
    - This also applies when using this package as plugin `Vue.use()` 
              
## [2.1.0](https://github.com/ankurk91/vue-flatpickr-component/compare/2.0.0...2.1.0)  
- Expose ``install`` method, so that now you can use this package as a [plugin](https://vuejs.org/v2/guide/plugins.html)

## [2.0.0](https://github.com/ankurk91/vue-flatpickr-component/compare/1.2.4...2.0.0) (breaking)
- Rename `input-name` prop to `name`
- No longer support flatpickr v2.x, always pull v3.x
- No longer importing flatpickr css, you need to import css by yourself, see examples

## 1.2.4
- Improve value prop validation

## 1.2.3
- Add value prop validation

## 1.2.0
- Allow flatPickr v3.x stable
- Rename ``instance`` to ``fp``, if you were accessing it through ``$refs`` this may be a breaking change for you

## 1.1.3
- Regenerate build files

## 1.1.2
- Allow array of objects and date object as default value

## 1.1.0
- Make ``wrap`` optional
- From now, you need to wrap by your-self and pass ``config.wrap`` as true
- No longer force bootstrap, you are free to use any of CSS framework
 
## 1.0.0
- Initial release

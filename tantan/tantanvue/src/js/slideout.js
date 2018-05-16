import slideout from 'slideout'
 
export default {
 install: function(Vue,) {
  Object.defineProperty(Vue.prototype, '$slideout', { value: slideout });
 }
}
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/section.css"
import "./assets/css/commons.css"

Vue.config.productionTip = false

// export const eventBus = new Vue();
const eventBus = new Vue();
export default eventBus;
// EventBus란?
// Vue는 컴포넌트 단위로 메소드/변수를 포함해서 구성한다. 
// Vue에서 개발을 하다보면
// 데이터의 경우 vuex와 같은 라이브러리를 사용하면 컴포넌트간 데이터를 쉽게 가져올 수 있다.
// 그리고 컴포넌트간 메서드를 호출해야할 경우가 있다.
// 보통 emit 같은 기능을 사용해서 구현을 하겠지만 비 부모-자식간 통신을 해야하면 어떻게 해야 할까?
// 이러한 경우 EventBus를 활용하여 컴포넌트간 메소드를 호출할 수 있다.
// EventBus라는 공간에 각 프로젝트에 맞는 규격을 만들어 규격에 따라 EventBus를 활용하면 된다.

// 구성하는 코드는 별도로 빼든 main.js에 선언하든 크게 상관은 없다. 기본적인 구성은 아래와 같다.
//main.js

// import Vue from 'vue'
// import App from './App.vue'

// // EventBus 생성
// Vue.prototype.$EventBus = new Vue();

// new Vue({
// 	...
//     render: h => h(App)
// }).$mount('#app')
 

// 자 그럼 만들어진 EventBus를 가지고 어떻게 활용을 하는가?
// A 컴포넌트의 버튼을 클릭하면 B컴포넌트의 메서드를 실행하는 예시이다.

 // A Component
// <template>
// 	...생략
//     <button @click="onAClick">
//     	버튼
//     </button>
//     ...생략
// </template>

// ... 생략
//     method: {
//     	onAClick() {
//         	this.$EventBus.$emit('fetchData')
//         }
//     }
 

// B Component
// <template>
// 	...생략
// </template>

// ... 생략
//   created() {
//     this.$EventBus.$on('fetchData', () => {
//       this.fetchData();
//     })
//   },

// A 컴포넌트에서 버튼 클릭하여 EventBus를 통해 emit을 실행한다.
// 그리고 B컴포넌트에선 리스너로 실행한다.

 // 만약 파라미터를 전송해야 한다면 어떤식으로 구성할까?
// 아래와 같이 구현이 가능하다.

// // call
// this.$EventBus.$emit('fetchData', param)

// // listen
// this.$EventBus.$on('fetchData', (param) => {
// 	this.fetchData(param);
// })
 
// 참고자료
// https://song8420.tistory.com/379
// https://vuejs-kr.github.io/jekyll/update/2017/02/13/vuejs-eventbus/

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

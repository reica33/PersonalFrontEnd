<template>
  <div id="SocksCartView">
    <div class="nav-bar"></div>

    <!-- 장바구니 카운트 수치 -->
    <!-- <div class="cart">Cart {{ cart }}</div> -->
    <!-- updateCart 추가하면서 아래와 같이 변경 -->
    <div class="cart">장바구니개수( {{ cart.length }} )</div>

    <!-- product component 부분 -->
    <!-- 도전 과제 : 자식 쪽에서 보낸 신호를 받아 함수 실행 -->
    <ProductDisplayTwoCom
      :premium="prem"
      @add-to-cart="updateCart"
      @remove-from-cart="removeById"
    >
    </ProductDisplayTwoCom>
    <!-- <div class="review-container">
      <h3>Reviews</h3>
      <ul>
        <li v-for="(review, index) in reviews" v-bind:key="index">
          {{ review.name }} 님이 {{ review.rating }} 별점을 줌
          <br />
          "{{ review.review }}"
          <br />
          Recommended: {{ review.recommend }}
        </li>
      </ul>
    </div>
    <ReviewListCom></ReviewListCom> -->
    <ReviewFormCom></ReviewFormCom>
  </div>
</template>

<script>
// @ is an alias to /src
// import ProductDisplayCom from "@/components/ProductDisplayCom.vue";
import ProductDisplayTwoCom from "@/components/ProductDisplayTwoCom.vue"
import ReviewFormCom from "@/components/ReviewFormCom.vue";
// import ReviewListCom from "@/components/ReviewListCom.vue";

export default {
  name: "GoodsCartTwoView",
  components: {
    ProductDisplayTwoCom,
    // ReviewListCom,
    ReviewFormCom,
  },
  data() {
    return {
      // cart: 0,
      // 배열에 계속 push할 예정 - updateCart()
      cart: [],
      // 변수 추가
      prem: false,
      reviews: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    // 도전과제 펑션
    removeById(id) {
      // id에 해당하는 값을 찾아서 배열에서 삭제
      // 1. id에 해당하는 배열의 index 번호 찾기
      // indexOf()
      // 1st 매개변수 : 배열의 값 - 매개변수에 값을 넣으면 인덱스 번호를 찾아줌.
      // return 값 : 배열의 index 번호
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
      const index = this.cart.indexOf(id);
      // 2. splice()
      // 1st 매개변수 : 배열의 index 번호
      // 2nd 매개변수 : 삭제될 개수
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      // this.cart.splice(index, 1);
      // 배열의 인덱스 번호가 0부터 시작인데 0부터 시작하는 것이 없으면 음수가 나옴. 이를 방지하기 위해 아래와 같이 변경
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
/* @import '../assets/css/socks.css'; */

/* body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
} */

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.cart {
  margin: 25px 0px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}


.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 35px;
}

h3 {
  font-size: 15px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 50px 0px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.nav-bar {
  margin-top: 150px;
}

.out-of-stock-img {
  opacity:0.5
}

p {
  font-size: 22px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}

</style>

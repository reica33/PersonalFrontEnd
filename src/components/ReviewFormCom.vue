<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <br>
    <!-- label for과 input, textarea, select등의 id 언제나 동일하게 -->
    <label for="name">Name : </label>
    <input id="name" v-model="name" />

    <br>
    
    <!-- 입력 양식은 model 나머지는 bind -->
    <label for="review">Review : </label>
    <textarea id="review" v-model="review"></textarea>
    
    <br>
    <br>

    <label for="rating"> Rating : </label>
    <select id="rating" v-model="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <br>

    <label for="recommend">이 상품을 추천하시겠습니까?</label>
    <select id="recommend" v-model="recommend">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<script>
/* eslint-disable */
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      // 변수 초기화
      name: "",
      review: "",
      rating: null,
      recommend: null,
      // recommend: "" 도 가능
      // rating 평가, 등급
      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null
    };
  },
  methods: {
    onSubmit() {
      // 왜 하나도 기입안했니 하고 alert창 띄우기
      // || = 논리연산자 OR
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === "" ||
        this.recommend === ""
      ) {
        alert("양식을 작성해 주세요");
        return; // 함수 탈출 = break
      }

      // 부모로 클릭 신호와 함께 객체 데이터 전송
      // 속성 하나씩 자식 -> 부모로 쏴줄 필요 없이 productReview 객체 안에 모든 속성 세팅
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit("review-submitted", productReview);

      // 부모로 데이터 전송 후 아래 변수(데이터) 초기화
      this.name = "";
      this.review = "";
      this.rating = null;
      this.recommend = null;
      // this.recommend = ""; 도 가능
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
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
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

#name {
  width: 150px;
}

</style>

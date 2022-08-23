<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- 기본 양말 이미지가 들어갈 공간 (밑에 흐려지는 거 지우고 다시 원상복구) -->
        <img v-bind:src="image" />
        <!--  연습문제 class : out-of-stock-img -->
        <!-- <img v-bind:class="{ 'out-of-stock-img': !InStock }"
                v-bind:src="image" /> -->
      </div>

      <div class="product-info">
        <!-- 연습문제 title = brand + ' ' + product / 펑션명 title -->
        <h1>{{ title }}</h1>
        <!-- <h1>{{ product }}</h1> -->
        <!-- 연습문제 InStock 펑션에서 배열의 quantity가 0 이상이면 In Stock -->

        <!-- 연습문제 onSale 펑션  - saleMessage = brand + ' ' + product + 'is on sale' 보이게 -->
        <!-- onSale이 false이면 안 보이게 -->
        <!-- <p v-if="onSale">{{ saleMessage }}</p> -->

        <!-- <p v-if="onSale">On sale</p> + <p v-if="InStock">In Stock</p> 으로 변경 -->
        <!-- <p v-if="InStock">On sale</p> -->
        <p v-if="InStock">판매중</p>
        <!-- <p v-else>Out of Stock</p> -->
        <p v-else>품절(입고 대기중)</p>

        <!-- premium 이 true가 되면 Shipping : Free -->
        <!-- premium 이 false가 되면 Shipping : 2.99 -->
        <!-- 변수명(함수명) : shipping -->
        <!-- 아래 위치에 출력해 주세요 -->
        <!-- <p>Shipping : {{ shipping }}</p> -->
        <p>가격 : {{ shipping }} 원</p>

        <br>
        <!-- 연습문제 details : ul 목록 태그로 출력(반복문) 에서 도전과제로 변경 -->
        <ul>
          <li v-for="detail in details" v-bind:key="detail">{{ detail }}</li>
        </ul>
        <!-- 도전과제 -->
        <!-- 전역 자식 컴포넌트 (반복문) -->
        <!-- 아래 ul 태그 부분을 자식 컴포넌트로 만들고 자식 컴포넌트명 : product-details -->
        <!-- props : details -->
        <!-- 아래 위치에 보여주세요 -->
        <!-- <product-details v-bind:details="details"></product-details> -->
        <!-- 연습문제 마우스가 글자에 위치하면 그 색상의 양말 이미지가 보이게 하는 로직을 추가 -->
        <!-- 펑션명 : updateImage(variant.image) -->
        <!-- <div v-for="variant in variants"
                v-bind:key="variant.id"
                v-on:mouseover="updateImage(variant.image)"
                class="color-circle"
                v-bind:style = "{'background-color': variant.color}"
                >
                {{ variant.color }}
            </div> -->
        <!-- 연습문제 style = 'background-color' : 배열의 색상 -->
        <div
          v-for="(variant, index) in variants"
          v-bind:key="variant.id"
          v-on:mouseover="updateImage(index)"
          class="color-circle"
          v-bind:style="{ 'background-color': variant.color }"
        >
          <!-- {{ variant.color }} -->
        </div>
        <!-- 장바구니 버튼 -->
        <!-- <button class="button" v-on:click="addToCart">Add To Cart</button> -->
        <!-- <button class="button"
                v-bind:class="{ disabledButton: !InStock }"
                v-bind:disabled="!InStock"
                v-on:click="addToCart"
                >
                Add To Cart
            </button> -->
        <!-- 장바구니 버튼 - 아래처럼 동일하게 만드는 것이 추천 문법 -->
        <button
          class="button"
          :class="{ disabledButton: !InStock }"
          :disabled="!InStock"
          @click="addToCart"
        >
          Add To Cart
        </button>
        <!-- 장바구니 삭제 버튼 -->
        <button
          class="button"
          :class="{ disabledButton: !InStock }"
          :disabled="!InStock"
          @click="removeFromCart"
        >
          RemoveItem
        </button>

        <!-- 연습문제 -->
        <!-- delete to Cart 버튼을 추가하고 버튼을 누르면 카운트가 감소하게 만들어 주세요 -->
        <!-- class="button" -->
        <!-- <button class="button" v-on:click="deleteToCart">delete to Cart</button> -->

        <!-- 연습문제 뷰에 데이터 variants 배열 : ul 목록 태그로 출력(반복문) -->
        <!-- <ul>
              <li v-for="variant in variants" v-bind:key="variants.id">
                {{ variant.color }}
              </li>
            </ul> -->

        <!-- 연습문제 뷰에 데이터 변수 sizes 배열 : ul 목록 태그로 출력(반복문) -->
        <!-- <ul>
                <li v-for="size in sizes" v-bind:key="size">{{ size }}</li>
            </ul> -->
        <!-- 연습문제 inventory > 10 이면 InStock -->
        <!-- inventory <= 10 && inventory > 0 이면
                Almost sold out -->
        <!-- inventory = 0 이면 Out of Stock -->
        <!-- <p v-if="inventory > 10">InStock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
            <p v-else>Out of Stock</p> -->
        <!-- 연습문제 <a v-bind:href="url">네이버</a> -->
      </div>
    </div>
    <!-- 양식 내용 보여주기 -->
    <!-- reviews.length가 0건보다 크면, 1건이라도 있으면 if문은 참 : 보여준다 -->
    <!-- <review-list v-if="reviews.length" :reviews="reviews"></review-list> -->
    <!-- 양식 작성 입력란 -->
    <!-- <review-form @review-submitted="addReview"></review-form> -->
  </div>
</template>

<script>
/* eslint-disable */
import { eventBus } from "../main.js";

export default {
  props: {
    premium: {
      // []로 들어가는 것도 가능
      type: Boolean,
      required: true, // 필수로 이 데이터가 필요하냐(true) 필요하지 않느냐(false)
    },
  },
  data() {
    return {
      // cart 변수 삭제하고 main.js로 이동
      // product: "Socks",
      product: "악의 마음을 읽는 자들",
      // 브랜드 추가
      // brand: "Vue Mastery",
      brand: "Script Book",
      // 객체배열에서 선택된 인덱스
      selectedVariant: 0,
      // reviews 데이터 추가 : 그냥 배열 -> 객체 배열
      // reviews: [],
      // 밑에 있는 것을 computed 펑션 변경
      // InStock: true, (하드코딩 - 능동적으로 개선하기 위해서 computed 펑션으로 변경한 것)
      // onSale: true,
      details: ["권일용 프로파일러 소설", "김남길 배우", "웰메이드 범죄 수사극"],
      variants: [
        {
          id: 2234,
          color: "black",
          image: require("../assets/img/Through the Darkness_ScriptBook_1.jpg"),
          quantity: 50,
        },
        {
          id: 2235,
          color: "gray",
          image: require("../assets/img/Through the Darkness_ScriptBook_2.jpg"),
          // quantity: 0,
          quantity: 50,
        },
      ],

      // sizes: ["10", "20"]
      // inventory: 0,
      // url : "http://www.naver.com",
      // description: "Very Good experience"
    };
  },
  // 주로 이벤트 - 마우스오버(엔터), 마우스리브, 마우스클릭
  methods: {
    addToCart: function () {
      // 연습문제 카운트 변수 : cart
      // 1씩 증가시키세요
      // this.cart++;

      // 강사님 답
      // this.cart += 1;

      // 컴포넌트화 되어서 부모쪽으로 클릭 이벤트 신호를 보냄
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    // deleteToCart: function() {
    // 연습문제 카운트 변수 : cart
    // 1씩 감소시키세요
    // 양수일 때만 감소 - if문
    // if(this.cart > 0){
    //    this.cart -= 1;
    // }
    // },
    // updateImage: function(variantImage) {
    // 연습문제 비지니스 로직 추가
    // 1. 기본이미지 변수에 경로를 덮어침
    // 2. 매개변수 : variantImage = 녹색 양말 또는 청색 양말 이미지 경로
    // this.image = variantImage;
    // },
    // 기본이미지를 펑션으로 변경함으로써 아래 펑션도 수정
    updateImage: function (index) {
      // 비지니스 로직 추가
      // 배열의 index번호를 selectedVariant에 넣어주고 있음
      // updateImage함수가 없으면 selectedVariant 쓸모 없음
      this.selectedVariant = index;
    },
    // 도전 과제
    // 펑션명 : removeFromCart()
    // remove-from-cart 신호로 부모쪽에 보내고,
    // 매개변수 : this.variants[this.selectedVariant].id
    // 상품의 id : 2234 가 들어 있는 것.
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    addReview(review) {
      // 객체 배열 reviews안에 매개변수review를 만들고 받아서 push
      this.reviews.push(review);
    },
  },
  // 데이터 감시 펑션
  // 양방향 데이터 - 데이터가 변경돼면 자동 재갱신하는 딱 그 이론을 따르는 컴퓨티드
  // 데이터 감시하다가 변경되면 바로 그 변경된 데이터를 화면에 뿌려주는 컴퓨티드
  // 안 쓰는 곳은 바닐라나 제이쿼리 웹페이지 -직접 호출로 뿌림
  computed: {
    // 데이터를 감시하다가 데이터가 조금이라도 변경이 되면 펑션을 자동 재실행해서
    // 화면에 자동으로 변경된 데이터를 보여줌(재갱신)
    // 펑션 내에서 쓰이는(this.blahblah) 것들만 감시하는 computed
    title: function (title) {
      // 강사님 답
      return this.brand + " " + this.product;
      // 은송이 답
      // return this.title = this.brand + " " + this.product;
    },
    image: function () {
      // 기본이미지(녹색양말 이미지)
      // this.variants[0].image (하드코딩) = image: "./assets/images/socks_green.jpg"
      // this.selectedVariant = 0
      return this.variants[this.selectedVariant].image;
    },
    InStock: function () {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium == true) {
        // == true 지워도 if문 기본이 true이므로 가능. 알아두기!
        return "Free";
      }
      // return 2.99;
      return 19000;
    },
    // saleMessage: function() {
    //     return this.brand + ' ' + this.product + ' is on sale'
    // },
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

/* .nav-bar {
  margin-top: 150px;
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
} */

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

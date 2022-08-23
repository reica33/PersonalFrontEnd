<template>
  <!-- 메뉴 부분 -->
  <nav id="main-navigation">
    <!-- 검색엔진 -->
    <div class="pull-left">
      <div class="search-bar">
        <form>
          <!-- 검색인풋박스 -->
          <input type="text" class="input-search" placeholder="Search" />
          <!-- 검색버튼 -->
          <input type="submit" class="input-search-submit" value="검색" />
        </form>
      </div>
    </div>
    <div class="pull-right">
      <ul class="outer-menu">
        <!-- 대메뉴 : 첫번째 About 메뉴 -->
        <li class="outer-menu-item"
          v-on:mouseover="isShow = true"
          v-on:mouseleave="isShow = false"
        >
          <span class="menu-title">ABOUT</span>
          <ul class="inner-menu" v-if="isShow">
            <!-- About 밑의 홈 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/">HOME</router-link>
            </li>
            <!-- About 밑의 멤버 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/memberlist">MEMBER</router-link>
            </li>
            <!-- About 밑의 주인장 이률리 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/aboutyrr">I am YRR</router-link>
            </li>
          </ul>
        </li>
        <!-- 두번째 JOIN US 메뉴 -->
        <li class="outer-menu-item"
          v-on:mouseover="isShow02 = true"
          v-on:mouseleave="isShow02 = false"
        >
          <span class="menu-title">JOIN US</span>
          <!-- JOIN US 밑의 회원가입 소메뉴 -->
          <ul class="inner-menu" v-if="isShow02">
            <li class="inner-menu-item">
              <router-link to="/joinus">회원가입</router-link>
            </li>
          </ul>
        </li>
        <!-- 세번째 INQUIRY 메뉴 -->
        <li class="outer-menu-item"
          v-on:mouseover="isShow03 = true"
          v-on:mouseleave="isShow03 = false"
        >
          <span class="menu-title">INQUIRY</span>
          <ul class="inner-menu" v-if="isShow03">
            <!-- INQUIRY 밑의 ASK TO ME 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/asktome">ASK TO ME✍</router-link>
            </li>
            <!-- INQUIRY 밑의 AUDITION 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/audition">AUDITION</router-link>
            </li>
          </ul>
        </li>
        <!-- 네번째 GOODS 메뉴 -->
        <li class="outer-menu-item"
          v-on:mouseover="isShow04 = true"
          v-on:mouseleave="isShow04 = false"
        >
          <span class="menu-title">CART</span>
          <ul class="inner-menu" v-if="isShow04">
            <!-- INQUIRY 밑의 ASK TO ME 소메뉴 -->
            <li class="inner-menu-item">
              <router-link to="/goodscart1">GOODS_1</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="/goodscart2">GOODS_2</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// npm install --save jquery
// import $ from 'jquery';

export default {
  data() {
        return {
            // 메뉴에 마우스 커서 올라왔을 때와 내려왔을 때의 변화(초기 설정은 false로 안 보이게)
            isShow: false,
            isShow02: false,
            isShow03: false,
            isShow04: false
        }
    },
  // mounted() {
  //       $(document).ready(function () {
  //           $('.outer-menu-item').hover(function () {
  //               $(this).find('.inner-menu').show();
  //           }, function () {
  //               $(this).find('.inner-menu').hide();
  //           });
  //       });
  //   },
};
</script>

<style scoped>
/* scoped : 해당 vue에서만 css style 적용 */
@import "../../assets/css/navigation.css";
</style>

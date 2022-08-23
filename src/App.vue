<template>
  <div id="app">
    <!-- HeaderCom 추가 -->
    <HeaderCom></HeaderCom>
    <!-- 네비게이션 -->
    <NavCom></NavCom>
    <!-- 컨텐츠가 바뀌는 부분 : 페이지가 바뀌는 부분(router/index.js) 자동으로 해줌 -->
    <router-view />
    <!-- 푸터 -->
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom from "@/components/common/HeaderCom.vue";
import NavCom from "@/components/common/NavCom.vue";
import FooterCom from "@/components/common/FooterCom.vue";

export default {
  components: {
    HeaderCom,
    NavCom,
    FooterCom,
  },
};
</script>

<style></style>

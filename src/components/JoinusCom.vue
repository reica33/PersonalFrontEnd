<template>
<form id="signup">
    <fieldset>
      <legend>로그인 정보</legend>
      <ul>
        <!-- 아이디 -->
        <li>
          <label for="userId">회원 ID</label>
          <input id="userId" name="userId" type="text" v-model="userId" required autofocus> <!-- focus() : 커서 깜빡깜빡-->
        </li>
        <!-- 비밀번호 -->
        <li>
          <label for="userPwd">비밀번호</label>
          <input id="userPwd" name="userPwd" v-model="userPwd" type="password" required>
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>개인 정보</legend>
      <ul>
        <!-- 이름 -->
        <li>
          <label for="fullname">회원명</label>
          <input id="fullname" name="fullname" type="text" v-model="fullname" maxlength="4" placeholder="공백없이" required>
        </li>
        <!-- 전화번호 -->
        <li>
          <label for="tel">전화번호</label>
          <input id="tel" name="tel" type="number" v-model="tel" placeholder="-없이" required>
        </li>
        <!-- 이메일 -->
        <li>
          <label for="mail">이메일</label>
          <input id="mail" name="mail" type="email" v-model="mail" placeholder="email_ID@domain.com" autocomplete="off">
        </li>
      </ul>
    </fieldset>
    <fieldset>
      <legend>가입 날짜</legend>
      <div id="date">
        DATE : <input id="datepicker">
      </div>
    </fieldset>
    <fieldset>
      <button type="submit" v-on:click="signupBtn()"> 회원가입 완료 </button>  <!-- v-on:click="signupBtn()" -->
    </fieldset>
  </form>
</template>

<script>
import signupBtn from '../util/joinUs.js'

export default {
  methods: {
    signupBtn: function() {
      signupBtn();
    },
  },
  data() {
    return {
      userId: "",
      userPwd: "",
      fullname: "",
      tel: "",
      mail: "",
    }
  }
  
}
</script>

<style scoped>
@import "../assets/css/joinUs.css"
</style>
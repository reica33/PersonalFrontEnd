<template>
   <!-- 본문 -->
        <div id="content">
            <section id="main-section">
                <!-- 본문 상세 첫번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">ASK TO ME</h1>
                    </div>
                    <!-- 본문 내용 -->
                    <div class="article-body">
                        <form id="ask_form">
                            <fieldset>
                                <legend>문의사항이 있으신가요?</legend>
                                <div class="ask_form_list">
                                    <ul>
                                        <li>
                                            <label for="fullname">회원명</label> <!-- <sup>*</sup> : 필수라는 것 표시 -->
                                            <input id="fullname" name="fullname" type="text" v-model="fullname" placeholder="공백없이" required>
                                        </li>
                                        <li>
                                            <label for="mail">답변받을 이메일</label> <!-- <sup>*</sup> : 필수라는 것 표시 -->
                                            <input id="mail_id" name="mail_id" type="text" style="width:100px" v-model="mail_id" placeholder="email_ID" autocomplete="off" required >
                                             @
                                            <select id="selectEmail" name="selectEmail" v-model="selectEmail" style="width:100px; margin-right:10px;">
                                                <option value="1">직접입력</option>
                                                <option value="naver.com" selected>naver.com</option>
                                                <option value="hanmail.net">hanmail.net</option>
                                                <option value="nate.com">nate.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label for="message">메세지</label> <!-- <sup>*</sup> : 필수라는 것 표시 -->
                                            <textarea id="message" name="message" v-model="message" placeholder="문의 내용을 입력해 주세요." required></textarea>
                                        </li>
                                    </ul>
                                </div>
                            </fieldset>
                            <fieldset>
                                <p>문의 답변은 빠른 시일내로 입력하신 이메일로 답변드리겠습니다.</p>
                                <button type="submit" v-on:click="askToMeBtn()">보내기</button>
                                <form name="이 폼의 이름" action="이 데이터들을 받을 파일" method="post" enctype="multipart/form-data">
                                    <input type='file' name='' multiple />
                                </form>
                            </fieldset>
                        </form>
                    </div>
                </article>
            </section>
            <!-- 오른쪽 메뉴 -->
            <aside id="main-aside">
                <!-- 첫번째 대메뉴 -->
                <div class="aside-list">
                    <h3>LOG IN</h3>
                    <!-- 소메뉴 -->
                    <ul>
                        <li><router-link to="/login">로그인</router-link></li>
                    </ul>
                </div>
                <!-- 두번째 대메뉴 -->
                <div class="aside-list">
                    <h3>CONTACT US</h3>
                    <!-- 소메뉴 -->
                    <ul>
                        <li><router-link to="#"><img src="@/assets/img/instagram.png" width="50" height="50" alt="인스타그램"></router-link>
                            <router-link to="#"><img src="@/assets/img/twitter.png" width="50" height="50" alt="트위터"></router-link></li>
                    </ul>
                </div>
            </aside>
        </div>
</template>

<script>
import askToMeBtn from '../util/askToMe.js'

export default {
  methods: {
    askToMeBtn: function() {
      askToMeBtn();
    }
  },
  data() {
    return {
      fullname: "",
      mail_id: "",
      selectEmail: "",
      message: ""
    }
  }
}
</script>

<style scoped>
@import "../assets/css/askToMe.css"
</style>
<template>
   <!-- 본문 -->
        <div id="content">
            <section id="main-section">
                <!-- 본문 상세 첫번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">AUDITION</h1>
                    </div>
                    <!-- 본문 내용 -->
                    <div id="slider">
                        <!-- <a href="#" class="next" v-on:click="next">→</a> -->
                        <!-- <a href="#" class="prev" v-on:click="prev">←</a> -->
                        <!--  <ul class="slides"> -->
                        <ul>
                            <li><img src="@/assets/img/1.png" alt="김남길"></li>
                            <!-- <li><img src="@/assets/img/2.png" alt="김남길2 슬라이드"></li> -->
                            <!-- <li><img src="@/assets/img/3.png" alt="김재욱1 슬라이드"></li> -->
                            <li><img src="@/assets/img/4.png" alt="김재욱"></li>
                            <!-- <li><img src="@/assets/img/5.png" alt="강동원1 슬라이드"></li> -->
                            <li><img src="@/assets/img/6.png" alt="강동원"></li>
                        </ul>
                    </div>
                    <div class="article-body-audition">
                        <table>
                            <thead>
                              <tr>
                                  <th colspan="2">JOIN THE ARTISTS <br>
                                      GROUP OF YRR ENTERTAINMENT</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>대상</th>
                                <td>연기자</td>
                              </tr>
                              <tr>
                                <th>기간</th>
                                <td>수시 모집</td>
                              </tr>
                              <tr>
                                <th>방법</th>
                                <td>이메일 접수 reica33@yrr_ent.com <br>
                                    프로필(자유 형식)을 위 메일로 접수해 주세요. <br> (사진, 소개 영상 첨부 필수) <br>
                                    지원자 중 서류 심사 합격자에게 개별 연락<br> 후 미팅 및 오디션을 진행합니다. </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="2">※ 보내주신 서류는 개인 정보 보호를 위해 보안 유지하여 관리합니다.</td>
                              </tr>
                            </tfoot>
                        </table>
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

<!-- npm install vue-image-slider --save -->
<script>
// import { moveSlide, moveLeft, moveRight } from '../util/audition.js'

export default {
  // methods: {
  //   moveSlide: function() {
  //     moveSlide();
  //   },
  //   moveLeft: function() {
  //     moveLeft();
  //   },
  //   moveRight: function() {
  //     moveRight();
  //   }
  // }
}
</script>

<style scoped>
@import "../assets/css/audition.css"
</style>
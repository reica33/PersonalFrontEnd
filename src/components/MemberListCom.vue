<template>
  <!-- 본문 -->
  <div id="content">
    <section id="main-section">
      <!-- 본문 상세 첫번째 -->
      <article>
        <!-- 본문 제목 -->
        <div class="article-header">
          <h1 class="article-title">소속배우 목록</h1>
          현재시각:<span id="current" class="display"></span>
        </div>
        <!-- 본문 내용 -->
        <div class="article-body-list">
          <table cellspacing="4">
            <thead>
              <tr>
                <th>순번</th>
                <th>이름</th>
                <th>ID</th>
                <th>전화번호</th>
                <th>이메일</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="member in members" v-bind:key="member.no">
                <td>{{ member.no }}</td>
                <td>{{ member.name }}</td>
                <td>{{ member.id }}</td>
                <td>{{ member.tel }}</td>
                <td>{{ member.email }}</td>
              </tr>
            </tbody>
            <!-- <tfoot><tr><td style="border:none;">표1. 회원 목록</td></tr> </tfoot> -->
          </table>
        </div>
      </article>
      <!-- 본문 상세 두번째 -->
      <article>
        <!-- 본문 제목 -->
        <div class="article-header">
          <h1 class="article-title">소속 배우님들의 취미</h1>
        </div>
        <!-- 본문 내용 -->
        <div class="article-body-hobby">
          <ul v-for="(hobby, index) in hobbys" v-bind:key="index">
            <li>배우명 : {{ hobby.name }} 님♕ </li>
            <li>취미 1: {{ hobby.title1 }} </li>
            <li>취미 2: {{ hobby.title2 }} </li>
            <li>취미 3: {{ hobby.title3 }} </li>
            <br>
          </ul>
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
          <li>
            <router-link to="#"
              ><img
                src="@/assets/img/instagram.png"
                width="50"
                height="50"
                alt="인스타그램"
            /></router-link>
            <router-link to="#"
              ><img
                src="@/assets/img/twitter.png"
                width="50"
                height="50"
                alt="트위터"
            /></router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
import { setCurTime, checkAll } from '../util/commons.js'

export default {
  data() {
    return {
      resId: 0,
      members: [
          {
              no: 1,
              name: "강동원",
              id: "chamchi_kang",
              tel: "010-1111-1111",
              email: "chamchi@naver.com"
          },
          {
              no: 2,
              name: "김남길",
              id: "southroad_kim",
              tel: "010-2222-2222",
              email: "southroad@naver.com"
          },
          {
              no: 3,
              name: "김재욱",
              id: "taegoo_voice",
              tel: "010-3333-3333",
              email: "coffeprince@naver.com"
          }
      ],
      hobbys : [
          {
              name: "강동원",
              title1: "영화 관람",
              title2: "술 궤짝으로 마시기",
              title3: "쇼핑하기"
        },
          {
              name: "김남길",
              title1: "노래부르기",
              title2: "운전하기",
              title3: "회사에 싸인하러 가기"
        },
          {
              name: "김재욱",
              title1: "뮤지컬 관람",
              title2: "밴드 활동",
              title3: "차 마시기"
        }
    ]
    };
  },
  // 화면이 정상적으로 뜰 때 실행되는 이벤트 함수
  mounted() {
    // 이거는 라이프사이클 사용. methods과 v-on 사용도 가능하나 위 내용에 추가해야하다보니 복잡
    // setCurTime();
    this.resId = setCurTime();
  },
  beforeRouteLeave(to, from, next) { // 현재 view로 변환하고 나서 beforeRouteLeave 안 먹히고 있음 강사님도 원인찾는 중
    // 다른 메뉴로 떠나기 전에 setInterval 끄기
    clearInterval(this.resId);
    next();
  },
  methods: {
    checkAll: function () {
      // = checkAll() {checkAll();}
      checkAll();
    },
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin: 0px 20px;
}
th {
  text-align: center;
  border: 1px solid black;
}
tr,
td {
  border: 1px solid black;
  padding: 8px;
}

tr:nth-child(2n) {
  background-color: lightgray;
}
tr:nth-child(2n + 1) {
  background-color: white;
}
th {
  background-color: lightblue;
}
</style>

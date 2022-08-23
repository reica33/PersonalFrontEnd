<template>
  <!-- 본문 -->
        <div id="content">
            <section id="main-section">
                <!-- 본문 상세 첫번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">ABOUT ME</h1>
                    </div>
                    <!-- 본문 내용 -->
                    <table id="YRR">
                        <thead>
                            <tr>
                                <th colspan="2"> 열정으로 무장한 <br>
                                웹개발 풀 스택 개발자 이률리입니다.</th>
                             </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th> 어떤 능력을<br> 가지고 있을까?</th>
                                <td> 01. HTML5, CSS3, JavaScript 기반 프론트/백엔드 홈페이지 제작<br>
                                    02. 고객과의 소통을 통해 니즈를 찾아내는 전문성
                                    03. 멈춰있지 않고 시대에 맞춰 성장해 가는 습득력
                                </td>
                            </tr>
                            <tr>
                                <th>참여<br> 프로젝트</th>
                                <td> 01. RR 프로젝트 <br>
                                    About : 이률리를 소개하는 페이지 제작<br>
                                    기여도 : 개발 80% 기획 100%<br>
                                    <br>
                                    02. DS 프로젝트 <br>
                                    About : 동성직업전문학교 산하 포트폴리오 제작<br>
                                    기여도 : 개발 50% 기획 50%
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"> 감사합니다. 잘 부탁드립니다. </td>
                            </tr>
                        </tfoot>
                    </table>
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
export default {
    
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}

table {
    margin: 10px auto;
	padding: 10px;
    background: navy;
	width: 100%;
	height: 450px;
	border-radius: 5px;
}

table, th, td {
    border: 3px solid red;
}

thead {
    color: black;
    font-size: 15px;
    font-weight: bold; 
}

th {
    color: white;
    font-size: 25px;
    font-weight: bold; 
    padding: 5px;
}

td {
    color: white;
    font-size: 25px;
    padding: 10px;
}

/* section의 aside 우측 css가 적용 안돼서 따로 또 넣음 */
.aside-list {
    padding: 10px 0 30px 0;
}

.aside-list > h3 {
    font-size: 20px;
    font-weight: bold;
}

.aside-list li a {
    margin-left: 10px;
    font-size: 15px;
    color: navy
}
</style>
<template>
<!-- 본문 -->
        <div id="content">
            <section id="main-section">
                <!-- 본문 상세 첫번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">YRR + ENTERTAINMENT</h1>
                        <p class="article-date">2022년 04월 05일</p>
                    </div>
                    <!-- 본문 내용 -->
                    <div class="article-body">
                        <img src="@/assets/img/logo.png" class="logo" alt="로고">
                        <br>
                        <br>
                        <p><b>People I met along the way + Enjoyable story of artists</b> <br>
                            K-콘텐츠가 글로벌화되면서 콘텐츠 포맷과 채널 플랫폼이 급변하며 <br>
                            아티스트의 가치가 콘텐츠가 되는 시대로 바뀌고 있습니다. <br>
                            전 세계가 긍정적으로 공유할 수 있는 아티스트의 가치를 개발하고 콘텐츠로 제작해 <br>
                            상품화까지 할 수 있는 시스템으로 아티스트 매니지먼트뿐만 아니라 <br>
                            아티스트 IP 개발과 제작 관리를 통해 글로벌 매니지먼트 기업으로 성장해갑니다.</p>
                        </div>
                </article>
                <!-- 본문 상세 두번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">ARTIST BRANDING</h1>
                        <p class="article-date">2022년 04월 04일</p>
                    </div>
                    <!-- 본문 내용 -->
                    <div class="article-body">
                        <!--플레이어를 불러올 영역 -->
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3olt07kVk_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" alt="집사부일체 권일용교수님" allowfullscreen></iframe>
                        <br>
                        <br>
                        <p>아티스트의 가치를 콘텐츠로 구현하는 브랜딩을 기획합니다. <br>
                           아티스트의 경쟁적 가치를 선행적이고 능동적으로 제안하고 실행합니다.</p>
                    </div>
                </article>
                <!-- 본문 상세 세번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">ARTIST IP</h1>
                        <p class="article-date">2022년 04월 01일</p>
                    </div>
                    <!-- 본문 내용 -->
                    <div class="article-body">
                        <!--플레이어를 불러올 영역 -->
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z2iwnQ1xPjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" alt="강동원 루카스 광고 모음" allowfullscreen></iframe>
                        <br>
                        <br>
                        <p>아티스트의 브랜딩을 통해 지식 재산권(Intellectual Property Rights)을 개발합니다. <br>
                           아티스트 IP를 개발하고 IP 패키징을 통해 아티스트의 부가 가치를 높입니다.</p>
                    </div>
                </article>
                <!-- 본문 상세 네번째 -->
                <article>
                    <!-- 본문 제목 -->
                    <div class="article-header">
                        <h1 class="article-title">CRISIS MANAGEMENT SYSTEM</h1>
                        <p class="article-date">2022년 03월 30일</p>
                    </div>
                    <!-- 본문 내용 -->
                    <div class="article-body">
                        <img src="@/assets/img/logo.png" class="logo" alt="로고">
                        <br>
                        <br>
                        <p>다양한 이슈에 대응하는 위기관리 시스템을 제공합니다. <br>
                           급변하는 세계 정서와 글로벌 기준에 맞춰 아티스트의 평판과 위기를 관리합니다.</p>
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
                            <router-link to="#"><img src="@/assets/img/instagram.png" width="50" height="50" alt="인스타그램"></router-link>
                            <router-link to="#"><img src="@/assets/img/twitter.png" width="50" height="50" alt="트위터"></router-link>
                        </li>
                        <!-- <li>
                            <a href="https://www.instagram.com"><img src="@/assets/img/instagram.png" width="50" height="50" alt="인스타그램"></a>
                            <a href="https://twitter.com/"><img src="@/assets/img/twitter.png" width="50" height="50" alt="트위터"></a>
                        </li> -->
                    </ul>
                </div>
            </aside>
        </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style>
</style>

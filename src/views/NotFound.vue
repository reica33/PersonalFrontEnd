<template>
  <!-- 주소창에 정상적인 주소가 아닌 다른 주소로 접근했을 때 보여줄 페이지 : ex) http://localhost:8080/asfg 이런 식 -->
  <div id="content">
    <h3> {{ title }} </h3> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      title: "불법적인 접근입니다. Page Not Found!"
    }
  }
}
</script>

<style scoped>
#content {
  margin-top: 200px;
  text-align: center;
}
</style>

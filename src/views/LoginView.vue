<template>
  <div>
    <LoginCom></LoginCom>
  </div>
</template>

<script>
export default {

}
</script>

<script>
// @ is an alias to /src
import LoginCom from "@/components/LoginCom.vue"

export default {
  name: 'LoginView',
  components: {
    LoginCom
  }
}
</script>
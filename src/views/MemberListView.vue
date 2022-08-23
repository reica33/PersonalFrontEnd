<template>
  <div>
    <MemberListCom></MemberListCom>
  </div>
</template>

<script>
// @ is an alias to /src
import MemberListCom from "@/components/MemberListCom.vue"

export default {
  name: 'MemberListView',
  components: {
    MemberListCom
  }
}
</script>
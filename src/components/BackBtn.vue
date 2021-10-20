<template lang="">
  <router-link to="../" class="backBtn">
    <img src="../assets/right-chevron.svg" alt="back" />
    <span class="text">back</span>
  </router-link>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.backBtn {
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    width: 8px;
    transform: rotateY(180deg);
  }
  .text {
    font-size: 12px;
    font-weight: 300;
    margin-left: 4px;
  }
}
</style>

<template>
  <div class="editBtn">
    <router-link
      class="editBtn__link"
      :to="{ name: 'edit', params: { id: id } }"
    >
      <div class="editBtn__text">edit</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "EditBtn",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.editBtn {
  &__link {
    text-decoration: none;
  }
  &__text {
    font-weight: 700;
    margin-top: 10px;
    text-decoration: none;
    color: #000;
    display: block;
    width: fit-content;
    margin-left: auto;
  }
}
</style>

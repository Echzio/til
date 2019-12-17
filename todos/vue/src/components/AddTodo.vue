<template>
  <div :style="{marginTop: '30px'}" class="create-todo">
    <div>
      <label for="name">введите имя</label>
      <input ref="name" id="name" type="text" />
    </div>
    <div>
      <label for="desc">введите описание</label>
      <input ref="desc" id="desc" type="text" />
    </div>
    <button @click="sendTodo" type="button">Добавить!</button>
  </div>
</template>

<script>
export default {
  props: ["addTodo"],
  name: "addTodo",
  methods: {
    sendTodo() {
      const alert =
        Object.values(this.$refs).filter(input => input.value === "") || [];
      if (alert.length === 0) {
        this.addTodo(this.$refs.name.value, this.$refs.desc.value);
      } else {
        window.alert("ты что то попутал");
      }
    }
  }
};
</script>
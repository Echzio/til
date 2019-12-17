<template>
  <div class="main">
    <div class="todos">
      <template v-for="todo in this.todos">
        <div v-if="todo.active" :key="todo.id" class="todos__todo">
          <p>Задание номер {{todo.id}}</p>
          <h1>{{todo.name}}</h1>
          <p>{{todo.description}}</p>
          <button @click="removeTodo(todo.id)" type="button">готово!</button>
        </div>
      </template>
    </div>
    <button @click="clearTodoActivity">Заново показать все пункты</button>
    <addTodo :addTodo="addTodo" />
  </div>
</template>

<script>
import addTodo from "@/components/AddTodo.vue";

export default {
  name: "mainPage",
  components: {
    addTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: "Купить хлеб",
          active: true,
          description: "Срочно купить хлеб ваще нету дома кек сгорел"
        },
        {
          id: 2,
          name: "Сходить в баню",
          active: true,
          description: "Срочно сходить в баню"
        }
      ]
    };
  },
  methods: {
    removeTodo(id) {
      const currentTodo = this.todos.find(item => item.id === id);
      const currentIndex = this.todos.indexOf(currentTodo);
      this.todos[currentIndex].active = false;
    },
    clearTodoActivity() {
      this.todos = this.todos.map(item => ({ ...item, active: true }));
    },
    addTodo(name, desc) {
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length + 1,
          name: name,
          active: true,
          description: desc
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.todos {
  &__todo {
    background-color: #dedede;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #a5a5a5;
    }
  }
}
</style>
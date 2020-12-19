<template>
  <TodoItem v-for="todo in todos" :key="todo" v-bind="todo" />
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem";

export default defineComponent({
  components: { TodoItem },
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos);
    return { todos };
  }
});
</script>

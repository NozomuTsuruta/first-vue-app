<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import Form from "./components/Form.vue";
import TodoList from "./components/TodoList.vue";
import { ActionTypes } from "./store/actions";

export default defineComponent({
  components: { TodoList, Form },
  setup() {
    const store = useStore();

    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.getTodos));

    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);

    return { loading, completedCount, totalCount };
  }
});
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="text-3xl text-center p-2 font-bold">
      First Vue App (Todo)
    </h1>

    <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <Form />
      <TodoList />
    </div>
  </div>
</template>

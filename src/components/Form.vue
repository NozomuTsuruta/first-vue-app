<template>
  <form class="my-4" @submit.prevent="createTodo">
    <div class="mx-auto flex items-center bg-white p-2:rounded-md shadow-md">
      <div class="flex-grow m-1 ml-3">
        <input
          type="text"
          v-model="text"
          class="w-full focus:outline-none"
          placeholder="What task do you need to complete"
        />
      </div>
      <div class="flex-shrink-0">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { MutationType } from "@/store/mutations";
import { ITodo } from "@/store/state";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();

    const createTodo = () => {
      if (text.value === "") return;

      const todo: ITodo = {
        id: Date.now(),
        text: text.value,
        completed: false
      };
      store.commit(MutationType.createTodo, todo);
      text.value = "";
    };
    return { createTodo, text };
  }
});
</script>

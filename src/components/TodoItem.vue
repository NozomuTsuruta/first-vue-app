<template>
  <div
    class="flex items-center bg-white rounded-md shadow-md m-2 p-1 border-4"
    :class="completed ? 'border-green-500' : 'border-white'"
  >
    <div class="flex-shrink-0 m-1 ml-3 align-middle">
      <input type="text" :checked="completed" @change="toggleCompletion()" />
    </div>
    <div class="ml-6">
      <h4 class="text-xl text-gray-900 leading-tight">{{ text }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { MutationType } from "@/store/mutations";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

    const toggleCompletion = () => {
      store.commit(MutationType.completeTodo, {
        id: props.id,
        completed: !props.completed
      });
    };
    return { toggleCompletion };
  }
});
</script>

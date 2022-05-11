<template>
  <li>
    <h2>{{ id }}</h2>
    <button @click="toggleCourseDetail">show detail</button>
    <button @click="toggleCurrent">修改本地端</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
      <li>目前是否開班:{{ current }}</li>
      <li>本地端的狀態:{{ isCurrent }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    duration: {
      type: Number,
      required: true,
      validator: function (v) {
        return v > 7;
      },
    },
    current: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      detailsVisible: true,
      isCurrent: this.current,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent;
    },
  },
};
</script>
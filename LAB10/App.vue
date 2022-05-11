<template>
  <div>
    <h1>hello template from vue!</h1>
    <ul>
      <course-intro
        v-for="c in courses"
        :key="c.id"
        :id="c.id"
        :name="c.name"
        :duration="c.duration"
        :current="c.current"
      ></course-intro>
    </ul>
  </div>
</template>
<script>
//import CourseIntro from './CourseIntro.vue';
export default {
  //  components: { CourseIntro },
  data() {
    return {
      courses: [
        {
          id: "poop",
          name: "python and object oriented programming",
          duration: 35,
          current: true,
        },
        {
          id: "BDPY",
          name: "python and big data",
          duration: 35,
          current: false,
        },
      ],
    };
  },
};
</script>
<style>
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 4px 8px rgba(0, 128, 128, 0.26);
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  width: 50%;
  max-width: 40rem;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #012c20;
  background-color: #c0ffee;
  color: black;
}
</style>
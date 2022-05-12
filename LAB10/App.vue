<template>
  <div>
    <h1>hello template from vue!</h1>
    <new-course @add-course="addCourse" />
    <ul>
      <course-intro
        v-for="c in courses"
        :key="c.id"
        :id="c.id"
        :name="c.name"
        :duration="c.duration"
        :current="c.current"
        @toggle-current="toggleCurrentStatusInParent"
        @delete-current="deleteCourse"
      ></course-intro>
    </ul>
  </div>
</template>
<script>
//import CourseIntro from './CourseIntro.vue';
import NewCourse from "./components/NewCourse.vue";
export default {
  //  components: { CourseIntro },
  components: { NewCourse },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    toggleCurrentStatusInParent(id) {
      alert(`toggle fired with id=${id}`);
      const course = this.courses.find((c) => c.id === id);
      course.current = !course.current;
      console.log(`now, ${id} has course status ${course.current}`);
    },
    addCourse(id, name, duration) {
      const newCourseContent = {
        id: id,
        name: name,
        duration: duration,
        current: false,
      };
      this.courses.push(newCourseContent);
    },
    deleteCourse(id) {
      this.courses = this.courses.filter((c) => c.id !== id);
    },
  },
};
</script>
<style>
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
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
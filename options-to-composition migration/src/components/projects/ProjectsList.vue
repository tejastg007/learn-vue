<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import { ref, toRef, computed, defineProps, watch } from 'vue';

let enteredSearchTerm = ref('');
let activeSearchTerm = ref('');

const props = defineProps(['user']);
let userRef = toRef(props, 'user');
const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((project) => {
      return project.title.includes(activeSearchTerm.value);
    });
  }
  return props.user.projects;
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

watch(enteredSearchTerm, (newVal) => {
  setTimeout(() => {
    if (newVal === enteredSearchTerm.value) {
      activeSearchTerm.value = newVal;
    }
  }, 300);
});

watch(userRef, () => {
  console.log('user changed');
  enteredSearchTerm.value = '';
});

// export default {
//   components: {
//     ProjectItem,
//   },
//   props: ['user'],
//   data() {
//     return {
//       enteredSearchTerm: '',
//       activeSearchTerm: '',
//     };
//   },
//   computed: {
//     hasProjects() {
//       return this.user.projects && this.availableProjects.length > 0;
//     },
//     availableProjects() {
//       if (this.activeSearchTerm) {
//         return this.user.projects.filter((prj) =>
//           prj.title.includes(this.activeSearchTerm)
//         );
//       }
//       return this.user.projects;
//     },
//   },
//   methods: {
//     updateSearch(val) {
//       this.enteredSearchTerm = val;
//     },
//   },
//   watch: {
//     enteredSearchTerm(val) {
//       setTimeout(() => {
//         if (val === this.enteredSearchTerm) {
//           this.activeSearchTerm = val;
//         }
//       }, 300);
//     },
//     user() {
//       this.enteredSearchTerm = '';
//     },
//   },
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

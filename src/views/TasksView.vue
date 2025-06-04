<template>
  <div class="container">
    <h2>Список задач</h2>
    <div class="input-group">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Новая задача..." />
      <button @click="addTask">Добавить</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ done: task.done }">
        <span @click="toggleDone(index)">
          <router-link :to="`/details/${index}`">{{ task.text }}</router-link>
        </span>
        <button @click="removeTask(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const newTask = ref('')
const tasks = ref([])

onMounted(() => {
  const saved = localStorage.getItem('tasks')
  tasks.value = saved ? JSON.parse(saved) : []
})

watch(tasks, () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}, { deep: true })

function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value.trim(), done: false })
    newTask.value = ''
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}

function toggleDone(index) {
  tasks.value[index].done = !tasks.value[index].done
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}
.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px 12px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}
li.done span {
  text-decoration: line-through;
  color: gray;
}
</style>

<template>
  <div class="container">
    <h1>Список дел</h1>
    <div class="input-group">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Новая задача"
      />
      <button @click="addTask">Добавить</button>
    </div>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ done: task.done }"
      >
        <span @click="toggleDone(index)">{{ task.text }}</span>
        <button class="delete" @click="removeTask(index)">✕</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

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

function toggleDone(index) {
  tasks.value[index].done = !tasks.value[index].done
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
}
.container {
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  margin: 60px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}
.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  background: #0026ff;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background: #0f13cf;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
li.done span {
  text-decoration: line-through;
  color: #888;
}
li span {
  flex: 1;
  cursor: pointer;
}
button.delete {
  background: #e74c3c;
}
button.delete:hover {
  background: #c0392b;
}
</style>

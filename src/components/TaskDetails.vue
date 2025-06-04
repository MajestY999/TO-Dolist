<template>
  <div class="details" v-if="task">
    <h2>Задача #{{ index + 1 }}</h2>
    <p><strong>Текст:</strong> {{ task.text }}</p>
    <p><strong>Выполнено:</strong> {{ task.done ? 'Да' : 'Нет' }}</p>
    <router-link to="/tasks">← Назад</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const index = parseInt(route.params.id)
const task = ref(null)

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('tasks') || '[]')
  task.value = saved[index]
})
</script>

<style scoped>
.details {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
}
</style>

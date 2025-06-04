<template>
  <div class="home">
    <h1>Добро пожаловать в To-Do List</h1>
    <router-link to="/tasks">
      <button>Перейти к задачам</button>
    </router-link>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
button {
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #0026ff;
  color: white;
  border: none;
  border-radius: 6px;
}
</style>

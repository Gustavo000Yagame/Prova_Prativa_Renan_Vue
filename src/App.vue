<script setup lang="ts"></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container">
        <span class="navbar-brand fw-bold">✂️ BarberApp</span>
      </div>
    </nav>

    <!-- O RouterView é responsável por renderizar a tela correspondente à rota atual -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { usersStore } from "../stores/users";

const { favorites } = storeToRefs(usersStore());
</script>

<template>
  <div class="flex flex-col items-center p-5 gap-3 max-w-lg m-auto">
    <h1 class="text-blue-500 text-7xl font-bold">Favorites</h1>
    <router-link to="/" class="text-yellow-500 text-xl px-2 py-1 rounded-sm"
      >Users</router-link
    >

    <div v-for="user in favorites" :key="user" class="w-full">
      <div class="flex flex-row justify-between">
        <p>{{ user.name }}</p>
        <p>{{ user.age }}</p>
      </div>
    </div>
  </div>
</template>

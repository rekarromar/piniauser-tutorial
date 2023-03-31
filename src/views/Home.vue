<script setup>
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { usersStore } from "../stores/users";

const { addUser, deleteUser, favoriteUser } = usersStore();

const { users } = storeToRefs(usersStore());

const name = ref(null);
const age = ref(null);
</script>

<template>
  <div
    class="flex flex-col gap-3 items-center justify-center m-auto max-w-lg p-5"
  >
    <h1 class="text-blue-500 text-7xl font-bold">Users</h1>

    <router-link
      to="/favorites"
      class="text-yellow-500 text-xl px-2 py-1 rounded-sm"
      >Favorites</router-link
    >

    <div class="flex flex-col gap-y-1 w-full">
      <input
        type="text"
        placeholder="Name"
        class="border p-1 rounded-sm"
        v-model="name"
      />
      <input
        type="text"
        placeholder="Age"
        class="border p-1 rounded-sm"
        v-model="age"
      />
      <button
        class="bg-blue-500 text-white p-1 rounded-sm"
        @click="addUser(name, age)"
      >
        Add New User
      </button>
    </div>

    <div v-for="(user, index) in users" :key="user" class="w-full">
      <div class="flex flex-row justify-between">
        <p>{{ user.name }}</p>
        <p>{{ user.age }}</p>
        <button
          @click="deleteUser(index)"
          class="bg-red-600 text-white px-3 py-1"
        >
          Delete
        </button>
        <button
          @click="favoriteUser(user)"
          class="bg-yellow-600 text-white px-3 py-1"
        >
          Favorite
        </button>
      </div>
    </div>
  </div>
</template>

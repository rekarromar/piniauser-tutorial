import { defineStore } from "pinia";

export const usersStore = defineStore("users", {
  state: () => {
    return {
      users: [
        { name: "Rekar", age: 20 },
        { name: "Omar", age: 20 },
        { name: "Hamasalih", age: 20 },
      ],
      favorites: [],
    };
  },
  actions: {
    addUser(name, age) {
      this.users.push({ name: name, age: age });
    },

    deleteUser(index) {
      this.users.splice(index, 1);
    },

    favoriteUser(user) {
      this.favorites.push(user);
    },
  },
});

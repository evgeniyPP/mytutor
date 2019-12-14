import { writable } from 'svelte/store';

export const form = writable({
  isStudent: true,
  name: null,
  surname: null,
  age: null,
  email: null,
  phone: null,
  comment: null,
  langs: [
    {
      id: 0,
      name: 'Английский',
      level: 0
    }
  ]
});

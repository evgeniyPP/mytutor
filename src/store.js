import { writable } from 'svelte/store';

export const form = writable({
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

export const isStudent = writable(true);

export let page = writable(1);

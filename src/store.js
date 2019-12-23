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

export const regDone = writable(false);

export const tutors = writable([]);

export const langLevelText = [
  'Любой уровень',
  'Начинающие',
  'Продолжающие',
  'Продвинутые',
  'Начинающие и Продолжающие',
  'Продолжающие и Продвинутые'
];

export const validRegexs = {
  name: /^\D+$/,
  surname: /^\D+$/,
  age: /^\d{1,2}$/,
  email: /^\S+@\S+\.\w{2,4}$/,
  phone: /^\+*\d{11}$/
};

export const validation = writable({
  name: false,
  surname: false,
  age: false,
  email: false,
  phone: false
});

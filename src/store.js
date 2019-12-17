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

export const regDone = writable(true); // должно быть false

export const tutors = writable([
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, voluptatem consectetur debitis voluptas modi officiis facilis, maiores quibusdam necessitatibus alias illo quos ipsam dolorem. Corrupti sunt doloribus laboriosam quae aliquam.',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  },
  {
    name: 'Влад',
    surname: 'Кибардин',
    age: 22,
    email: 'mariokibardini@gmail.com',
    phone: '89876543210',
    comment: 'Люблю футбол и кресты',
    langs: [
      {
        id: 0,
        name: 'Арабский',
        level: 1
      },
      {
        id: 1,
        name: 'Английский',
        level: 4
      },
      {
        id: 2,
        name: 'Французский',
        level: 1
      }
    ]
  }
]);

export const langLevelText = [
  'Любой уровень',
  'Начинающие',
  'Продолжающие',
  'Продвинутые',
  'Начинающие и Продолжающие',
  'Продолжающие и Продвинутые'
];

<script>
  import { createEventDispatcher } from "svelte";
  import { form } from "../../store.js";
  const dispatch = createEventDispatcher();
</script>

<style>
  h4 {
    margin-bottom: 0;
  }
  .name {
    margin-top: 1em;
  }
  .age {
    display: flex;
    align-items: center;
  }
  .age__title {
    font-weight: bold;
  }
  input[type="number"] {
    width: 80px;
    margin-top: 0.5em;
    margin-left: 1em;
  }
  .visit-purpose__title {
    margin: 0;
  }
  .visit-purpose__item {
    margin: 0.5em 0;
  }
  .visit-purpose__student {
    margin-top: 0.6em;
  }
  .visit-purpose input {
    margin-right: 0.5em;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 30%;
    border-radius: 5px;
    margin-top: 2em;
    margin-left: 1em;
    margin-right: 1em;
  }
  .btn__next:hover,
  .btn__next:focus {
    background: #f48a19;
    color: #f4f4f4;
    font-weight: bold;
  }
  @media (max-width: 880px) {
    .btns {
      flex-direction: column;
    }
    .btn {
      width: 80%;
      margin: 1.5em auto;
    }
    .btn__back {
      display: none;
    }
  }
</style>

<h4>Пожалуйста, введите свои данные:</h4>
<input class="name" type="text" placeholder="Имя" bind:value={$form.name} />
<input type="text" placeholder="Фамилия" bind:value={$form.surname} />
<input type="email" placeholder="E-mail" bind:value={$form.email} />
<input type="tel" placeholder="Телефон" bind:value={$form.phone} />

<div class="age">
  <label class="age__title">
    Сколько Вам лет:
    <input type="number" bind:value={$form.age} min="4" max="99" />
  </label>
</div>

<label class="visit-purpose">
  <h4 class="visit-purpose__title">Цель Вашего посещения:</h4>
  <label class="visit-purpose__student">
    <input
      class="visit-purpose__item"
      type="radio"
      bind:group={$form.isStudent}
      value={true} />
    Я студент. Хочу найти репетитора
  </label>
  <label class="visit-purpose__tutor">
    <input
      class="visit-purpose__item"
      type="radio"
      bind:group={$form.isStudent}
      value={false} />
    Я преподаватель. Хочу найти студентов
  </label>
</label>

<div class="btns">
  <input class="btn btn__back" type="button" value="Назад" disabled />
  <input
    class="btn btn__next"
    type="button"
    value="Далее"
    on:click={() => dispatch('next')} />
</div>

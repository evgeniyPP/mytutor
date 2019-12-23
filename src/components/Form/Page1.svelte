<script>
  import { createEventDispatcher } from "svelte";
  import { form, isStudent, validRegexs, validation } from "../../store.js";
  const dispatch = createEventDispatcher();

  const validate = input => {
    const test = input !== null && validRegexs[input].test($form[input]);
    $validation[input] = test;
  };

  const onNext = () => {
    const invalid = [];
    for (let input in $validation) {
      const el = document.getElementById(input);
      if (!$validation[input]) {
        el.style.border = "1px solid #975057";
        el.style.background = "#F8D7DA";
        el.addEventListener("click", () => {
          el.style.border = "1px solid #ccc";
          el.style.background = "inherit";
        });
        invalid.push(input);
      } else {
        el.style.border = "1px solid #28A745";
        el.style.background = "#C3E6CB";
      }
    }
    if (!invalid.length) {
      dispatch("next");
    } else {
      const alert = document.getElementById("alert");
      alert.style.display = "block";
    }
  };
</script>

<style>
  input {
    box-sizing: border-box;
  }
  h4 {
    margin-bottom: 0;
  }
  #name {
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
    transition: 0.2s all;
  }
  .btn__next:hover,
  .btn__next:focus {
    background: #f48a19;
    color: #f4f4f4;
    font-weight: bold;
  }
  #alert {
    display: none;
    padding: 0.75rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
    background: #f8d7da;
    color: #975057;
    font-weight: bold;
    text-align: center;
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

<div id="alert">Пожалуйста, правильно заполните все указанные поля</div>

<h4>Пожалуйста, введите свои данные:</h4>
<input
  id="name"
  type="text"
  placeholder="Имя"
  bind:value={$form.name}
  on:input={() => validate('name')} />
<input
  id="surname"
  type="text"
  placeholder="Фамилия"
  bind:value={$form.surname}
  on:input={() => validate('surname')} />
<input
  id="email"
  type="email"
  placeholder="E-mail"
  bind:value={$form.email}
  on:input={() => validate('email')} />
<input
  id="phone"
  type="tel"
  placeholder="Телефон"
  bind:value={$form.phone}
  on:input={() => validate('phone')} />

<div class="age">
  <label class="age__title">
    Сколько Вам лет:
    <input
      id="age"
      type="number"
      bind:value={$form.age}
      min="4"
      max="99"
      on:input={() => validate('age')} />
  </label>
</div>

<label class="visit-purpose">
  <h4 class="visit-purpose__title">Цель Вашего посещения:</h4>
  <label class="visit-purpose__student">
    <input
      class="visit-purpose__item"
      type="radio"
      bind:group={$isStudent}
      value={true} />
    Я студент. Хочу найти репетитора
  </label>
  <label class="visit-purpose__tutor">
    <input
      class="visit-purpose__item"
      type="radio"
      bind:group={$isStudent}
      value={false} />
    Я преподаватель. Хочу найти студентов
  </label>
</label>

<div class="btns">
  <input class="btn btn__back" type="button" value="Назад" disabled />
  <input class="btn btn__next" type="button" value="Далее" on:click={onNext} />
</div>

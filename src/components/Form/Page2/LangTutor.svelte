<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { form, langLevelText } from "../../../store.js";
  export let lang;
  export let level;
  export let id;
  const dispatch = createEventDispatcher();

  let selectedLang;
  const langLevel = ["A0-C2", "A0-A2", "B1-B2", "C1-C2", "A0-B2", "B1-C2"];
  const langDesc = [
    "На все руки мастер",
    "Поставить базу",
    "Учить тех, кто уже что-то знает",
    "Помочь достичь совершенства",
    "С алфавита до свободного общения",
    "Новичкам здесь не место"
  ];

  let langs = [
    { id: 1, lang: "Английский" },
    { id: 2, lang: "Немецкий" },
    { id: 3, lang: "Французский" },
    { id: 4, lang: "Испанский" },
    { id: 5, lang: "Арабский" },
    { id: 6, lang: "Другой" }
  ];
</script>

<style>
  .wrapper {
    position: relative;
    border: 1px solid #757575;
    padding: 1em;
    margin-bottom: 0.75em;
  }
  .lang {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .range {
    margin-left: 1em;
  }
  .range__value {
    display: block;
    text-align: center;
  }
  .lang__label {
    margin-left: 1em;
    margin-top: -0.3em;
  }
  .range__show {
    font-weight: bold;
  }
  .lang-desc {
    display: block;
    font-style: italic;
  }
  .fa-trash-alt {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  @media (max-width: 880px) {
    .wrapper {
      border-color: #fff;
    }
  }
  @media (max-width: 705px) {
    .lang {
      flex-direction: column;
    }
    .lang input {
      width: 100%;
    }
  }
  @media (max-width: 380px) {
    .range {
      display: block;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
  }
</style>

<div
  class="wrapper"
  transition:slide|local={{ duration: 700, easing: quintOut }}>
  <div class="lang">
    <select
      bind:value={selectedLang}
      on:change={() => (lang = selectedLang.lang)}>
      {#each langs as item}
        <option value={item}>{item.lang}</option>
      {/each}
    </select>
    <label class="lang__label">
      Ваш уровень языка:
      <input class="range" type="range" min="0" max="5" bind:value={level} />
    </label>
  </div>
  <div class="range__value">
    <span class="range__show">{langLevel[level]}</span>
    <span>– {langLevelText[level]}</span>
    <span class="lang-desc">"{langDesc[level]}"</span>
  </div>
  {#if $form.langs.length > 1}
    <i class="fas fa-trash-alt" on:click={() => dispatch('delete', id)} />
  {/if}
</div>

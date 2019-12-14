<script>
  import { createEventDispatcher } from "svelte";
  import { form } from "../../../store.js";
  import LangStudent from "./LangStudent.svelte";
  import LangTutor from "./LangTutor.svelte";
  const dispatch = createEventDispatcher();
  let langIndex = 0;

  const addLang = () => {
    if ($form.langs.length < 3) {
      langIndex++;
      $form.langs = [
        ...$form.langs,
        {
          id: langIndex,
          name: "Английский",
          level: 0
        }
      ];
    }
  };

  const deleteLang = e => {
    const langs = $form.langs;
    const id = e.detail;
    const index = langs.indexOf(langs.find(lang => lang.id === id));
    langs.splice(index, 1);
    $form = $form;
  };
</script>

<style>
  .add-lang {
    margin-top: 1em;
    margin-bottom: 0.5em;
    display: block;
    text-align: center;
  }
  .fa-plus {
    display: block;
    width: 20px;
    font-size: 1.5rem;
    color: #f47e00;
    margin: 0 auto;
    margin-top: 0.25em;
  }
  #add-lang {
    opacity: 0;
    transition: 0.7s all;
    color: #757575;
  }

  .fa-plus--disabled {
    color: #757575;
  }

  .fa-plus:hover ~ #add-lang,
  .fa-plus:focus ~ #add-lang {
    opacity: 1;
  }
  .btns {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 30%;
    border-radius: 5px;
    margin-left: 1em;
    margin-right: 1em;
    transition: 0.2s all;
  }
  .btn:hover,
  .btn:focus {
    background: #f48a19;
    color: #f4f4f4;
    font-weight: bold;
  }
  @media (max-width: 880px) {
    #add-lang {
      color: #fff;
    }
    .btns {
      flex-direction: column;
    }
    .btn {
      width: 80%;
      margin: 0 auto;
    }
    .btn__next {
      margin-top: 0.5em;
      margin-bottom: 1em;
    }
  }
</style>

{#if $form.isStudent}
  <div>
    <h4>Какой(-ие) язык(-и) вы хотите учить?</h4>
    {#each $form.langs as lang (lang.id)}
      <LangStudent
        bind:lang={lang.name}
        bind:level={lang.level}
        on:delete={deleteLang}
        id={lang.id} />
    {/each}
  </div>
{:else}
  <div>
    <h4>Какой(-ие) язык(-и) вы хотите преподавать?</h4>
    {#each $form.langs as lang (lang.id)}
      <LangTutor
        bind:lang={lang.name}
        bind:level={lang.level}
        on:delete={deleteLang}
        id={lang.id} />
    {/each}
  </div>
{/if}

<div class="add-lang">
  <i
    class="fas fa-plus"
    class:fa-plus--disabled={$form.langs.length > 2}
    tabindex="0"
    on:click={addLang} />
  {#if $form.langs.length < 3}
    <span id="add-lang">Добавить язык</span>
  {:else}
    <span id="add-lang">Не более трех языков</span>
  {/if}
</div>

<div class="btns">
  <input
    class="btn btn__back"
    type="button"
    value="Назад"
    on:click={() => dispatch('back')} />
  <input
    class="btn btn__next"
    type="button"
    value="Далее"
    on:click={() => dispatch('next')} />
</div>

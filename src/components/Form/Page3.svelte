<script>
  import { createEventDispatcher } from "svelte";
  import { form, isStudent } from "../../store.js";
  const dispatch = createEventDispatcher();
</script>

<style>
  textarea {
    margin-bottom: 2em;
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
    .btns {
      flex-direction: column;
    }
    .btn {
      width: 80%;
      margin: 0em auto;
    }
    .btn__submit {
      margin-top: 0.5em;
      margin-bottom: 1em;
    }
  }
</style>

{#if $isStudent}
  <h4>Передать что-нибудь репетитору?</h4>
{:else}
  <h4>Передать что-нибудь студентам?</h4>
{/if}
<textarea
  cols="30"
  rows="10"
  placeholder="Ваш комментарий"
  bind:value={$form.comment} />

<div class="btns">
  <input
    class="btn btn__back"
    type="button"
    value="Назад"
    on:click={() => dispatch('back')} />
  <input
    class="btn btn__submit"
    type="button"
    value="Отправить"
    on:click={() => dispatch('submit')} />
</div>

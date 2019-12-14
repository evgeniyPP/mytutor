<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<style>
  .btn {
    width: 55%;
    border-radius: 5px;
    margin: 5em auto;
    transition: 0.2s all;
  }
  .btn:hover,
  .btn:focus {
    background: #f48a19;
    color: #f4f4f4;
    font-weight: bold;
  }
  @media (max-width: 880px) {
    .btn {
      width: 80%;
    }
  }
</style>

<h3>Вы успешно зарегистрировались!</h3>
<p>Спасибо, мы с Вами свяжемся.</p>

<input
  class="btn btn__reset"
  type="button"
  value="Вернуться на главную"
  on:click={() => dispatch('reset')} />

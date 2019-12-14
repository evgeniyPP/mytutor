<script>
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2/Page2.svelte";
  import Page3 from "./Page3.svelte";
  import Page4 from "./Page4.svelte";
  import { form, page } from "../../store.js";

  const nextPage = () => $page++;
  const backPage = () => $page--;

  const onSubmit = () => {
    nextPage();
    console.log($form);
  };
  const onReset = () => {
    $form = {
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
          name: "Английский",
          level: 0
        }
      ]
    };
    $page = 1;
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>

<form>
  {#if $page === 1}
    <Page1 on:next={nextPage} />
  {:else if $page === 2}
    <Page2 on:back={backPage} on:next={nextPage} />
  {:else if $page === 3}
    <Page3 on:back={backPage} on:submit={onSubmit} />
  {:else}
    <Page4 on:reset={onReset} />
  {/if}
</form>

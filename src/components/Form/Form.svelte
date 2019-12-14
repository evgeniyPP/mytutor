<script>
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2/Page2.svelte";
  import Page3 from "./Page3.svelte";

  let page = 1;

  let form = {
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
  const onSubmit = () => {
    console.log(form);
    page = 1;
  };
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>

<form>
  {#if page === 1}
    <Page1 {form} on:next={() => page++} />
  {:else if page === 2}
    <Page2 {form} on:back={() => page--} on:next={() => page++} />
  {:else}
    <Page3 {form} on:back={() => page--} on:submit={onSubmit} />
  {/if}

</form>

<script>
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2/Page2.svelte";
  import Page3 from "./Page3.svelte";
  import { form } from "../../store.js";

  let page = 1;

  const onSubmit = () => {
    console.log($form);
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
    <Page1 on:next={() => page++} />
  {:else if page === 2}
    <Page2 on:back={() => page--} on:next={() => page++} />
  {:else}
    <Page3 on:back={() => page--} on:submit={onSubmit} />
  {/if}
</form>

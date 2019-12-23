<script>
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2/Page2.svelte";
  import Page3 from "./Page3.svelte";
  import Page4 from "./Page4.svelte";
  import { form, isStudent, page, regDone, tutors } from "../../store.js";
  import request from "../../request.js";

  const nextPage = () => $page++;
  const backPage = () => $page--;

  const onSubmit = async () => {
    try {
      const response = await request($isStudent, $form);
      if ($isStudent) {
        $tutors = response;
        $regDone = true;
      } else {
        nextPage();
      }
    } catch (e) {
      alert("Что-то пошло не так!");
    }
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
    <Page4 />
  {/if}
</form>

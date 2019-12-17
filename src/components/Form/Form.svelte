<script>
  import axios from "axios";
  import Page1 from "./Page1.svelte";
  import Page2 from "./Page2/Page2.svelte";
  import Page3 from "./Page3.svelte";
  import Page4 from "./Page4.svelte";
  import { form, isStudent, page, regDone, tutors } from "../../store.js";

  const nextPage = () => $page++;
  const backPage = () => $page--;

  const onSubmit = async () => {
    let response;
    if ($isStudent) {
      response = await axios.post(
        "https://my-tutor-server.herokuapp.com/students/add",
        $form
      );
      const tutorsResponse = await axios.get(
        "https://my-tutor-server.herokuapp.com/tutors/"
      );
      $tutors = tutorsResponse.data;
      $regDone = true;
    } else {
      response = await axios.post(
        "https://my-tutor-server.herokuapp.com/tutors/add",
        $form
      );
    }
    if (response.status === 200 && !$isStudent) {
      nextPage();
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

<script>
  import Registration from "./components/Registration.svelte";
  import Tutors from "./components/Tutors.svelte";
  import { regDone } from "./store.js";
</script>

<style>
  :global(body) {
    padding: 0;
    background: #fff;
  }
</style>

{#if !$regDone}
  <Registration />
{:else}
  <Tutors />
{/if}

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
  @media (max-width: 880px) {
    :global(body) {
      background: #000;
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ),
        url("assets/left1.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 80%;
    }
  }
</style>

{#if !$regDone}
  <Registration />
{:else}
  <Tutors />
{/if}

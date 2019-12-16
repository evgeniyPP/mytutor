<script>
  import { fade } from "svelte/transition";
  import Header from "./components/Header.svelte";
  import Form from "./components/Form/Form.svelte";
  import { page } from "./store.js";
</script>

<style>
  :global(body) {
    padding: 0;
    background: #fff;
  }
  #app {
    display: flex;
    min-height: 80vh;
    max-height: 100vh;
    overflow: auto;
    position: relative;
  }
  .right {
    width: 40%;
    padding-left: 50%;
    margin: 2.5em auto;
  }

  .left {
    width: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
    height: 100vh;
    position: fixed;
  }

  .left1 {
    background-image: url("assets/left1.png");
  }

  .left2 {
    background-image: url("assets/left2.png");
  }

  .left3 {
    background-image: url("assets/left3.png");
    background-position: 50% 100%;
  }

  .left4 {
    background-image: url("assets/left4.png");
    background-position: 50% 30%;
  }

  @media (max-width: 1024px) {
    .right {
      width: 45%;
    }
  }
  @media (max-width: 880px) {
    #app {
      overflow: auto;
      background: 0;
    }

    .right {
      width: 75%;
      padding-left: 0;
      color: #fff;
      margin-top: 1em;
      margin-bottom: 1em;
    }

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
    .left {
      width: 0;
      background: 0;
    }
  }
  @media (max-width: 500px) {
    .right {
      width: 90%;
    }
  }
</style>

<div id="app">
  {#if $page === 1}
    <div class="left left1" transition:fade />
  {:else if $page === 2}
    <div class="left left2" transition:fade />
  {:else if $page === 3}
    <div class="left left3" transition:fade />
  {:else}
    <div class="left left4" transition:fade />
  {/if}
  <div class="right" transition:fade>
    <Header />
    <Form />
  </div>
</div>

<script>
  import Header from "./components/Header.svelte";
  import Form from "./components/Form/Form.svelte";
</script>

<style>
  :global(body) {
    padding: 0;
  }
  #app {
    display: flex;
    height: 100vh;
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
    background-image: url("assets/back.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 80%;
    height: 100vh;
    position: fixed;
  }

  @media (max-width: 1024px) {
    .right {
      width: 45%;
    }
  }
  @media (max-width: 880px) {
    #app {
      overflow: auto;
    }
    .right {
      width: 75%;
      padding-left: 0;
      color: #fff;
      margin-top: 1em;
      margin-bottom: 1em;
    }
    :global(body) {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ),
        url("assets/back.png");
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
  <div class="left" />
  <div class="right">
    <Header />
    <Form />
  </div>
</div>

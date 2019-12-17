<script>
  import Header from "./Header.svelte";
  import { form, tutors, langLevelText } from "../store.js";

  const studentLangs = $form.langs.map(lang => lang.name);
  const suitableTutors = $tutors.filter(tutor => {
    const tutorLangs = tutor.langs.map(lang => lang.name);
    for (let lang of tutorLangs) {
      if (studentLangs.includes(lang)) {
        return true;
      }
    }
  });
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .wrapper {
    background: #e2e1e0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    margin: 1em auto;
    margin-top: 0;
    text-align: center;
    font-size: 1.25rem;
    width: 100%;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 1.5em 0;
  }
  .selected-langs {
    width: 70%;
    margin: 0 auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 1.5em 2em;
    font-weight: normal;
  }
  .selected-langs > span {
    font-weight: bold;
  }
  .tutor-list {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .tutor {
    width: 400px;
    background: #fff;
    border-radius: 2px;
    margin: 1em;
    padding: 1em 2em 2em 2em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .tutor__title {
    font-weight: bold;
  }
  .tutor__avatar {
    display: block;
    max-width: 150px;
    margin: 0 auto;
  }
  .tutor__name {
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
  }
  .langs {
    min-height: 150px;
    border: 1px solid #757575;
    border-radius: 5px;
    padding: 0.5em;
    padding-bottom: 1.5em;
  }
  .langs__title {
    margin: 0;
    margin-bottom: 0.5em;
    font-weight: bold;
  }
  .lang {
    margin: 0;
  }
</style>

<div class="wrapper">
  <div class="header">
    <Header />
  </div>
  <h3 class="selected-langs">
    {$form.name}, Вам были отобраны репетиторы по языкам:
    <span>{studentLangs.join(', ')}</span>
  </h3>
  <div class="tutor-list">
    {#each suitableTutors as { name, surname, age, email, phone, comment, langs }, index}
      <div class="tutor">
        <img
          class="tutor__avatar"
          src="build/assets/avatar-default.png"
          alt="avatar" />
        <p class="tutor__name">{name} {surname} ({age})</p>
        <p>
          <span class="tutor__title">E-mail:</span>
          {email}
        </p>
        <p>
          <span class="tutor__title">Телефон:</span>
          {phone}
        </p>
        <div class="langs">
          <p class="langs__title">Преподаваемые языки:</p>
          {#each langs as { name, level }, index}
            <p class="lang">– {name} ({langLevelText[level].toLowerCase()})</p>
          {/each}
        </div>
        <p>
          <span class="tutor__title">
            О себе:
            <br />
          </span>
          {comment}
        </p>
      </div>
    {/each}
  </div>
</div>

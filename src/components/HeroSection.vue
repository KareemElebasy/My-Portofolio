<template>
  <div class="container mx-auto flex items-center hero-section">
    <div class="ps-6">
      <h2>
        Hello,I'm Kareem Elebasy <br />
        <span>Front End Developer ( React.js || Vue.js )</span>
      </h2>
      <h3>
        Efficiently developing websites and applications <br />
        using modern HTML, SaSS, Bootstrap, Tailwind, JavaScript, Vue.js And
        React.Js.<br />
        Successfully completed many projects from scratch.
      </h3>
      <a
        href="https://drive.google.com/file/d/13eDq7RTj6wf5HOYyc2petBU-V9nJb8fK/view?usp=drive_link"
        target="_blank"
        download="Kareem-Elebasy-Front-End-CV"
        class="text-white bg-lime-400 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        >Download My Cv</a
      >
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.hero-section {
  background-image: url(../assets/imgs/main-section.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  h2 {
    color: white;
    font-size: 1.5em;
    font-weight: 500;
    color: rgb(216, 223, 205);
    span {
      display: inline-block;
      margin-top: 10px;
      color: rgb(163 230 53);
      font-size: 1.6em;
      font-weight: 400;
    }
  }
  h3 {
    color: rgb(244, 229, 211);
    font-size: 1.1em;
    font-weight: 600;
    // width: 50%;
    letter-spacing: 2px;
    margin: 10px 0;
  }
  .main-btn {
    color: white;
    background-color: #4e9eff;
    display: inline-block;
    padding: 0.9em 2em;
    border-radius: 15px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    transition: 0.7s ease;
  }
  .main-btn:hover {
    color: white;
    background-color: #386cac;
    transform: scale(1.1);
  }
  .social-icons {
    a {
      color: white;
      font-size: 1.5em;
      padding-right: 14px;
    }
  }
}
</style>

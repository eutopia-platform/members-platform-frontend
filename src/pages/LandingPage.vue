<template>
  <div class="landing-page">
    <!-- <h1>Hello Landing Page!</h1>
    <p>Welcome to our super awesome project!</p>
    <router-link to="/project-hub">
      <Button>Go to project hub</Button>
    </router-link> -->

    <PageSlide>
      <template v-slot:left>
        <Header type="primary">
          Helping projects succeed
        </Header>
        <p>
          Project hub helps you to identify the most important aspects of your
          project so you achieve the right goals.
        </p>
        <Button>
          Request early access
        </Button>
      </template>
      <template v-slot:right>
        <img class="image-right" src="../../data/img/landingpage/slide1.svg">
      </template>
    </PageSlide>

    <PageSlide>
      <template v-slot:left></template>
      <template v-slot:right>
        <img class="image-right" src="../../data/img/landingpage/slide2.svg">
      </template>
    </PageSlide>

    <PageSlide>
      <template v-slot:left></template>
      <template v-slot:right>
        <img class="image-right" src="../../data/img/landingpage/slide3.svg">
      </template>
    </PageSlide>







    <!-- Slide 1 -
    <div class="pageslide" id="slide-1">
      <div class="slide-sec cont-sec">
        <div class="cont-wrap">
          <h1>Helping Projects succeed</h1>
          <p>
            Project hub helps you to identify the most important aspects of your
            project so you achieve the right goals.
          </p>
          <button type="button" name="button">
            Request early access
          </button>
        </div>
      </div>
      <div class="slide-sec img-sec"></div>
    </div>
     Slide 2 --
    <div class="pageslide" id="slide-2">
      <div class="slide-sec cont-sec">
        <div class="cont-wrap">
          <h1>Vision driven project plan</h1>
          <div class="vision-point">
            <h2>1. Setup your vision</h2>
            <p>Define a ...</p>
            <hr>
          </div>
          <div class="vision-point">
            <h2>2. Develop a strategy</h2>
            <p>Make it feasable...</p>
            <hr>
          </div>
          <div class="vision-point">
            <h2>3. Create your roadmap</h2>
            <p>Start activity-focused...</p>
            <hr>
          </div>
          <div class="vision-point">
            <h2>4. Execute and measure</h2>
            <p>The final step...</p>
          </div>
        </div>
      </div>
      <div class="slide-sec img-sec"></div>
    </div>
    -- Slide 3 --
    <div class="pageslide" id="slide-3">
      <div class="slide-sec cont-sec">
        <div class="cont-wrap">
          <h1>What others say</h1>
          <div class="quote-wrap">

          </div>
          <div class="quote-wrap">

          </div>
        </div>
      </div>
      <div class="slide-sec img-sec"></div>
    </div>
    -- Mail Slide --
    <div class="pageslide" id="slide-mail">
      <h2>Let's talk about your project</h2>

      <Form></Form>
    </div>
    -->
  </div>
</template>

<script>
import PageSlide from "../components/atomic/PageSlide";
import Header from "../components/atomic/Header";
import Button from "../components/atomic/Button";

const LandingPage = {
  name: "LandingPage",
  components: {
    PageSlide,
    Header,
    Button
  }
};

export default LandingPage;
</script>

<style lang="scss" scoped>

  .image-right {
    height: 100vh;
  }

  $blue-light: rgb(126, 192, 250);
  $blue-dark: rgb(89, 109, 238);

  .landing-page {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  // .pageslide {
  //   width: 100%;
  //   height: 100vh;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-around;
  //   box-sizing: border-box;
  //   font-family: 'Roboto', sans-serif;
  //   font-size: 16px;
  //
  //   // border-bottom: 1px rgba(100, 100, 100, 0.1) solid;
  //
  //   .slide-sec {
  //     display: block;
  //     box-sizing: border-box;
  //     overflow: hidden;
  //     height: 100%;
  //     width: 50%;
  //   }
  //
  //   .cont-sec {
  //     background-color: white;
  //     padding: 10%;
  //     color: #1A1818;
  //     hr {
  //       width: 50%;
  //       background-color: $blue-dark;
  //       height: .4em;
  //       border: none;
  //     }
  //
  //     .cont-wrap {
  //       position: relative;
  //       top: 50%;
  //       transform: translateY(-50%);
  //     }
  //     h1 {
  //       text-align: center;
  //       font-size: 2.2em;
  //     }
  //   }
  //
  //   .img-sec {
  //     background-color: $blue-light;
  //     background-size: contain;
  //     background-repeat: no-repeat;
  //   }
  // }
  //
  // #slide-1 {
  //   .cont-sec {
  //     p {
  //       font-size: 1em;
  //     }
  //     button {
  //       border: none;
  //       border-radius: 1em;
  //       background-color: $blue-dark;
  //       padding: 0.75rem;
  //       cursor: pointer;
  //       outline: none;
  //       transition: box-shadow 0.2s, transform 0.2s;
  //       transform: translate(0, 0px);
  //       color: white;
  //       left: 50%;
  //       position: relative;
  //       margin-top: 1em;
  //       transform: translateX(-50%);
  //     }
  //   }
  //   .img-sec {
  //     // background-image: url("../../data/img/team.svg");
  //   }
  // }
  // #slide-2 {
  //   .cont-sec {
  //
  //   }
  //   .img-sec {
  //     // background-image: url("../../data/img/team2.svg");
  //   }
  // }
  // #slide-3 {
  //   .cont-sec {
  //     .quote-wrap {
  //       background-color: grey;
  //       width: 100%;
  //       height: 20vh;
  //       display: block;
  //       margin-bottom: 1em;
  //     }
  //   }
  //   .img-sec {
  //     // background-image: url("../../data/img/team3.svg");
  //   }
  // }
  // #slide-mail {
  //   background-color: rgb(89, 109, 238);
  //   Form {
  //     position: relative;
  //     top: 200em;
  //   }
  // }

</style>

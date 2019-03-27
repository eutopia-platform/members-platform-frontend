<template>
  <div class="lp-pricing">
    <div class="section-title">
      <Header type="primary">
        Reduce waste and build lean products
      </Header>
    </div>
    <div class="pricing-list">
      <PricingCard @request="scrollToSignup"
        title="Productcube for Startups" price="15 / month per user"
        v-bind:feats="[
          'Setup one workspace', 'Run unlimited experiments',
          'Create your own toolkits', '1 mentorship session per month'
          ]">
        <template>
        <img class="image-right" src="../../../data/img/landingpage/card1.png">
        </template>
      </PricingCard>

      <PricingCard @request="scrollToSignup"
        title="Productcube for Corporates" price="25 / month per user"
        v-bind:feats="[
          'Setup multiple workspaces', 'Run unlimited experiments',
          'Create your own toolkits', 'Organize user tests'
          ]">
        <template>
        <img class="image-right" src="../../../data/img/landingpage/card2.png">
        </template>
      </PricingCard>
    </div>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import PricingCard from '../../components/molecular/PricingCard.vue'

export default {
   name: "Pricing",
   components: {
     Header,
     PricingCard
   },
   methods: {
     scrollToSignup: function() {
       this.$eventBus.$emit('scroll-to-email')
     },
   }
}
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/shapes.scss";
@import "../../components/sharedStyles/colors.scss";

.lp-pricing {
  padding-top: 2em;
  text-align: center;
  min-height: 100%;
  box-sizing: border-box;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
  margin-top: 3em;
  margin-bottom: 5em;

  .section-title {
    margin-bottom: 3rem;
  }

  .pricing-list {
    margin: 0;
    min-height: calc(100vh - 8rem);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>

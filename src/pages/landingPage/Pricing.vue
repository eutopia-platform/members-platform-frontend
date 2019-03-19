<template>
  <div class="lp-pricing">
    <Header type="primary">
      Pricing options
    </Header>
    <div class="pricing-list">
      <PricingCard @request="scrollToSignup"
        title="Product Pad for Entrepreneurs" price="free"
        v-bind:feats="[
          'Project Starter-Bundle', 'Access to project dashboard',
          'Up to 3 team members', 'Manage up to 3 projects', '1 mentorship session free'
          ]">
        <template>
        <img class="image-right" src="../../../data/img/landingpage/card1.png">
        </template>
      </PricingCard>

      <PricingCard @request="scrollToSignup"
        title="Product Pad for Scaleups" price="€189 / month"
        v-bind:feats="[
          'Unlimited project toolkits', 'Access to project dashboard',
          'Unlimited team members', 'Manage unlimited projects',
          'Two mentorship sessions per month', 'Project recommendations'
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

  .header {
    height: 1.5em;
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

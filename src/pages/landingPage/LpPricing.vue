<template>
  <div class="lp-welcome">
    <Header type="primary">
      Pricing options
    </Header>
    <!-- <div class="pricing-card">
      <Header type="quaternary" class="title">
        Product Pad for Entrepreneurs
      </Header>
    </div> -->
    <PricingCard v-bind:feats="['Project Starter-Bundle',
      'Access to project dashboard', 'Up to 3 team members',
      'Manage up to 3 projects', '1 mentorship session free']">
      <template>
      <img class="image-right" src="../../../data/img/landingpage/card1.png">
      </template>
    </PricingCard>
  </div>
</template>

<script>
import Header from '../../components/atomic/Header.vue'
import PricingCard from '../../components/molecular/PricingCard.vue'

const LpPricing = {
   name: "LpPricing",
   components: {
     Header,
     PricingCard
   }
}
export default LpPricing
</script>

<style lang="scss" scoped>
@import "../../components/sharedStyles/shapes.scss";
@import "../../components/sharedStyles/colors.scss";

.lp-welcome {
  padding: 2em;
  padding-left: 3em;
}
</style>

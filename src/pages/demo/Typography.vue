<template>
  <div :class="getClass">
    <Header primary>Header primary</Header>
    <Header secondary>Header secondary</Header>
    <Header tertiary>Header tertiary</Header>
    <Header quaternary>Header quatnery</Header>

    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header primary>Header primary</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header secondary>Header secondary</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header tertiary>Header tertiary</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header quaternary>Header quatnery</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>

    <Header secondary>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem
      incidunt magnam voluptatum quaerat mollitia quas corrupti porro ipsum
      commodi a suscipit molestiae quia natus qui, minima similique consequatur
      eius!
    </Header>

    <Header tertiary>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem
      incidunt magnam voluptatum quaerat mollitia quas corrupti porro ipsum
      commodi a suscipit molestiae quia natus qui, minima similique consequatur
      eius!
    </Header>

    <Paragraph id="textblock">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse debitis
      libero dolor, necessitatibus tempora illum, voluptatum quidem
      reprehenderit neque, vero facilis cum eius voluptates corporis. Quibusdam,
      hic nam. Architecto, ipsum! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Nobis harum dolor fugiat quaerat sequi in maiores ex,
      vitae eaque, cum at enim, molestiae provident porro! Magnam quis molestiae
      aliquam laborum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Nulla et error dolorum iste distinctio, voluptatibus perspiciatis voluptas
      odio, excepturi quod sequi cumque aut debitis culpa possimus ex ipsa
      mollitia unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Esse debitis libero dolor, necessitatibus tempora illum, voluptatum quidem
      reprehenderit neque, vero facilis cum eius voluptates corporis. Quibusdam,
      hic nam. Architecto, ipsum! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Nobis harum dolor fugiat quaerat sequi in maiores ex,
      vitae eaque, cum at enim, molestiae provident porro! Magnam quis molestiae
      aliquam laborum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Nulla et error dolorum iste distinctio, voluptatibus perspiciatis voluptas
      odio, excepturi quod sequi cumque aut debitis culpa possimus ex ipsa
      mollitia unde. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Esse debitis libero dolor, necessitatibus tempora illum, voluptatum quidem
      reprehenderit neque, vero facilis cum eius voluptates corporis. Quibusdam,
      hic nam. Architecto, ipsum! Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Nobis harum dolor fugiat quaerat sequi in maiores ex,
      vitae eaque, cum at enim, molestiae provident porro! Magnam quis molestiae
      aliquam laborum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Nulla et error dolorum iste distinctio, voluptatibus perspiciatis voluptas
      odio, excepturi quod sequi cumque aut debitis culpa possimus ex ipsa
      mollitia unde.
    </Paragraph>

    <Paragraph v-for="(_, i) in new Array(50)" :key="i">
      line {{ i + 1 }}
    </Paragraph>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'

export default new Component({
  name: 'TypographyDemo',
  methods: {
    onResize() {
      this.remSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      )
    },
  },
})
</script>

<style lang="scss" scoped>
div:first-child {
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: auto;
}

canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
}
</style>

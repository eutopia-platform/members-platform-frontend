<template>
  <div :class="getClass">
    <Header s1>Header s1</Header>
    <Header s2>Header s2</Header>
    <Header s3>Header s3</Header>
    <Header s4>Header s4</Header>
    <Header s5>Header s5</Header>

    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header s1>Header s1</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header s2>Header s2</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header s3>Header s3</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>
    <Header s4>Header s4</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore
      a sequi eligendi amet! Placeat accusantium, unde, voluptatem id velit
      distinctio error, odit iusto modi omnis qui voluptate at earum!
    </Paragraph>

    <Small>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque minus a
      asperiores, alias esse repudiandae omnis veniam, numquam ut distinctio
      vero molestias quae ullam, error atque. Suscipit nam voluptates fugit?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque minus a
      asperiores, alias esse repudiandae omnis veniam, numquam ut distinctio
      vero molestias quae ullam, error atque. Suscipit nam voluptates fugit?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque minus a
      asperiores, alias esse repudiandae omnis veniam, numquam ut distinctio
      vero molestias quae ullam, error atque. Suscipit nam voluptates fugit?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque minus a
      asperiores, alias esse repudiandae omnis veniam, numquam ut distinctio
      vero molestias quae ullam, error atque. Suscipit nam voluptates fugit?
    </Small>

    <Big>Big text</Big>
    <Big>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum cumque
      expedita voluptatibus voluptatem dolorum culpa nihil ea reprehenderit
      doloremque, enim quos dolore ad totam impedit non, corporis, fugit odit
      labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      cumque expedita voluptatibus voluptatem dolorum culpa nihil ea
      reprehenderit doloremque, enim quos dolore ad totam impedit non, corporis,
      fugit odit labore?
    </Big>

    <Big extra>Extra big text</Big>
    <Big extra>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum cumque
      expedita voluptatibus voluptatem dolorum culpa nihil ea reprehenderit
      doloremque, enim quos dolore ad totam impedit non, corporis, fugit odit
      labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
      cumque expedita voluptatibus voluptatem dolorum culpa nihil ea
      reprehenderit doloremque, enim quos dolore ad totam impedit non, corporis,
      fugit odit labore?
    </Big>

    <Header s2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem
      incidunt magnam voluptatum quaerat mollitia quas corrupti porro ipsum
      commodi a suscipit molestiae quia natus qui, minima similique consequatur
      eius!
    </Header>

    <Header s3>
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
import Component from '/scripts/component'

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
</style>

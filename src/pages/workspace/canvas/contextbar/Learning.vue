<template>
  <div :class="getClass">
    <MarkdownDisplay :markdown="content"></MarkdownDisplay>
  </div>
</template>

<script>
import Component from '/components/sharedScripts/component'
import MarkdownDisplay from '/components/molecular/MarkdownDisplay'

export default new Component({
  name: 'Learning',
  components: {
    MarkdownDisplay,
  },
  data: () => ({
    //     content: `### Description
    // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis laudantium beatae? Iste molestiae obcaecati et soluta odio a mollitia culpa, adipisci laborum, vero rerum voluptatem, exercitationem accusantium assumenda accusamus.`,
    content: `#### What is a user journey map?
A user or customer journey map is a visual representation of the process a user or customer goes through to achieve a goal with your company or product. With the help of user journey maps, you strengthen your sense for your users motivations, their needs and pain points.

#### How to build a user journey map?

Make sure to have clear answers to the following questions before you begin journey mapping:

- What business goal does this journey support?
- Who will use it?
- Who is this about and what experience does it address?
- How will it be shared?`,
  }),
})
</script>

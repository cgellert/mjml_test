const navigation = {

  props: {
    topics: { type: Array, default: true }
  },

  // Mixing variables and text in attributes like href="#${topic.id}" throws errors.
  // The work around is to use a method or computed property.
  methods: {
    href(anchor) {
      return `#${anchor}`
    }
  },

  // Anchor links are not supported on many mobile email clients.
  // Microsoft Outline doesn't play nice with css display so spans are used rather then an unordered list.
  // https://www.gettyimages.ca/photos/textures?phrase=textures&sort=mostpopular
  // copy image address
  // <span v-if="index < topics.length - 1">, </span>
  template: `
    <mj-section background-url="https://media.gettyimages.com/photos/dark-blue-grunge-background-picture-id185007737?k=6&m=185007737&s=612x612&w=0&h=QeqY0fY_oAxeKSTfrRz0xZ9wURRrA3avqVkZG2ChOpU=" background-size="cover" background-repeat="no-repeat">
    <mj-column>
      <mj-text align="center" color="#fff" font-weight="bold" font-size="40px" font-family="Helvetica Neue">Welcome</mj-text>
      <mj-button v-for="(topic, index) in topics" :key="topic.id" background-color="#F63A4D" :href="href(topic.id)">{{ topic.title }}</mj-button>
    </mj-column>
  </mj-section>
  `
}

exports.navigation = navigation

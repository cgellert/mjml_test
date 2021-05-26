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

  template: `
  <mj-section>
    <mj-column>
      <mj-button background-color="#F63A4D" href="#">Promotion</mj-button>
    </mj-column>
  </mj-section>
  `
}

exports.buttonList = buttonList

const imageSection = {

  props: {
    section: { type: Object, required: true }
  },

  // Add image width for Microsoft Office because it doesn't respect CSS width.
  template: `
    <mj-section background-color="white">
      <mj-column>
        <mj-image width="200px"
          border="solid 5px #000"
          border-radius="5px"
          :src="section.url"
          :alt="section.alt"></mj-image>
      </mj-column>

      <mj-column>
        <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">Find amazing places</mj-text>
        <mj-text color="#525252">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</mj-text>
      </mj-column>
    </mj-section>
  `
}

exports.imageSection = imageSection

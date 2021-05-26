const tags = {
  props: {
    tags: { type: Array, default: true }
  },

  // Microsoft Outline doesn't play nice with css display so spans are used rather then an unordered list.
  template: `
  <mj-section background-color="#fbfbfb">
  <mj-column>
    <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png"></mj-image>
  </mj-column>
  <mj-column>
    <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x01.png"></mj-image>
  </mj-column>
  <mj-column>
    <mj-image width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png"></mj-image>
  </mj-column>
</mj-section>
  `
}

exports.tags = tags

const mjml2html = require('mjml')
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')

exports.renderHtml = async function renderHtml(payload) {

  // Create an instance of Vue.
  const app = createSSRApp({
    data() {
      return {
        orders: payload.data.orders
      }
    },

    template: `
    <mjml>
    <mj-body background-color="#ccd3e0" font-size="13px">
      <mj-section background-color="#fff" padding-bottom="20px" padding-top="20px">
        <mj-column width="100%">
          <mj-image src="https://image.freepik.com/free-vector/shopping-experience-finding-products-making-payments-delivery-services-big-shopping-cart_4968-670.jpg" alt="" align="center" border="none" width="300px" padding-left="0px" padding-right="0px" padding-bottom="0px" padding-top="0"></mj-image>
        </mj-column>
      </mj-section>
      <mj-section background-color="#5020F8" padding-bottom="0px" padding-top="0">
        <mj-column width="100%">
          <mj-text align="center" font-size="16px" color="#ABCDEA" font-family="Ubuntu, Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="18px" padding-top="28px">HELLO
            <p style="font-size:30px; color:white">Chantelle Gellert</p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#5020F8" padding-bottom="5px" padding-top="0">
        <mj-column width="100%">
          <mj-divider border-color="#ffffff" border-width="2px" border-style="solid" padding-left="20px" padding-right="20px" padding-bottom="0px" padding-top="0"></mj-divider>
          <mj-text align="center" color="#FFF" font-size="13px" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="28px" padding-top="28px">
            <span style="font-size:20px; font-weight:bold">Thank you very much for your purchase.</span>
            <br/><br/>
            <span style="font-size:15px">Please find the receipt below.</span>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="blueviolet" padding-bottom="15px">
        <mj-column>
          <mj-text align="center" color="#FFF" font-size="15px" font-family="Ubuntu, Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="20px"><strong>Order Number</strong></mj-text>
          <mj-text align="center" color="#FFF" font-size="13px" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="20px" padding-top="10px" v-for="(order,index) in orders" :key="index">{{order.number}}</mj-text>
        </mj-column>
        <mj-column>
          <mj-text align="center" color="#FFF" font-size="15px" font-family="Ubuntu, Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="20px"><strong>Order Date</strong></mj-text>
          <mj-text align="center" color="#FFF" font-size="13px" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="20px" padding-top="10px" v-for="(order,index) in orders" :key="index">{{order.date}}</mj-text>
        </mj-column>
        <mj-column>
          <mj-text align="center" color="#FFF" font-size="15px" font-family="Ubuntu, Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="20px"><strong>Total Price</strong></mj-text>
          <mj-text align="center" color="#FFF" font-size="13px" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="20px" padding-top="10px" v-for="(order,index) in orders" :key="index">{{order.total}}</mj-text>
        </mj-column>
      </mj-section>
      <mj-section background-color="#5020F8" padding-bottom="20px" padding-top="20px">
        <mj-column width="50%">
          <mj-button background-color="#ffae00" color="#FFF" font-size="14px" align="center" font-weight="bold" border="none" padding="15px 30px" border-radius="10px" :href="receipt_link" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="10px">Download Receipt</mj-button>
        </mj-column>
        <mj-column width="50%">
          <mj-button background-color="#ffae00" color="#FFF" font-size="14px" align="center" font-weight="bold" border="none" padding="15px 30px" border-radius="10px" :href="tracking_link" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="12px">Track My Order</mj-button>
        </mj-column>
      </mj-section>
      <mj-section background-color="#5020F8" padding-bottom="5px" padding-top="0">
        <mj-column width="100%">
          <mj-divider border-color="#ffffff" border-width="2px" border-style="solid" padding-left="20px" padding-right="20px" padding-bottom="0px" padding-top="0"></mj-divider>
          <mj-text align="center" color="#FFF" font-size="15px" font-family="Helvetica" padding-left="25px" padding-right="25px" padding-bottom="20px" padding-top="20px">Best,
            <br/>
            <span style="font-size:15px">Creative Layer Team</span></mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
    `
  })

  // Tell Vue to recognize mjml components. See: https://v3.vuejs.org/api/application-config.html#iscustomelement
  app.config.isCustomElement = tag => tag === 'mjml' || tag.startsWith('mj-')

  // Render the Vue instance to a variable as a string
  let html = await renderToString(app)

  // Remove <!--[--> and <!--]--> add by the server renderer.
  html = html.replace('<!--[-->', '').replace('<!--]-->', '')

  // Let mjml do its magic
  return mjml2html(html).html
}

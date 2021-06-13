import React, { Component } from 'react';
import { CalloutCard, Card, Layout } from "@shopify/polaris";

class HeaderCards extends Component {

    render() {
        return (

          


        <Layout>
        <Layout.Section oneThird>
            <CalloutCard
  title="Instagram"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'More info',
    url: 'https://www.shopify.com',
  }}
>
  <p>stats on Instagram</p>
</CalloutCard>
</Layout.Section>

<Layout.Section oneThird>
   <CalloutCard
  title="Facebook"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'More info',
    url: 'https://www.shopify.com',
  }}
>
  <p>stats on Facebook</p>
</CalloutCard>
</Layout.Section>

<Layout.Section oneThird>
<CalloutCard
  title="Linkedin"
  illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
  primaryAction={{
    content: 'More info',
    url: 'https://www.shopify.com',
  }}
>
  <p>stats on Linkedin</p>
  </CalloutCard>
  </Layout.Section>
  </Layout>
   
        );
     }

}
export default HeaderCards;
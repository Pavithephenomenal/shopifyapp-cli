import React, { Component } from 'react';
import { CalloutCard, Card, Layout, FormLayout } from "@shopify/polaris";

class HeaderCards extends Component {

  render() {
    return (
      
        <FormLayout>
  <FormLayout.Group condensed>
        
          <Card title="Facebook" sectioned>
            <p>100%</p>
          </Card>
          
        
        
        
          <Card title="Google" sectioned>
            <p>100%</p>
          </Card>
          
        
        
        
          <Card title="Instagram" sectioned>
            <p>100%</p>
          </Card>
          
        
        
        
        <Card title="Others" sectioned>
          <p>100%</p>
        </Card>

       

    


        </FormLayout.Group>
        </FormLayout>
        
      

     
    );
  }

}
export default HeaderCards;
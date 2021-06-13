import {
    Page,
    ThemeProvider,
    FooterHelp,
    Link,
    Pagination,
    Layout,
    Card, 
    FormLayout,
    ButtonGroup,
    Button,
    Heading
} from "@shopify/polaris";
import Table from "./Table.js";
import { ResourcePicker } from "@shopify/app-bridge-react";
// import HeaderCards from "./HeaderCards";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Id from "./id";
import Chart from "../charts/bubble";
import Barchart from "../charts/bar";
import DatePickerExample from "./filters"
import HeaderCards from "./Cards.js";
import Table2 from "./Table2";

class Index extends React.Component {
    state = { open: false };
    render() {
        return ( 
            <body >
            <Page title = "Store Analysis"
            primaryAction = {
                <ButtonGroup>
                {/*<Heading element="h1"> Referal sites Analytics</Heading>
                <pre>                                         </pre>*/}
          <Button primary>90 days</Button>
          <Button primary>30 days</Button>
          <Button primary>14 days</Button>
          <Button primary>7 days</Button>
          <DatePickerExample/>
          </ButtonGroup>
                
            } >
                
           
           
            <div>
            <HeaderCards/>
            </div>
        
             <Layout>
             <Layout.Section oneHalf>
            <div style={{ height: 400, width: 550 }}>
                <Chart />
               
                </div>
                </Layout.Section>
                <Layout.Section oneHalf>
                <div style={{ height: 400, width: 500 }}>
                <Barchart/>
                </div>
                </Layout.Section>
                </Layout>
                <Table2/>
            
            <Table / >
            <FooterHelp >Learn more about { " " } < Link external url = "https://help.shopify.com/manual/orders/fulfill-orders" >fulfilling orders </Link> 
            </FooterHelp> 
            </Page> 
            </body>
        );
    }
   
}

export default Index;
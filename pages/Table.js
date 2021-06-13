import React, { Component } from "react";
import axios from "axios";
import { Button, Layout, DataTable, Card, Page } from "@shopify/polaris";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Id from "./id.js";
import { Redirect } from "@shopify/app-bridge/actions";
import createApp from "@shopify/app-bridge";

class Table extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axios.get(`https://reqres.in/api/users`).then((res) => {
            const use = res.data;
            const users = use.data;
            this.setState({ users });
            console.log(users);
        });
    }
    renderTableHeader = () => {
        return Object.keys(this.state.users[0]).map((attr) => ( <th class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn"
            scope = "row"
            key = { attr } >
            <b> { attr.toUpperCase() } </b></th >
        ));
    };
    renderTableRow = () => {
        return this.state.users.map((user) => {
            return ( < tr class = "Polaris-DataTable__TableRow Polaris-DataTable--hoverable"key = { user.id } >
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" > { user.id } </td>  
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >
                <a href = { user.email } > { user.email } </a>  </td >
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >{ user.first_name } </td> 
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >{ user.last_name } </td> 
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >
                <img src = { user.avatar } alt = { user.first_name } width = "40"height = "50" /> </td> 
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >
                <Button primary size = "slim" onClick = { Show } >Show </Button> </td > 
                <td class = "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--numeric" >
                <Button destructive onClick = { onDeleteRow }size = "slim" >Delete </Button> </td >
                </tr>
            );

            function onDeleteRow(e) {
                var userval = confirm("Do you want to delete ?");
                if (userval == true) {
                    const btn = e.target;
                    btn.closest("tr").remove();
                    alert("Deleted Successfully");
                }
            }

            function Show() {
                return <Id / > ;
            }
        });
    };
    render() {
        const { users } = this.state;
        return users.length > 0 ? ( 
            <div class = "Polaris-DataTable" >
            <div class = "Polaris-DataTable__ScrollContainer" >
            <table class = "Polaris-DataTable__Table" >
            <thead >
            <tr class = "Polaris-DataTable__TableRow Polaris-DataTable--hoverable" >{ this.renderTableHeader() } </tr> 
            </thead >
            <tbody > { this.renderTableRow() } </tbody> 
            </table > 
            </div>  
            </div >
        ) : ( <div > No Users </div> );
    }
}
export default Table;
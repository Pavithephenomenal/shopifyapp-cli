import React, { Component } from "react";
import { DataTable, Card } from "@shopify/polaris";

const rows = [
    ["1", "Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["3", "Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
        "2",
        "www",
        "$445.00",
        124518,
        32,
        "$14,240.00"
    ]
];

class Table2 extends Component {
    render() {
        return (

            <Card >
                <DataTable Title="TABLE-2"
                    columnContentTypes={[
                        "text",
                        "numeric",
                        "numeric",
                        "numeric",
                        "numeric",
                        "text"
                    ]}
                    headings={[
                        "Week",
                        "Referral Site",
                        "Orders",
                        "Revenue",
                        "AoV",
                        "Customer"
                    ]}
                    rows={rows}
                />
            </Card>

        );
    }
}
export default Table2;
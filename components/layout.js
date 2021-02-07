import Head from "next/head";
import React, { Component } from "react";

export default class Layout extends Component {
    render() {
    return (
        
      <div>
        <Head>
          <title>Test - Accounts App</title>
          <link rel="icon" type="image/png" href="/favicon.ico" />
        </Head>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

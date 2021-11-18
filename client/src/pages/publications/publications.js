import React, { Component } from "react";
import PageLayout from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import Origamis from "../../components/origamis/origamis";
import UserContext from "../../Context";

class Publications extends Component {
  static contextType = UserContext;
  render() {
    console.log(this.context);
    return (
      <PageLayout>
        <Title title="Publications" />
        <Origamis />
      </PageLayout>
    )
  }
}

export default Publications;

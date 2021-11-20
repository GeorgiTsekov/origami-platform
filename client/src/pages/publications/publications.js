import React from "react";
import PageLayout from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import Origamis from "../../components/origamis/origamis";

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Publications" />
      <Origamis />
    </PageLayout>
  )
}

export default Publications;

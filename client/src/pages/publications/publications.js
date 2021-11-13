import React from "react";
import PageWrapper from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import Origamis from "../../components/origamis/origamis";

const Publications = () => {
  return (
    <PageWrapper>
      <Title title="Publications" />
      <Origamis />
    </PageWrapper>
  )
}

export default Publications;

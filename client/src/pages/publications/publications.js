import React, { Component } from "react";
import styles from './publications.module.css';
import PageWrapper from '../../components/page-wrapper/page-wrapper';
import Origami from '../../components/origami/origami';
import Title from '../../components/title/title';

class Publications extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const promise = await fetch('http://localhost:9999/api/origami');
    const origamis = await promise.json();
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const origamis = this.state.origamis;

    return origamis.map((origami, index) => {
      return (
        <Origami key={origami._id} index={index} {...origami} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    return (
      <PageWrapper>
        <Title title="Publications" />
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </PageWrapper>
    )
  }
}

export default Publications;

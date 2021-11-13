import React from 'react';
import styles from './share-thoughts.module.css';
import PageWrapper from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis/origamis';

const ShareThoughtsPage = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <Title title="Share your thoughts..." />
        <div>
          <textarea className={styles.textarea} placeholder="Publication..."></textarea>
        </div>
        <div>
          <SubmitButton title={"Share"} />
        </div>
      </div>
      <Origamis length={3}/>
    </PageWrapper>
  )
}

export default ShareThoughtsPage;
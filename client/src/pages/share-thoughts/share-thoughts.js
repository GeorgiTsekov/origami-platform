import React, { useState } from 'react';
import styles from './share-thoughts.module.css';
import PageWrapper from '../../components/page-layout/page-layout';
import Title from '../../components/title/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis/origamis';
import getCookie from '../../utils/cookie';

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState('');
  const [updatedOrigami, setUpdatedOrigami] = useState([]);

  const handleSubmit = async () => {
    await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getCookie('x-auth-token')
      }
    })

    setPublication('');
    setUpdatedOrigami([...updatedOrigami, 1]);
  }
  return (
    <PageWrapper>
      <div className={styles.container}>
        <Title title="Share your thoughts..." />
        <div>
          <textarea value={publication} className={styles.textarea} placeholder="Publication..." onChange={e => setPublication(e.target.value)}></textarea>
        </div>
        <div>
          <SubmitButton title={"Share"} onClick={handleSubmit} />
        </div>
      </div>
      <Origamis length={3} updatedOrigami={updatedOrigami} />
    </PageWrapper>
  )
}

export default ShareThoughtsPage;
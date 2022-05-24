import styles from './index.module.styl';

/* eslint-disable-next-line */
export interface NextPageProps {}

export function NextPage(props: NextPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextPage!</h1>
    </div>
  );
}

export default NextPage;

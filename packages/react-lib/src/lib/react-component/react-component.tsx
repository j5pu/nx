import styles from './react-component.module.css';

/* eslint-disable-next-line */
export interface ReactComponentProps {}

export function ReactComponent(props: ReactComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactComponent!</h1>
    </div>
  );
}

export default ReactComponent;

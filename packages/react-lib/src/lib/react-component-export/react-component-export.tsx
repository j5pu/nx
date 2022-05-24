import styles from './react-component-export.module.css';

/* eslint-disable-next-line */
export interface ReactComponentExportProps {}

export function ReactComponentExport(props: ReactComponentExportProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactComponentExport!</h1>
    </div>
  );
}

export default ReactComponentExport;

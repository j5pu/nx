/* eslint-disable-next-line */
export interface NextComponentProps {}

export function NextComponent(props: NextComponentProps) {
  return (
    <div className={styles['container']}>
      <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
      <h1>Welcome to NextComponent!</h1>
    </div>
  );
}

export default NextComponent;

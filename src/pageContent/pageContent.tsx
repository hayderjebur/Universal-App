import { useTypedSelector } from '../hooks/useTypedSelector';

const PageContent = (props: any) => {
  //TODO   Styled-Componet
  const { isDarkTheme } = useTypedSelector((state) => state.userInputs);
  const styles = {
    backgroundColor: isDarkTheme ? 'black' : 'white',
    height: '100vh',
    width: '100vw',
  };
  // className={isDarkTheme ? 'bgdark' : 'bglight'}
  return <div style={styles}>{props.children}</div>;
};

export default PageContent;

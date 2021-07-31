import { useTypedSelector } from '../hooks/useTypedSelector';
import styled from 'styled-components';

const PageContent = (props: any) => {
  const { isDarkTheme } = useTypedSelector((state) => state.toggleTheme);
  const bg = isDarkTheme ? '#000' : '#f2f1ef';
  const Wrapper = styled.section`
    background-color: ${bg};
    height: 100vh;
    width: 100vw;
  `;

  return <Wrapper>{props.children}</Wrapper>;
};

export default PageContent;

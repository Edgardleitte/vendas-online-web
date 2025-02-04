import Button from "../../../shared/buttons/button/button";
import Input from "../../../shared/inputs/input/input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from "../styles/LoginsScreen.styles";


const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
          <Input title="Username:" />
          <Input title="Password:" />
          <Button type="primary" margin="64px 0px 16px 0px">Enter</Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};
export default LoginScreen;

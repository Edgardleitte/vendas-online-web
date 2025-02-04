import { useState } from "react";

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`username: ${username}, password: ${password}`);
  };


  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
          <Input title="Username:" margin="32px 0px 0px" onChange={handleUsername} value={username} />
          <Input type="password" title="Password:" margin="32px 0px 0px" />
          <Button type="primary" margin="64px 0px 16px 0px">Enter</Button>
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src="./background.png" />
    </ContainerLoginScreen>
  );
};
export default LoginScreen;

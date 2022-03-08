import React, {FC} from 'react';
import {Wrapper, BoxStart, BoxEnd, UserName, Perfil, Avatar} from './styles';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <Wrapper>
      <BoxStart>
        <UserName>Samuel Rodrigues</UserName>
        <Perfil>Voluntário</Perfil>
      </BoxStart>
      <BoxEnd>
        <Avatar
          source={{uri: 'https://avatars.githubusercontent.com/u/84452484?v=4'}}
        />
      </BoxEnd>
    </Wrapper>
  );
};

export default Header;

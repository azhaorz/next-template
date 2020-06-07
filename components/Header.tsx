import React from 'react';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => <div>{title}</div>;

export default Header;

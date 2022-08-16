import React, { MouseEvent } from 'react';
import { Button, ArrowIcon } from './BackButton.styles';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';

export const BackButton = () => {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const navigate = useNavigate();

  const onBackClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Button onClick={onBackClick}>
      <ArrowIcon currentTheme={currentTheme} />
      Back
    </Button>
  );
};

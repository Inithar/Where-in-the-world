import React, { MouseEvent } from 'react';
import { Button, ArrowIcon } from './BackButton.styles';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const onBackClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Button onClick={onBackClick}>
      <ArrowIcon />
      Back
    </Button>
  );
};

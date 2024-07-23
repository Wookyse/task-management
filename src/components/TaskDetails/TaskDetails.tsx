import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../Button/Button';

import './TaskDetails.css';
export const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="task-details">
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick} type="button">
          Voltar
        </Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolore
          molestiae a est, illo quibusdam.
        </p>
      </div>
    </div>
  );
};

import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import './AddTask.css';
import React from 'react';

type AddTaskProps = {
  handleTaskAddition: (taskTitle: string) => void;
};
interface FieldTask {
  taskTittle: string;
  taskDescription: string;
  taskImageUrl: string;
}
export const AddTask = ({ handleTaskAddition }: AddTaskProps) => {
  const { handleSubmit, control } = useForm<FieldTask>({
    defaultValues: {
      taskTittle: '',
      taskDescription: '',
      taskImageUrl: '',
    },
  });

  return (
    <form
      className="add-task-container"
      onSubmit={handleSubmit((data, event) => {
        event?.preventDefault();
        if (data) {
          console.log(data);
        }
      })}
    >
      <Controller
        control={control}
        name="taskTittle"
        render={({ field }) => {
          return (
            <div className="base-input-container">
              <label htmlFor="task-input">Nome:</label>
              <input
                {...field}
                id="task-input"
                placeholder="Nome do produto"
                className="add-task-input input-base"
                type="text"
              />
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="taskDescription"
        render={({ field }) => {
          return (
            <div className="base-input-container">
              <label htmlFor="task-input-description">Descrição:</label>
              <textarea
                {...field}
                id="task-input-description"
                className="add-task-input-description input-base"
                placeholder="Link do produto ou descrição"
                rows={4}
                cols={50}
              />
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="taskImageUrl"
        render={({ field }) => {
          return (
            <div className="base-input-container">
              <label htmlFor="add-task-input-imageUrl">Link da imagem:</label>
              <input
                {...field}
                id="add-task-input-imageUrl"
                placeholder="Link da imagem do produto"
                className="add-task-input-imageUrl input-base"
                type="text"
              />
            </div>
          );
        }}
      />
      <button type="submit" className="button-add-task">
        Adicionar
      </button>
    </form>
  );
};

import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';


type ListQuestionnaireProps = {}

export const ListQuestionnaire: React.FC<ListQuestionnaireProps> = (props) => {
  return (
    <List {...props} title="опросы">
      <Datagrid rowClick="show" isRowSelectable={r => false}>
        <TextField source="title" label="имя" />
      </Datagrid>
    </List>
    )
};
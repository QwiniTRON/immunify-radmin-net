import React from 'react';
import { Datagrid, Filter, List, TextField, TextInput } from 'react-admin';


type DiseasListProps = {

}

const DiseasFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label="поиск" source="q" always-on />
  </Filter>
);

export const DiseasList: React.FC<DiseasListProps> = props => {
  return (
    <List {...props} title="Список болезней" filters={<DiseasFilter />}>
      <Datagrid rowClick="edit">
        <TextField source="name" label="имя" />
      </Datagrid>
    </List>
  )
};
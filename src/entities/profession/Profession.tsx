import React from 'react';
import { Datagrid, List, TextField } from 'react-admin';

type ProfesstionListProps = {}

export const ProfesstionList: React.FC<ProfesstionListProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit" isRowSelectable={r => false}>
        <TextField source="name" label="название" />
      </Datagrid>
    </List>
  );
};
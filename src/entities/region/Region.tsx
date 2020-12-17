import React from 'react';
import { Datagrid, Filter, List, TextField, TextInput } from 'react-admin';

import { ListActions } from '../../Layout';


type RegionListProps = {}

const DiseasFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput label="поиск" source="q" always-on />
  </Filter>
);

export const RegionList: React.FC<RegionListProps> = (props) => {
  return (
    <List {...props} title="региональные риски" filters={<DiseasFilter />}>
      <Datagrid rowClick="edit" isRowSelectable={r => false}>
        <TextField source="name" label="название" />
      </Datagrid>
    </List>
  );
};
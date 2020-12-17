import React from 'react';
import {
  Datagrid,
  List,
  TextField,
  Filter,
  TextInput,
  EditButton,
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ListActions } from '../../Layout';


type VaccineListProps = {

}

const VaccineFilter: React.FC<any> = (props) => (
  <Filter {...props}>
    <TextInput source="q" label="поиск" always-on title="поиск" />
  </Filter>
);

const VaccinePanel: React.FC<any> = ({ record }) => {
  return (
    <div>
      {record.diseases && record.diseases.map((d: any)=> (
        <Chip color="primary" key={d.id} clickable label={d.name} component={Link} to={`/diseas/${d.id}`} />
      ))}
      <Typography paragraph>
        {record.description}
      </Typography>
    </div>
  );
};


export const VaccineList: React.FC<VaccineListProps> = props => {
  return (
    <List {...props} filters={<VaccineFilter />} title="Список вакцин">
      <Datagrid rowClick="edit" isRowSelectable={r => false}>
        <TextField source="name" label="имя" />
      </Datagrid>
    </List>
  );
};
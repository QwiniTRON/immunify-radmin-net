import React, { useEffect, useState } from 'react';
import {
  ArrayInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  ReferenceManyField,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useGetList,
  useListContext,
  useQuery
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import BugReport from '@material-ui/icons/BugReport';
import Button from '@material-ui/core/Button';
import { Loader } from '../../components/loader/loader';


type VaccineEditProps = {
  [p: string]: any
}

const VaccineTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Вакцина"}</span>);

export const VaccineEdit: React.FC<VaccineEditProps> = props => {
  const { ids, loading } = useGetList('disease', { page: 1, perPage: 100 }, { field: 'id', order: 'asc' }, { VaccineId: props.id });

  return (
    <Edit {...props} title={<VaccineTitle />}>
      <SimpleForm>
        <TextInput source="name" fullWidth helperText="имя вакцины" label="имя" />

        <Typography>эффективна против</Typography>

        {loading ?
          <Loader /> :
          <ReferenceArrayInput source="diseaseIds" reference="disease" defaultValue={ids}>
            <SelectArrayInput optionText="name" />
          </ReferenceArrayInput>}
      </SimpleForm>
    </Edit>
  )
};
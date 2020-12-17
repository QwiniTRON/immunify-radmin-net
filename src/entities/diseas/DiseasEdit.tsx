import React from 'react';
import { Edit, ReferenceArrayInput, SelectArrayInput, SimpleForm, TextInput, useGetList } from 'react-admin';
import { Loader } from '../../components/loader/loader';


type DiseasEditProps = {
  id?: string
}

const DiseasTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Болезнь"}</span>);

export const DiseasEdit: React.FC<DiseasEditProps> = props => {
  const { ids } = useGetList('vaccine', { page: 1, perPage: 100 }, { field: 'id', order: 'asc' }, { DiseaseId: props.id });

  return (
  <Edit {...props} title={<DiseasTitle />}>
    <SimpleForm>
      <TextInput source="name" label="название" fullWidth helperText="название для болезни" />

      {ids?.length == 0? <Loader /> : <ReferenceArrayInput source="vaccineIds" reference="vaccine" defaultValue={ids}>
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>}
    </SimpleForm>
  </Edit>
)};
import React from 'react';
import { Create, ReferenceArrayInput, SelectArrayInput, SimpleForm, TextInput } from 'react-admin';


type DiseasCreateProps = {

}

const DiseasTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Болезнь"}</span>);

export const DiseasCreate: React.FC<DiseasCreateProps> = props => (
  <Create {...props} title={<DiseasTitle />}>
    <SimpleForm>
      <TextInput source="name" fullWidth helperText="название болезни" label="название" />

      <TextInput source="detailed" fullWidth helperText="описание болезни" label="описание болезни" multiline rows={5} />

      <ReferenceArrayInput source="vaccineIds" reference="vaccine">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
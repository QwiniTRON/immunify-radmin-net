import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';


type DiseasCreateProps = {

}

const DiseasTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Болезнь"}</span>);

export const DiseasCreate: React.FC<DiseasCreateProps> = props => (
  <Create {...props} title={<DiseasTitle />}>
    <SimpleForm>
      <TextInput source="name" fullWidth helperText="название болезни" label="название" />
      <TextInput source="description" helperText="описание болезни" label="описание" multiline fullWidth />
    </SimpleForm>
  </Create>
);
import React from 'react';
import {
  Create,
  ReferenceArrayInput,
  SelectArrayInput,
  SimpleForm,
  TextInput
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import BugReport from '@material-ui/icons/BugReport';
import Button from '@material-ui/core/Button';


type VaccineCreateProps = {

}

const VaccineTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Вакцина"}</span>);

export const VaccineCreate: React.FC<VaccineCreateProps> = props => (
  <Create {...props} title={<VaccineTitle />}>
    <SimpleForm>
      <TextInput source="name" fullWidth helperText="имя вакцины" label="имя" />

      <Typography>эффективна против</Typography>

      <ReferenceArrayInput source="diseaseIds" reference="disease">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
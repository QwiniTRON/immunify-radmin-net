import React from 'react';
import {
  ArrayInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput
} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import BugReport from '@material-ui/icons/BugReport';
import Button from '@material-ui/core/Button';


type VaccineEditProps = {

}

const VaccineTitle: React.FC<any> = ({ record }) => (<span>{record.name || "Вакцина"}</span>);

export const VaccineEdit: React.FC<VaccineEditProps> = props => (
  <Edit {...props} title={<VaccineTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" title="id" fullWidth />
      <TextInput source="name" label="название" helperText="название" fullWidth />
      <TextInput source="description" label="описание" helperText="описание" multiline fullWidth />

      <Typography variant="h5">
        <BugReport /> болезни для данной прививки
      </Typography>
      <ArrayInput source="diseases" label="">
        <SimpleFormIterator addButton={<Button variant="contained" color="secondary">Добавить болезнь</Button>}>
          <ReferenceInput source="id" reference="diseas" label="болезнь" helperText="болезнь" fullWidth resettable >
            <SelectInput source="name" />
          </ReferenceInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
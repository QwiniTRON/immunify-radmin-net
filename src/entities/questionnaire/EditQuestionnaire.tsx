import React from 'react';
import { ArrayInput, Edit, ReferenceArrayInput, SelectArrayInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RichInput } from '../../components/RichInput';

type EditQuestionnaireProps = {}

const QuestionnaireTitle: React.FC<any> = ({ record }) => (<span>{record.title}</span>);

export const EditQuestionnaire: React.FC<EditQuestionnaireProps> = (props) => {
  return (
    <Edit {...props} title={<QuestionnaireTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth />


        <Box p={2} fontSize={32}>Вопросы</Box>

        <ArrayInput source="questions" label="" defaultValue={[]}>
          <SimpleFormIterator addButton={<Button variant="outlined" color="primary">добавить вопрос</Button>}>

            <TextInput source="text" fullWidth helperText="текст вопроса" label="текст вопроса" variant="filled" />

            <ArrayInput source="answers" label=""  defaultValue={[]}>
              <SimpleFormIterator addButton={<Button variant="outlined" color="secondary">добавить ответ</Button>}>

                <RichInput source="text" helperText="текст ответа" label="текст ответа" color="secondary" customVariant="outlined" />

                <ReferenceArrayInput source="diseaseIds" reference="disease" label="болезни" color="secondary" helperText="" defaultValue={[]}>
                  <SelectArrayInput optionText="name" variant="outlined" />
                </ReferenceArrayInput>
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};
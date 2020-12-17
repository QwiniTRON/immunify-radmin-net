import React from 'react';
import { ArrayInput, Create, DateInput, ReferenceArrayInput, ReferenceInput, SelectArrayInput, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RichInput } from '../../components/RichInput';




type CreateQuestionnaireProps = {}


const QuestionnaireTitle = () => (<span>создание опросника</span>);


const useStyles = makeStyles({
  answerInput: {

  },
  questoin: {
    width: '100%'
  }
});


const RichElem: React.FC<any> = ({ Elem, priority, ...props }) => {
  return (
    <Elem {...props} {...priority} />
  );
}

export const CreateQuestionnaire: React.FC<CreateQuestionnaireProps> = (props) => {
  const classes = useStyles();

  return (
    <Create {...props} title={<QuestionnaireTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth helperText="название" label="название" />


        <Box p={2} fontSize={32}>Вопросы</Box>

        <ArrayInput source="questions" label="" defaultValue={[]}>
          <SimpleFormIterator addButton={<Button variant="outlined" color="primary">добавить вопрос</Button>}>

            <TextInput source="text" fullWidth helperText="текст вопроса" label="текст вопроса" variant="filled" />

            <ArrayInput source="answers" label="" defaultValue={[]}>
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
    </Create>
  );
};
import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { ListActions } from '../../Layout';


type QuestionListProps = {

}

const QuestionPanel: React.FC<any> = ({ record }) => {
  return (
    <div>
      {record.answers && record.answers.map((d: any) => (
        <Chip color="primary" key={d.id} clickable label={d.text} component={Link} to={`/answers/${d.id}`} />
      ))}
    </div>
  );
};

export const QuestionList: React.FC<QuestionListProps> = props => (
  <List {...props} title="Вопросы" actions={<ListActions />}>
    <Datagrid expand={<QuestionPanel />} isRowSelectable={r => false}>
      <TextField source="question" />
      <EditButton label="редактировать" color="default" />
    </Datagrid>
  </List>
);
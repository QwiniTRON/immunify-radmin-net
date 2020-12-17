import React, { useState } from 'react';
import { EditButton, ReferenceManyField, Show, SingleFieldList, Tab, TabbedShowLayout, TextField, TopToolbar, useListContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppsIcon from '@material-ui/icons/Apps';
import { Loader } from '../../components/loader/loader';
import classes from '*.module.css';


const useStyles = makeStyles({
  sideMenu: {
    margin: '1em',
    width: 200,
    transition: 'opacity 300ms'
  },
  sideMenu_close: {
    width: 0,
    opacity: 0,
    overflow: 'hidden'
  },
  editMenu: {
    margin: 8
  }
});


const ShowQuestionnaireTitle: React.FC<any> = ({ record }) => (<span>{record.title}</span>);


type ShowQuestionnaireActionsProps = {
  [p: string]: any,
  menuToggleHandle: Function
}
const ShowQuestionnaireActions: React.FC<ShowQuestionnaireActionsProps> = ({
  basePath,
  data,
  resource,
  menuToggleHandle
}) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />

    <Button color="primary" onClick={(e: any) => menuToggleHandle()}><AppsIcon /></Button>
  </TopToolbar>
);


const Aside: React.FC<any> = ({ isOpen }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.sideMenu} ${isOpen ? '' : classes.sideMenu_close}`}>
      <Typography variant="h6">Прочие детали</Typography>
      <Typography variant="body2">
        Полезная информация для пользователя
    </Typography>
    </div>
  )
};


const QuestionsGrid: React.FC = () => {
  const { ids, data, basePath, loading } = useListContext();

  if (loading) return (<Loader />);

  return (
    <Box p={1}>
      {ids.map(id =>
      (
        <Box key={id} marginY={1}>
          <Typography variant="h6">
            {data[id].text}
          </Typography>
        </Box>
      )
      )}
    </Box>
  );
};



type ShowQuestionnaireProps = {}
export const ShowQuestionnaire: React.FC<ShowQuestionnaireProps> = (props) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const classes = useStyles();


  // дополняем данные по нашему опросу, ищем вопросы и ответы


  return (
    <Show
      actions={<ShowQuestionnaireActions menuToggleHandle={() => setIsAsideOpen((currentState: boolean) => !currentState)} />}
      aside={<Aside isOpen={isAsideOpen} />}
      {...props}
      title={<ShowQuestionnaireTitle />}>
      <TabbedShowLayout>
        <Tab label="опрос">
          <TextField source="title" label="название" />

          <Typography variant="h6">Вопросы</Typography>

          <ReferenceManyField label="" reference="question" target="QuestionnaireId" sort={{ field: '', order: '' }}>
            <QuestionsGrid />
          </ReferenceManyField>


          <EditButton variant="contained" color="secondary" className={classes.editMenu} />
        </Tab>
        <Tab label="статистика болезней" path="body">
          просто считаем болезни
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
};
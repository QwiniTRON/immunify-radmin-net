import React from 'react';
import { Admin, EditGuesser, fetchUtils, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import BugReport from '@material-ui/icons/BugReport';
import MapIcon from '@material-ui/icons/Map';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import { VaccineList } from './entities/vaccine/VaccineList';
import { DiseasList } from './entities/diseas/DiseasList';
import { VaccineEdit } from './entities/vaccine/VaccineEdit';
import { VaccineCreate } from './entities/vaccine/VaccineCreate';
import { DiseasEdit } from './entities/diseas/DiseasEdit';
import { DiseasCreate } from './entities/diseas/DiseasCreate';
import NotFound from './components/NotFound/NotFound';
import { theme } from './static/theme';
import { Menu } from './Layout';
import { QuestionList } from './entities/questions/QuestionsList';
import { QuestionEdit } from './entities/questions/QuestoinEdit';
import { QuestionCreate } from './entities/questions/CreateQuestion';
import { AnswerList } from './entities/answers/AnswersList';
import { AnswerEdit } from './entities/answers/AnswerEdit';
import { AnswerCreate } from './entities/answers/AnswerCreate';
import { ChatList } from './entities/chat/chatList';
import { ChatShow } from './entities/chat/ChatShow';
import { ProfesstionList } from './entities/profession/Profession';
import { RegionList } from './entities/region/Region';
import { ListQuestionnaire } from './entities/questionnaire/ListQuestionnaire';
import { EditQuestionnaire } from './entities/questionnaire/EditQuestionnaire';
import { ShowQuestionnaire } from './entities/questionnaire/ShowQuestionnaire';
import { CreateQuestionnaire } from './entities/questionnaire/CreateQuestionnaire';

const russianMessages = require('ra-language-russian');


const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

export default function App() {
  return (
    <Admin
      theme={theme}
      dataProvider={jsonServerProvider(process.env.REACT_APP_API_URL as string)}
      catchAll={NotFound}
      menu={Menu}
      i18nProvider={i18nProvider}
    >


      <Resource name="vaccine" 
      list={VaccineList} 
      create={VaccineCreate}
      edit={VaccineEdit}
      icon={PostIcon} options={{
        label: 'Вакцины'
      }} />


      <Resource name="disease"
        list={DiseasList}
        create={DiseasCreate}
        edit={DiseasEdit}
        icon={BugReport}
        options={{
          label: 'Болезни'
        }} />


      <Resource name="question" options={{
        label: 'Вопросы'
      }} />


      <Resource name="questionnaire"
        edit={EditQuestionnaire}
        list={ListQuestionnaire}
        show={ShowQuestionnaire}
        create={CreateQuestionnaire}
        options={{
          label: 'опросники'
        }} />


      <Resource name="answer" options={{
        label: 'ответы'
      }} />



      {/* <Resource name="answers" /> */}
      {/* <Resource name="profession" list={ProfesstionList} icon={CardTravelIcon} options={{
        label: 'профессии'
      }} /> */}

      {/* <Resource name="region" list={RegionList} icon={MapIcon} options={{
        label: 'регион'
      }} /> */}

    </Admin>
  );
}

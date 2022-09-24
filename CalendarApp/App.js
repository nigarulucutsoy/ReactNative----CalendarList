/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View
} from 'react-native';
import {Calendar,LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';
LocaleConfig.locales['tr']={
monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
monthNamesShort:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],
today:"Bugün",
dayNames: ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],
dayNamesShort:["Pzr","Pzt","Sal","Çar","Per","Cum","Cmt"],
}
LocaleConfig.defaultLocale='tr'
const App = () => {
  return(
    <>
    <CalendarList
     theme={{
      calendarBackground:"#FEF9E7",
      dayTextColor:"#DC7633",
      monthTextColor:"#a0522d",
      textSectionTitleColor: '#a0522d',
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textMonthFontWeight: '700',
      textDayHeaderFontWeight: 'bold',
      textDisabledColor: '#EDBB99', }}

     onDayPress={(e)=>{
      console.log('e', e)
     }}
     onDayLongPress={(e)=>{
      console.log('e',e)
     }}
     onMonthChange={(e)=>{
      console.log('e',e)
     }}
     onPressArrowLeft={(goBack)=>{
      console.log("gobackmonth")
      goBack()}}
      onPressArrowRight={(goFuture)=>{
        console.log("goFuturemonth")
        goFuture()}}

        markingType={'period'}
        markedDates={{
          '2022-09-15': {marked: true, dotColor: '#50cebb'},
          '2022-09-16': {marked: true, dotColor: '#50cebb'},
          '2022-09-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
          '2022-09-22': {color: '#70d7c7', textColor: 'white'},
          '2022-09-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
          '2022-09-24': {color: '#70d7c7', textColor: 'white'},
          '2022-09-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
        }}

        
    firstDay={1} 
    style={{height:"100%"}}
    />
    </>
  );
}

export default App;

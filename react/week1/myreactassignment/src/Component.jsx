import React from 'react';
import Header from './Header';
import Activities from './Activities';



class Component extends React.Component{
    render(){
       const activities = ['Get out of bed', 'Brush Teeth', 'Eat Breakfast'];
       const dates = ['Wed Sep 13 2017', 'Thu Sep 14 2017', 'Fri Sep 15 2017'];
       return(
           <div id='a'>
               <h1>Todo List App</h1>
               <Header />
               <Activities myActivities = {activities} myDates = {dates}/>

           </div>

       )

    }
}



export default Component;

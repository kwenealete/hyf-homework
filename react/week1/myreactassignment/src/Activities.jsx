import React from 'react';

class Activities extends React.Component{
    render(){
        return(
            <div className='flex'>
                <ul >
                    <h3>Activity</h3>
                {this.props.myActivities.map((activity, i) => <li className='mylist' id='activity' key={i}>{activity}</li>)}
                
            </ul>
            <ul>
                <h3>Time</h3>
            {this.props.myDates.map((date) => <li className='mylist' id='date'>{date}</li>)}
            </ul>
            </div>
            
        )
        
    }
}

export default Activities;
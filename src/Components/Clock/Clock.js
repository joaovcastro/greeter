import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const Clock = () => {
    let [time, setTime] = useState(new Date());

    setInterval(() => setTime(new Date()), 1000);
  
    return (
        <div>
            <h3> {days[time.getDay() - 1]} </h3>
            <h1> {`${time.toISOString().substr(11, 8)}`} </h1>
            <h2> {`${months[time.getMonth()]} ${time.getDate()}` } </h2> 
        </div>
    );
}

export default Clock;

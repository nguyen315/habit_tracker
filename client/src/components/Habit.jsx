import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Habit() {
    const [habits, setHabits] = useState([]);
    useEffect(async () => {
        const result = await axios(
            process.env.REACT_APP_SERVER + '/123'
        );
        setHabits(result.data);
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Habit

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const MyDayLeft = ({ styles }) => {
    const tasks = [
        {
            id: uuidv4,
            taskDesc: 'Pick some flowers',
            editable: true,
            check: false
        },
        {
            id: uuidv4,
            taskDesc: 'Finish this page.',
            editable: true,
            check: false
        }
    ]

    const handleCheck = () => {
        console.log('checked');
    }

    const handleAdd = () => {
        console.log('add task');
    }
    return (
        <div>
            <h3>
                Tasks that I have to do today
            </h3>
            <div className={styles.inputBtnSection}>
                <input type="text" className={styles.inputLeft} placeholder="Add Task...." />
                <div className={styles.buttonLeft} onClick={handleAdd}><span>Add</span></div>
            </div>
            <div className={styles.taskList}>
               {tasks.map(task => {
                    return (<div key={task.id} className={styles.taskBox}>
                        <input type="checkbox" onChange={handleCheck}/><span className={styles.taskDesc}>{task.taskDesc}</span>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default MyDayLeft;
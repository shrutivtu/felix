import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const MyDayLeft = ({ styles }) => {
    const [haveToDoTasks, setHaveToDoTasks] = useState([]);
    const [taskDesc, setTaskDesc] = useState('');

    const handleCheck = (id) => {
        // let actionTask = haveToDoTasks.filter((task) => task.id == id);
        // let status = actionTask[0].check;
        // actionTask[0].check = !status;

        let updatedTasks = haveToDoTasks.map(task => {
            if(task.id !== id){
                return task;
            }
            else{
                let status = task.check;
                task.check = !status;
                return task;
            }
        })
        setHaveToDoTasks(updatedTasks);
    }

    const handleAdd = () => {
        const obj = {
            id: uuidv4(),
            taskDesc: taskDesc,
            editable: true,
            check: false
        }
        setHaveToDoTasks([...haveToDoTasks, obj]);
    }
    return (
        <div>
            <h3>
                Tasks that I have to do today
            </h3>
            <div className={styles.inputBtnSection}>
                <input type="text" className={styles.inputLeft} placeholder="Add Task...." onChange={(e) => setTaskDesc(e.target.value)}/>
                <div className={styles.buttonLeft} onClick={handleAdd}><span>Add</span></div>
            </div>
            {haveToDoTasks.length > 0 && <div className={styles.taskList}>
               {haveToDoTasks.map(task => {
                    if(!task.check){
                        return (<div key={task.id} className={styles.taskBox}>
                            <input type="checkbox" onChange={() => handleCheck(task.id)} id={task.id} /><span className={styles.taskDesc}>{task.taskDesc}</span>
                        </div>)
                    }
                    else{
                        return (<div key={task.id} className={`${styles.taskBox} ${styles.checkTaskBox}`}>
                            <input type="checkbox" onChange={() => handleCheck(task.id)} id={task.id} /><span className={styles.taskDesc}>{task.taskDesc}</span>
                        </div>)
                    }
                })}
            </div>}
        </div>
    )
}

export default MyDayLeft;
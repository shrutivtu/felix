import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MyDayRight = ({ styles }) => {
  const [desiredTasks, setDesiredTasks] = useState([]);
  const [taskDesc, setTaskDesc] = useState("");

  const handleCheck = (id) => {
    let updatedTasks = desiredTasks.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        let status = task.check;
        task.check = !status;
        return task;
      }
    });
    setDesiredTasks(updatedTasks);
  };

  const handleAdd = () => {
    const obj = {
      id: uuidv4(),
      taskDesc: taskDesc,
      editable: true,
      check: false,
    };
    setDesiredTasks([...desiredTasks, obj]);
  };
  return (
    <div>
      <h3>Tasks that I want to do today</h3>
      <div className={styles.inputBtnSection}>
        <input
          type="text"
          className={styles.inputRight}
          placeholder="Enter Desired Tasks..."
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <div className={styles.buttonRight} onClick={handleAdd}>
          <span>Add</span>
        </div>
      </div>
      {desiredTasks.length > 0 && <div className={styles.taskList}>
        {desiredTasks.map(task => {
          if (!task.check) {
            return (<div key={task.id} className={styles.taskBox}>
              <input type="checkbox" onChange={() => handleCheck(task.id)} id={task.id} /><span className={styles.taskDesc}>{task.taskDesc}</span>
            </div>)
          }
          else {
            return (<div key={task.id} className={`${styles.taskBox} ${styles.checkTaskBox}`}>
              <input type="checkbox" onChange={() => handleCheck(task.id)} id={task.id} /><span className={styles.taskDesc}>{task.taskDesc}</span>
            </div>)
          }
        })}
      </div>}
    </div>
  );
};

export default MyDayRight;

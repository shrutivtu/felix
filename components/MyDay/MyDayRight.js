import React from 'react'

const MyDayRight = ({styles}) => {
  return (
    <div>
        <h3>
            Tasks that I want to do today
        </h3>
        <div className={styles.inputBtnSection}>
            <input type="text" className={styles.inputRight}/>
            <div className={styles.buttonRight}><span>Add</span></div>
        </div>
    </div>
  )
}

export default MyDayRight
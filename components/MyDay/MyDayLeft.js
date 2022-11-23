import React from 'react'

const MyDayLeft = ({styles}) => {
  return (
    <div>
        <h3>
            Tasks that I have to do today
        </h3>
        <div className={styles.inputBtnSection}>
            <input type="text" className={styles.inputLeft}/>
            <div className={styles.buttonLeft}><span>Add</span></div>
        </div>
    </div>
  )
}

export default MyDayLeft;
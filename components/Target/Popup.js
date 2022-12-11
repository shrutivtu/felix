import React, { useState } from 'react';

const Popup = ({ styles }) => {
    const [openPopup, setOpenPopup] = useState(false);
    const handlePopup = (e) => {
        console.log('clicked');
        setOpenPopup(!openPopup);
        if (e.stopPropagation) e.stopPropagation();
    }
    const Modal = () => {
        return(
            <section className={styles.popupContainer}>
                <div className={styles.crossSection}><span onClick={handlePopup}>x</span></div>
                <form>
                    <input type="text" placeholder='Enter Target' className={styles.targetName} />
                    <input type="text" placeholder='Enter Description' className={styles.targetDesc} />
                    <span>Submit</span>
                </form>
            </section>
        )
    }
    return(
        <>
            <section className={styles.targetCreation} onClick={handlePopup}>
                <span>+ Create Target</span>
            </section>
            {openPopup && <Modal />}
        </>
    )
}

export default Popup;
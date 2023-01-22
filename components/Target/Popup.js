import React, { useEffect, useState, useContext } from 'react';
import { FelixContext } from '../../context';
const Popup = ({ styles }) => {
    const [openPopup, setOpenPopup] = useState(false);
    const [target, setTarget] = useState({ name: '', desc: '' });
    const {setTargets,targets} = useContext(FelixContext);


    useEffect(()=>{
        console.log("targets...........$$$$$$$$$$$$$$$$$$$$",targets);
    },[targets])

    const handlePopup = (e) => {
        setOpenPopup(!openPopup);
    }

    const handleSubmit = (e) => {
        console.log(target);
        let {list} = targets;
        console.log("list",list)
        list.push(target)
        setTargets({...targets,list});
    }
    const modal = () => {
        return(
            <section className={styles.popupContainer}>
                <div className={styles.crossSection}><span onClick={handlePopup}>x</span></div>
                <form>
                    <input 
                        type="text" 
                        placeholder='Enter Target' 
                        className={styles.targetName} 
                        onChange={(e) => setTarget({ ...target, name: e.target.value })} 
                    />
                    <input 
                        type="text" 
                        placeholder='Enter Description' 
                        className={styles.targetDesc} 
                        onChange={(e) => setTarget({ ...target, desc: e.target.value })}
                    />
                    <span onClick={handleSubmit}>Submit</span>
                </form>
            </section>
        )
    }
    return(
        <>
            <section className={styles.targetCreation} onClick={handlePopup}>
                <span>+ Create Target</span>
            </section>
            {openPopup && modal()}
        </>
    )
}

export default Popup;
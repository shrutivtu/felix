import React, {useEffect, useContext} from 'react';
import styles from '../../../styles/Target.module.scss';
import { FelixContext } from '../../../context';

const TargetTable = () => {

    const {setTargets,targets} = useContext(FelixContext);
    useEffect(()=>{
        console.log("targets in table component",targets);   
    },[targets.list])


    return(<section className={styles.tableSection}>
        <div className={styles.tableHeader}>
            <div className={styles.tableHead}><span>Target</span></div>
            <div className={styles.tableHead}><span>Comment</span></div>
            <div className={styles.tableHead}><span>Action</span></div>
        </div>
        <div className={styles.tableBody}>
            <div className={styles.tableRow}>
                <div><span>Coding</span></div>
                <div><span>Just Do It</span></div>    
                <div><span>Edit</span></div>
            </div>
            <div className={styles.tableRow}>
                <div><span>Reading</span></div>
                <div><span>Just Do It</span></div>    
                <div><span>Edit</span></div>
            </div>
            <div className={styles.tableRow}>
                <div><span>Coding</span></div>
                <div><span>Just Do It</span></div>    
                <div><span>Edit</span></div>
            </div>
            <div className={styles.tableRow}>
                <div><span>Reading</span></div>
                <div><span>Just Do It</span></div>    
                <div><span>Edit</span></div>
            </div>
            {targets.list.map((data,id)=>
                <div>
                    {data.name}
                    <span></span>
                </div>
            )}
        </div>
    </section>)
}

export default TargetTable;
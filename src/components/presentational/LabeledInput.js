import React from 'react'
import styles from './LabeledInput.css'

const LabeledInput = ({name, label, ...props}) => {
    return (
        <div className={styles.group}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            {/* if the type is defined in props it will overwrite the specified type here. */}
            <input className={styles.input} id={name} type="text" {...props}/>
        </div>
    )
};

export default LabeledInput;

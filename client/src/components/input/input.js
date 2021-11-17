import React from "react";
import styles from './input.module.css';

const Input = ({ label, id, value, onChange, type }) => {
    return (
        <div className={styles['form-control']}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={styles.input} id={id} type={type || 'text'} value={value} onChange={onChange} />
        </div>
    )
}

export default Input;
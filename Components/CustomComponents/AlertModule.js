import React from "react";
import styles from './AlertModule.module.scss';

const AlertModule = ({ items }) => {
    return (
        <div className="alert alert-danger" role="alert" >
            <ul>
                {items?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default AlertModule;
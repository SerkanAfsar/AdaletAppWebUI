import React from "react";
import styles from './ErrorComponent.module.scss';

const ErrorComponent = ({ errors }) => {
    return (
        <div class="alert alert-danger" role="alert">
            <ul className={styles.list}>
                {errors && errors.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}
export default ErrorComponent;
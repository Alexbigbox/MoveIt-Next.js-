import styles from './Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Alexbigbox.png" alt="Alexander Kruger" />
            <div>
                <strong>Alexander Kruger</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
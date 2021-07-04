import { useContext } from 'react';
import Image from 'next/image';
import levelImg from '../../../public/icons/level.svg';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './Profile.module.css';


export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <Image 
                className={styles.imgProfile}
                src="https://github.com/Alexbigbox.png"
                alt="Alexander Kruger" 
                width={50} 
                height={50} 
 
            />
            <div>
                <strong>Alexander Kruger</strong>
                <p>
                    <Image 
                        src={levelImg}
                        alt="level" 
                        width={20} 
                        height={20}  />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
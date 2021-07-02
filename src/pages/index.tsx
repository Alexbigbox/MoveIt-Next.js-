import Head from 'next/head';

import { ExperienceBar } from "../components/experienceBar/ExperienceBar";
import { Profile } from '../components/profile/Profile';
import { CompleteChallenges } from '../components/completeChallenges/CompleteChallenges';
import { Countdown } from '../components/countdown/Countdown';
import { ChallengeBox } from '../components/challengeBox/ChallengeBox';

import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
  <>  
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      </Head>

        <ExperienceBar />


        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
    </div>
  </>
  )
}

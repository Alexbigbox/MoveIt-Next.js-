import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { ExperienceBar } from "../components/experienceBar/ExperienceBar";
import { Profile } from '../components/profile/Profile';
import { CompleteChallenges } from '../components/completeChallenges/CompleteChallenges';
import { Countdown } from '../components/countdown/Countdown';
import { ChallengeBox } from '../components/challengeBox/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { number } from 'prop-types';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  return (
  <>  
  <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
  >
    <div className={styles.container}>
      <Head>
        <title>Início | Moveit</title>
      </Head>

        <ExperienceBar />

        <CountdownProvider>
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
        </CountdownProvider>
    </div>
    </ChallengesProvider>  
  </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted }  = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
import './AboutMeText.css';
import myCV from '../../cv/FABIOGUERREIRO_webdevCVEN.pdf'
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { useState } from 'react';
import { useEffect } from 'react';

function AboutMeText({languages}) {
  //translation hook

  const { t } = useTranslation();


  return (
    <>
      <p>
        {t("I am a Web Developer based in Lisbon, Portugal. I first started to deal with the world of tech in 2014 when I did a multimedia course in Lisbon. Although I did not pursue a career in the big world of tech at the time I was always keeping an eye on it and after completing a bachelor's and a master's degree in Translation I decided to completely change my life around.")}
      </p>
      <br></br>{t("In 2020 I started to play with HTML, CSS and JavaScript and I became addicted on how things worked and on how I could learn more. After that, in 2021, I completed a Full Stack Web Development course focused on the MERN stack and my goal for the future is to combine technology with beautiful designs and aesthetics.")}
      <br></br>
      <br></br>
      <p>
        <b>{t("My Hobbies")}</b>
      </p>
      <p>
        {t("Drawing Manga art, playing online games and binge-watch anime and series whenever I can.")}
      </p>
      <br></br>
      <p>
        <b>{t("What's next for me")}</b>
      </p>
      {t("I plan on learning and studying more about Algorithms and Data Structure. Learn SASS, React Native and C#.")}
      <br></br>
      <div className='cv-wrap'>
      <a href={myCV} download className='cv-btn'>Download CV</a>
      
      </div>
    </>
  );
}

export default AboutMeText;

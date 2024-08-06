import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import profileImage from '../../public/images/photo de profil.jpg';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Image src={profileImage} alt="Abderrahmane Allal" className={styles.profileImage} />
        <div className={styles.heroContent}>
          <h1>Bienvenue sur mon portfolio</h1>
          <p>
            Je suis <strong>Abderrahmane Allal</strong>, étudiant en programmation informatique au Collège La Cité, bientôt diplômé. Passionné par le développement web et les technologies émergentes, j'ai acquis des compétences solides dans plusieurs domaines clés tels que le développement serveur web, la programmation web, et la cybersécurité.
          </p>
          <p>
            Mes compétences incluent les langages et technologies suivants : <strong>JAVA, C#, HTML, CSS, SQL Server</strong>, ainsi que les frameworks et bibliothèques modernes. Je suis constamment en quête d'amélioration et de nouvelles connaissances, et j'aspire à contribuer à des projets innovants qui ont un impact significatif.
          </p>
          <p>
            En dehors de mes études, je m'intéresse également à l'intelligence artificielle, au machine learning, et à la sécurité des systèmes d'information. Mon objectif est de continuer à développer mes compétences et de jouer un rôle actif dans l'évolution de la technologie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

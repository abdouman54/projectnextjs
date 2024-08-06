import React from 'react';
import Image from 'next/image'; 
import styles from '../styles/Projects.module.css';
import GeoquizzImage from '../../public/images/Geoquizz.jpg';
import DeviseconverterImage from '../../public/images/currency-app.jpg';

const projects = [
  {
    id: 1,
    title: 'Application de Quiz Geographie',
    description: 'Une application web permettant aux utilisateurs de tester leurs connaissances géographiques à travers divers quiz.',
    technologies: 'Android Studio, Java',
    image: GeoquizzImage,
  },
  {
    id: 2,
    title: 'Curency Converter',
    description: 'Une application web permettant aux utilisateurs de convertir des devises en temps réel.',
    technologies: 'C#, Visual Studio',
    image: DeviseconverterImage,
  },
];

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Mes Projets</h1>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div className={styles.projectItem} key={project.id}>
            <Image src={project.image} alt={project.title} className={styles.projectImage} width={250} height={250} />
            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies utilisées :</strong> {project.technologies}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

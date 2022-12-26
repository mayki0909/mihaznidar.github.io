import { IProject } from '../../interfaces';
import styles from './projects.module.scss';

import Arrow from '/public/icons/arrow.svg';

interface Props {
  project: IProject;
}

export const Project = (props: Props) => { 
  return (
    <div className={`col-12 col-md-6 mt-4 ${styles.project}`}>
      <img src={`/assets/projects/${props.project.image}`} alt={props.project.name} />
      <p className={styles.year}><span>YEAR: </span>{props.project.createdAt.getFullYear()}</p>
      <p className={styles.roles}><span>ROLES: </span>{props.project.roles.join(', ')}</p>
      <p className={styles.tecnologies}><span>TECHNOLOGIES: </span>{props.project.technologies.join(', ')}</p>
      <div className={styles.nameDiv}>
        <p className={styles.name}> {props.project.name} </p>
        <a className={styles.link} href={`/project/${props.project.slug}`}>
          <Arrow  width={24} height={24}/>
        </a>
      </div>

    </div>
  )
}
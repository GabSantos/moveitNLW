import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentXp, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentXp * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentXp} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

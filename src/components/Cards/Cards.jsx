import React from 'react';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <div className = {styles.coronaAreaFont}>As of {new Date(lastUpdate).toDateString()}</div>
      <br></br>
      <pre className = {styles.coronaInfected}>Infected : {confirmed.value}</pre>
      <pre className = {styles.coronaRecovered}>Recovered: {recovered.value}</pre>
      <pre className = {styles.coronaDead}>  Dead  : {deaths.value}</pre>
      <br></br>
    </div>
  );
};
export default Info;

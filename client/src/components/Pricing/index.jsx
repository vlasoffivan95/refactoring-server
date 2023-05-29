import React from 'react';
import styles from './style.module.scss';

function Pricing({
  titleName,
  description,
  price,
  prize_to_winner,
  validation_and_upgrade,
  validation_and_upgrade_list,
  expected,
  partial_refund,
  title,
}) {
  let listBenefits;
  if (validation_and_upgrade_list) {
    listBenefits = validation_and_upgrade_list.map((componentList) => (
      <li key={componentList.toString()}>{componentList}</li>
    ));
  } else {
    listBenefits = null;
  }

  return (
    <div>
      <section
        className={`${styles.sectionCard} ${styles[`section${titleName}`]}`}
      >
        <div>
          <h2 className={`${styles[`title${titleName}`]} ${styles.titleName}`}>
            {titleName}
          </h2>
          <p className={styles.description}>{description}</p>
        </div>
        <p className={`${styles[`price${titleName}`]} ${styles.price}`}>US${price}</p>
      </section>
      <section className={styles.cardDescription}>
        {prize_to_winner? <div className={styles.divDescription}>
          Prize to Winner - $ {prize_to_winner}
        </div> : null}
        
        {validation_and_upgrade ? <div className={styles.divDescription}>
          {validation_and_upgrade}
          {listBenefits ? (
            <p className={styles.liDescription}>{listBenefits}</p>
          ) : null}
        </div> : null}

        {expected? <div className={styles.divDescription}>{expected}</div>:null}
        {partial_refund ? (
          <div className={styles.divDescription}>{partial_refund}</div>
        ) : null}

        {title?<div className={styles.titleDescription}>{title}</div>:null }

        <button className={`${styles[`btn${titleName}`]} ${styles.btn}`}>✓Start</button>
      </section>
    </div>
  );
}

export default Pricing;

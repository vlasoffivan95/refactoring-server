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
        <p className={styles.price}>US${price}</p>
      </section>
      <section className={styles.cardDescription}>
        <p className={styles.pDescription}>
          Prize to Winner - $ {prize_to_winner} (Included)
        </p>
        <p className={styles.pDescription}>
          {validation_and_upgrade} (Included)
        </p>
        <p className={styles.pDescription}>{expected}</p>
        {partial_refund ? (
          <p className={styles.pDescription} display>
            {partial_refund}
          </p>
        ) : null}

        <button className={styles.btn}>✓Start</button>
        {listBenefits}
      </section>
    </div>
  );
}

export default Pricing;

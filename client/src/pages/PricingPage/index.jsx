import React from 'react';
import Pricing from '../../components/Pricing';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './styles.module.scss'
import STATUS from '../../data/constants';
const {BRONZE, GOLD, PLATINUM, MANAGED} = STATUS

const PricingPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.priceContainer}>
            <div className={styles.card}><Pricing {...BRONZE}/></div>
            <div className={styles.card}><Pricing {...GOLD} /></div>
            <div className={styles.card}><Pricing {...PLATINUM}/></div>
            <div className={styles.card}><Pricing {...MANAGED}/></div>


            </div>
            <Footer/>
        </div>
    );
}

export default PricingPage

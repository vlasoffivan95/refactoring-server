import React from 'react';
import Pricing from '../../components/Pricing';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './styles.module.scss'
import STATUS from '../../data/constants';
const {BRONZE, GOLD, MANAGED} = STATUS

const PricingPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.priceContainer}>
            <Pricing {...BRONZE}/>
            </div>
            <Footer/>
        </div>
    );
}

export default PricingPage

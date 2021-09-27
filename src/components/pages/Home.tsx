import React from 'react'
import styles from './Home.module.css'
import profileBanner from '../../img/profile-banner.jpeg'

export default function Home() {
    return (
        <>
            <div className={styles.profileBannerWrapper}>
                <img src={profileBanner} alt="profile banner" className={styles.profileBanner}/>
            </div>
        </>
    )
}

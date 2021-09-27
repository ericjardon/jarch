import React from 'react'
import styles from './Index.module.css'


export default function Index() {
    return (
        <div className={styles.container}>
            <span className={styles.heading}><b className={styles.home}>Hello,</b> world!</span>
            <p className={styles.home}>I am an aspiring software engineer from mexico city. 
                <br/><br/> 
                I am passionate about food, music, <br/> and computer programs.
            </p>
            <p className={styles.home}>
                Whether you're a professional contact or a close friend, <br/> you will find
                (almost) everything about me here.
            </p>
            <p className={styles.home}>Please enjoy your visit.</p>
        </div>
    )
}

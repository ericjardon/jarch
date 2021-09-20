import React from 'react'
import styles from './Home.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
            <span className={styles.heading}>Hello, <b className={styles.home}>world!</b></span>
            <p className={styles.home}>I am an aspiring software engineer from mexico city. 
                <br/><br/> 
                I am passionate about food, computer programs, <br/>and visually pleasing things.
            </p>
            <p className={styles.home}>
                Whether you're a professional contact or a close friend, <br/> you will find
                (almost) everything about me here.
            </p>
            <p className={styles.home}>I hope you enjoy your visit.</p>
        </div>
    )
}

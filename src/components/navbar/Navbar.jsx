"use client"

import Link from 'next/link'
import React from 'react'
import { LINKS } from './consts';
import styles from './page.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>Fahim</Link>
        <div  className={styles.links}>
            {LINKS.map((link) => (
                <Link key={link.id} className={styles.link} href={link.url}>{link.title}</Link>
            ))}
            <button
            className={styles.logout}
             onClick={() => {
                console.log('Loged out')
            }}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
Navbar
import styles from './page.module.css'
import Accordion from './_components/Accordion'
import Services from './_components/Services'
import Faqs from './_components/FAQs'
import Contact from './_components/Contact'


export default function Home() {
  return (
    <main className={styles.main}>
      
      <header className={styles.header_container}>
        <div className={styles.link_container}>
          <a href="#contact" className={styles.header_link}>Contact</a>
        </div>
      </header>
      
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <p className={styles.hero_heading}>I build digital <span className={styles.highlight}>solutions</span> for small businesses</p>
          <p className={styles.subheading}>...and my services are free!</p>
          <a href="#about" className={styles.button}>Learn more</a>
        </div>
      </div>
      
      <div className={styles.grid_container} id="about">
        <div className={styles.grid}>
          <Services/>
        </div>
      </div> 

      <div className={styles.footer_container} id="contact">
        <div className={styles.footer_content}>
          <p className={styles.footer_heading}>Get in touch for a <span className={styles.highlight}>free</span> consultation</p>
          <div className={styles.contact_container}>
            <Contact/>
          </div>
        </div>
      </div>

    </main>
  )
}
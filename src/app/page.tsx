import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main} id="welcome">
      <nav className={styles.header}>
        <div className={styles.link_container}>
          <a href="#contact" className={styles.header_link}>Contact</a>
          <a href="#questions" className={styles.header_link}>FAQs</a>
        </div>
      </nav>
      
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <p className={styles.hero_heading}>I build digital <span className={styles.highlight}>solutions</span> for small businesses</p>
          <p className={styles.subheading}>...and my services are free!</p>
          <a href="#about" className={styles.button}>Learn more</a>
        </div>
      </div>
      <div className={styles.grid_container} id="about">
        <div className={styles.grid}>

          <div className={styles.card}>
            <Image
              src="/design.svg"
              alt="Swatch Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <h1 className={styles.grid_heading}>UX / UI</h1>
              <p className={styles.paragraph}>Designing visually appealing websites that reflect your brand.</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/web.svg"
              alt="Web Dev Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <p className={styles.grid_heading}>Web Development</p>
              <p className={styles.paragraph}>Developing high-quality websites for seamless user experiences.</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/seo.svg"
              alt="SEO Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <p className={styles.grid_heading}>SEO</p>
              <p className={styles.paragraph}>Maximizing visibility on major search engines.</p>
            </div>     
          </div>

          <div className={styles.card}>
            <Image
              src="/security.svg"
              alt="Security Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <h1 className={styles.grid_heading}>Cybersecurity</h1>
              <p className={styles.paragraph}>Securing your website against common threats.</p>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/analytics.svg"
              alt="Analytics Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <h1 className={styles.grid_heading}>Analytics</h1>
              <p className={styles.paragraph}>Interpreting website data for insights into user behaviour.</p>
            </div>
          </div>
          
          <div className={styles.card}>
            <Image
              src="/app.svg"
              alt="Database Icon"
              className={styles.icon}
              width={40}
              height={40}
              priority
            />
            <div>
              <h1 className={styles.grid_heading}>Custom Software</h1>
              <p className={styles.paragraph}>Engineering web applications to meet specific business needs.</p>
            </div>
          </div>

        </div>
      </div> 
      <div className={styles.faq_container} id="questions">
        <p>hello</p>
      </div>
      <div className={styles.footer_container} id="contact">
        <div className={styles.footer_content}>
          <p className={styles.footer_heading}>Schedule a <span className={styles.highlight}>free</span> consultation</p>
          <a className={styles.button}>Contact</a>
        </div>
      </div>
    </main>
  )
}
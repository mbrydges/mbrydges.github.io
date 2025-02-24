import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
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
            <p className={styles.heading}>Web Development</p>
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
            <p className={styles.heading}>SEO</p>
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
            <h1 className={styles.heading}>Cybersecurity</h1>
            <p className={styles.paragraph}>Securing your website against common threats.</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/app.svg"
            alt="Construction Icon"
            className={styles.icon}
            width={40}
            height={40}
            priority
          />
          <div>
            <h1 className={styles.heading}>Custom Software</h1>
            <p className={styles.paragraph}>Engineering web applications to meet specific business needs.</p>
          </div>
        </div>
      </div> 
    </main>
  )
}

/*
<main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    */
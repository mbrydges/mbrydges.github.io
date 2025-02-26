import styles from '../page.module.css'
import Image from 'next/image'

const icons = [
  {
    src: "/reddit.svg",
    alt: 'Reddit Icon',
    href: 'https://www.reddit.com/r/volunteerDev/'
  },
]

export default async function Contact() { 
  return icons.map(({src, alt, href}) => (
    <a href={href} target="_blank" className={styles.header_link}>
      <Image
        src={src}
        alt={alt}
        className={styles.icon}
        width={36}
        height={36}
        priority
      />
    </a>
  ))
}
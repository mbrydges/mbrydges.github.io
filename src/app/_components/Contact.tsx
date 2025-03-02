import styles from '../page.module.css'
import Image from 'next/image'

const icons = [
  {
    src: "/email.svg",
    alt: 'Email Icon',
    href: "mailto:mbrydges@proton.me"
  },
]

export default async function Contact() { 
  return icons.map(({src, alt, href}, index) => (
    <a key={index} href={href} className={styles.header_link}>
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
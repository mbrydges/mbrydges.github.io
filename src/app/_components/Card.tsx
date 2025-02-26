import styles from '../page.module.css'
import Image from 'next/image'
 
type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default async function Card({src, alt, title, description}: CardProps) { 
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        className={styles.icon}
        width={36}
        height={36}
        priority
      />
      <div>
        <p className={styles.grid_heading}>{title}</p>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  )
}
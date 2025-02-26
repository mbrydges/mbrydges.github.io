import Card from './Card'
 
const cards = [
  {
    src: "/design.svg",
    alt: 'Swatch Icon',
    title: 'UX / UI',
    description: 'Designing visually appealing websites that reflect your brand.'
  },
  {
    src: "/web.svg",
    alt: 'Web Dev Icon',
    title: 'Web Development',
    description: 'Developing high-quality websites for seamless user experiences.'
  },
  {
    src: "/seo.svg",
    alt: 'SEO Icon',
    title: 'SEO',
    description: 'Maximizing visibility on major search engines.'
  },
  {
    src: "/security.svg",
    alt: 'Security Icon',
    title: 'Cybersecurity',
    description: 'Securing your website against common threats.'
  },
  {
    src: "/analytics.svg",
    alt: 'Analytics Icon',
    title: 'Analytics',
    description: 'Interpreting website data for insights into user behaviour.'
  },
  {
    src: "/app.svg",
    alt: 'Database Icon',
    title: 'Custom Software',
    description: 'Engineering web applications to meet specific business needs.'
  }
]

export default async function Services() { 
  return cards.map(({src, alt, title, description}, index) => (
    <Card
      key={index} 
      src={src}
      alt={alt}
      title={title}
      description={description}
    />
  ))
}
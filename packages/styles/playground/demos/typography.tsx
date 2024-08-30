import { caption, display, text, title } from '../../src'
import { DemoContainer } from '../components/demo'

export default function TypographyDemo() {
  return (
    <DemoContainer>
      <h1 className={`${display({ size: '4xl' })}`}>Display 4xl</h1>
      <h1 className={`${display({ size: '5xl' })}`}>Display 5xl</h1>
      <h1 className={`${display({ size: '6xl' })}`}>Display 6xl</h1>
      <h1 className={`${display({ size: '7xl' })}`}>Display 7xl</h1>
      <h1 className={`${display({ size: '8xl' })}`}>Display 8xl</h1>
      <h1 className={`${display({ size: '9xl' })}`}>Display 9xl</h1>

      <h1 className={`${title({ size: 'base' })}`}>Heading base</h1>
      <h2 className={`${title({ size: 'lg' })}`}>Heading lg</h2>
      <h3 className={`${title({ size: 'xl' })}`}>Heading xl</h3>
      <h4 className={`${title({ size: '2xl' })}`}>Heading 2xl</h4>
      <h5 className={`${title({ size: '3xl' })}`}>Heading 3xl</h5>

      <p className={`${text({ size: 'sm' })}`}>Sm: Highly customizable components for building modern websites and applications that look and feel the way you want.</p>
      <p className={`${text({ size: 'base' })}`}>Base: Highly customizable components for building modern websites and applications that look and feel the way you want.</p>
      <p className={`${text({ size: 'lg' })}`}>Lg: Highly customizable components for building modern websites and applications that look and feel the way you want.</p>
      <p className={`${text({ size: 'xl' })}`}>Xl: Highly customizable components for building modern websites and applications that look and feel the way you want.</p>

      <caption className={`${caption({ size: 'xs' })}`}>xs: Caption</caption>
      <caption className={`${caption({ size: 'sm' })}`}>sm: Caption</caption>
      <caption className={`${caption({ size: 'base' })}`}>base: Caption</caption>
    </DemoContainer>
  )
}

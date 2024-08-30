import { Progress, ProgressIndicator } from '@radix-ui/react-progress'
import { useEffect, useState } from 'react'
import { progress } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function ProgressDemo() {
  const [value, setValue] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setValue(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DemoContainer>
      <DemoFlexRow>
        <Progress className={`${progress}`}>
          <ProgressIndicator
            className={`${progress.indicator}`}
            style={{ transform: `translateX(-${100 - value}%)` }}
          />
        </Progress>
      </DemoFlexRow>
    </DemoContainer>
  )
}

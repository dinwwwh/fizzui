import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { progress } from '@fizzui/styles'
import { Progress, ProgressIndicator } from '@radix-ui/react-progress'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/demos/progress')({
  component: ProgressDemoPage,
})

function ProgressDemoPage() {
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

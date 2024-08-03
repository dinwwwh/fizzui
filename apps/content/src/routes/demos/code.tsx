import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { code } from '@fizzui/styles'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/code')({
  component: CodeDemoPage,
})

function CodeDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <code className={`${code}`}>
          variant
        </code>

        <code className={`${code}`}>
          variant
        </code>
      </DemoFlexRow>
    </DemoContainer>
  )
}

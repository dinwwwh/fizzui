import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { kbd } from '@fizzui/styles'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/kbd')({
  component: CodeDemoPage,
})

function CodeDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <kbd className={`${kbd}`}>
          Ctrl + C
        </kbd>

        <kbd className={`${kbd}`}>
          &#8984; + C
        </kbd>

        <div>
          <kbd className={`${kbd}`}>
            &#8984;
          </kbd>
          &nbsp; + &nbsp;
          <kbd className={`${kbd}`}>
            C
          </kbd>
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}

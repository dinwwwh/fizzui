import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { separator } from '@fizzui/styles'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/separator')({
  component: SeparatorDemoPage,
})

function SeparatorDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <div className={`${separator({ color: 'base-100' })}`} />
      </DemoFlexRow>
      <DemoFlexRow>
        <div className={`${separator}`} />
      </DemoFlexRow>
      <DemoFlexRow>
        <div className={`${separator({ color: 'base-300' })}`} />
      </DemoFlexRow>

      <DemoFlexRow>
        <div style={{ height: '100px' }}>
          <div className={`${separator({ orientation: 'vertical' })}`} />
        </div>
        <div style={{ height: '100px' }}>
          <div data-orientation="vertical" className={`${separator}`} />
        </div>

        <div style={{ height: '100px', width: '100px' }}>
          <div data-orientation="horizontal" className={`${separator}`} />
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}

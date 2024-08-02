import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { badgeGroup } from '@fizzui/styles'
import { IconArrowRight, IconConfetti } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/badge-group')({
  component: BadgeGroupDemoPage,
})

function BadgeGroupDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <div className={`${badgeGroup}`}>
          <span className={`${badgeGroup.badge}`}>
            Version 4.0
          </span>
          <div className={`${badgeGroup.content}`}>
            We've just released a new feature
            <IconArrowRight className={`${badgeGroup.content.icon}`} />
          </div>
        </div>
      </DemoFlexRow>
      <DemoFlexRow>
        <div className={`${badgeGroup({ size: 'sm' })}`}>
          <span className={`${badgeGroup({ size: 'sm' }).badge}`}>
            Version 4.0
          </span>
          <div className={`${badgeGroup({ size: 'sm' }).content}`}>
            We've just released a new feature
            <IconArrowRight className={`${badgeGroup({ size: 'sm' }).content.icon}`} />
          </div>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${badgeGroup({ size: 'sm' })}`}>
          <div className={`${badgeGroup({ size: 'sm' }).content}`}>
            We've just released a new feature
          </div>
          <span className={`${badgeGroup({ size: 'sm' }).badge}`}>
            Version 4.0
          </span>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${badgeGroup({ size: 'sm' })}`}>
          <div className={`${badgeGroup({ size: 'sm' }).content}`}>
            <IconConfetti className={`${badgeGroup({ size: 'sm' }).content.icon({ align: 'start' })}`} />
            We've just released a new feature
          </div>
          <span className={`${badgeGroup({ size: 'sm' }).badge}`}>
            Version 4.0
          </span>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${badgeGroup({ size: 'md' })}`}>
          <div className={`${badgeGroup({ size: 'md' }).content}`}>
            <IconConfetti className={`${badgeGroup({ size: 'md' }).content.icon({ align: 'start' })}`} />
            We've just released a new feature
          </div>
          <span className={`${badgeGroup({ size: 'md' }).badge}`}>
            Version 4.0
          </span>
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}

import { IconArrowRight, IconConfetti } from '@tabler/icons-react'
import { badgeGroup } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function BadgeGroupDemo() {
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

import { IconArrowRight, IconCircle, IconConfetti } from '@tabler/icons-react'
import { badge, title } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function BadgeDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <span className={`${badge}`}>Badge md</span>
        <span className={`${badge({ size: 'sm' })}`}>Badge sm</span>
      </DemoFlexRow>

      <h2 className={`${title({ size: 'lg' })}`}>With icon</h2>
      <DemoFlexRow>
        <span className={`${badge}`}>
          <IconConfetti className={`${badge.icon}`} />
          Big updated
        </span>
        <span className={`${badge({ size: 'sm' })}`}>
          <IconConfetti className={`${badge({ size: 'sm' }).icon}`} />
          Big updated
        </span>
      </DemoFlexRow>

      <DemoFlexRow>
        <span className={`${badge}`}>
          New feature
          <IconArrowRight className={`${badge.icon({ align: 'end' })}`} />
        </span>
        <span className={`${badge({ size: 'sm' })}`}>
          New feature
          <IconArrowRight className={`${badge({ size: 'sm' }).icon({ align: 'end' })}`} />
        </span>
      </DemoFlexRow>

      <DemoFlexRow>
        <span className={`${badge({ square: true })}`}>
          <IconCircle className={`${badge({ square: true }).icon({ align: 'center' })}`} />
        </span>
        <span className={`${badge({ size: 'sm', square: true })}`}>
          <IconCircle className={`${badge({ size: 'sm', square: true }).icon({ align: 'center' })}`} />
        </span>
      </DemoFlexRow>
    </DemoContainer>
  )
}

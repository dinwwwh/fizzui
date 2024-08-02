import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { button, buttonGroup, title } from '@fizzui/styles'
import { IconArrowLeft, IconArrowRight, IconCircle, IconPlus } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/button-group')({
  component: ButtonGroupDemo,
})

function ButtonGroupDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <div className={`${buttonGroup}`}>
          <button className={`${buttonGroup.item}`}>
            Start
          </button>
          <button className={`${buttonGroup.item}`}>
            Center
          </button>
          <button className={`${buttonGroup.item}`}>
            End
          </button>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${buttonGroup}`}>
          <button className={`${buttonGroup.item}`}>
            <IconCircle className={`${buttonGroup.item.icon}`} />
            Start
          </button>
          <button className={`${buttonGroup.item}`} disabled>
            <IconCircle className={`${buttonGroup.item.icon}`} />
            Center
          </button>
          <button className={`${buttonGroup.item}`}>
            <IconCircle className={`${buttonGroup.item.icon}`} />
            Center
          </button>
          <button className={`${buttonGroup.item}`}>
            <IconCircle className={`${buttonGroup.item.icon}`} />
            End
          </button>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${buttonGroup}`}>
          <button className={`${buttonGroup.item({ square: true })}`}>
            <IconArrowLeft className={`${buttonGroup.item({ square: true }).icon({ align: 'center' })}`} />
          </button>
          <button className={`${buttonGroup.item({ square: true })}`}>
            <IconPlus className={`${buttonGroup.item({ square: true }).icon({ align: 'center' })}`} />
          </button>
          <button className={`${buttonGroup.item({ square: true })}`}>
            <IconArrowRight className={`${buttonGroup.item({ square: true }).icon({ align: 'center' })}`} />
          </button>
        </div>
      </DemoFlexRow>

      <h2 className={`${title}`}>Size: sm</h2>

      <DemoFlexRow>
        <div className={`${buttonGroup({ size: 'sm' })}`}>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            Start
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            Center
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            End
          </button>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${buttonGroup({ size: 'sm' })}`}>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            <IconCircle className={`${buttonGroup({ size: 'sm' }).item.icon}`} />
            Start
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            <IconCircle className={`${buttonGroup({ size: 'sm' }).item.icon}`} />
            Center
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item}`}>
            <IconCircle className={`${buttonGroup({ size: 'sm' }).item.icon}`} />
            End
          </button>
        </div>
      </DemoFlexRow>

      <DemoFlexRow>
        <div className={`${buttonGroup({ size: 'sm' })}`}>
          <button className={`${buttonGroup({ size: 'sm' }).item({ square: true })}`}>
            <IconArrowLeft className={`${buttonGroup({ size: 'sm' }).item({ square: true }).icon({ align: 'center' })}`} />
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item({ square: true })}`}>
            <IconPlus className={`${buttonGroup({ size: 'sm' }).item({ square: true }).icon({ align: 'center' })}`} />
          </button>
          <button className={`${buttonGroup({ size: 'sm' }).item({ square: true })}`}>
            <IconArrowRight className={`${buttonGroup({ size: 'sm' }).item({ square: true }).icon({ align: 'center' })}`} />
          </button>
        </div>
      </DemoFlexRow>
    </DemoContainer>
  )
}

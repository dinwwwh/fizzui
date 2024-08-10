import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'
import { IconAlignCenter, IconAlignLeft, IconAlignRight } from '@tabler/icons-react'
import { toggleGroup } from '@fizzui/styles'

export const Route = createFileRoute('/demos/toggle-group')({
  component: ToggleGroupDemoPage,
})

function ToggleGroupDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment" className={`${toggleGroup}`}>
          <ToggleGroupItem value="left" aria-label="Left aligned" className={`${toggleGroup.item}`}>
            <IconAlignLeft className={`${toggleGroup.item.icon}`} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned" className={`${toggleGroup.item}`}>
            <IconAlignCenter className={`${toggleGroup.item.icon}`} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned" className={`${toggleGroup.item}`}>
            <IconAlignRight className={`${toggleGroup.item.icon}`} />
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoFlexRow>

      <DemoFlexRow>
        <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment" className={`${toggleGroup({ size: 'sm' })}`}>
          <ToggleGroupItem value="left" aria-label="Left aligned" className={`${toggleGroup({ size: 'sm' }).item}`}>
            <IconAlignLeft className={`${toggleGroup({ size: 'sm' }).item.icon}`} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned" className={`${toggleGroup({ size: 'sm' }).item}`}>
            <IconAlignCenter className={`${toggleGroup({ size: 'sm' }).item.icon}`} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned" className={`${toggleGroup({ size: 'sm' }).item}`}>
            <IconAlignRight className={`${toggleGroup({ size: 'sm' }).item.icon}`} />
          </ToggleGroupItem>
        </ToggleGroup>
      </DemoFlexRow>
    </DemoContainer>
  )
}

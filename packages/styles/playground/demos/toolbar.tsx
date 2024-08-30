import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@radix-ui/react-toolbar'
import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconBold, IconItalic, IconStrikethrough } from '@tabler/icons-react'
import { toolbar } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function ToolbarDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Toolbar aria-label="Formatting options" className={`${toolbar}`}>
          <ToolbarToggleGroup type="multiple" aria-label="Text formatting" className={`${toolbar.toggleGroup}`}>
            <ToolbarToggleItem value="bold" aria-label="Bold" className={`${toolbar.toggleGroup.item}`}>
              <IconBold className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic" className={`${toolbar.toggleGroup.item}`}>
              <IconItalic className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="strikethrough" aria-label="Strike through" className={`${toolbar.toggleGroup.item}`}>
              <IconStrikethrough className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator className={`${toolbar.separator}`} />
          <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment" className={`${toolbar.toggleGroup}`}>
            <ToolbarToggleItem value="left" aria-label="Left aligned" className={`${toolbar.toggleGroup.item}`}>
              <IconAlignLeft className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="center" aria-label="Center aligned" className={`${toolbar.toggleGroup.item}`}>
              <IconAlignCenter className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="right" aria-label="Right aligned" className={`${toolbar.toggleGroup.item}`}>
              <IconAlignRight className={`${toolbar.toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator className={`${toolbar.separator}`} />
          <ToolbarLink href="#" className={`${toolbar.link}`}>
            Edited 2 hours ago
          </ToolbarLink>
          <ToolbarButton className={`${toolbar.button}`}>Share</ToolbarButton>
        </Toolbar>
      </DemoFlexRow>
      <DemoFlexRow>
        <Toolbar aria-label="Formatting options" className={`${toolbar({ size: 'sm' })}`}>
          <ToolbarToggleGroup type="multiple" aria-label="Text formatting" className={`${toolbar({ size: 'sm' }).toggleGroup}`}>
            <ToolbarToggleItem value="bold" aria-label="Bold" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconBold className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconItalic className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="strikethrough" aria-label="Strike through" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconStrikethrough className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator className={`${toolbar({ size: 'sm' }).separator}`} />
          <ToolbarToggleGroup type="single" defaultValue="center" aria-label="Text alignment" className={`${toolbar({ size: 'sm' }).toggleGroup}`}>
            <ToolbarToggleItem value="left" aria-label="Left aligned" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconAlignLeft className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="center" aria-label="Center aligned" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconAlignCenter className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="right" aria-label="Right aligned" className={`${toolbar({ size: 'sm' }).toggleGroup.item}`}>
              <IconAlignRight className={`${toolbar({ size: 'sm' }).toggleGroup.item.icon}`} />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator className={`${toolbar({ size: 'sm' }).separator}`} />
          <ToolbarLink href="#" className={`${toolbar({ size: 'sm' }).link}`}>
            Edited 2 hours ago
          </ToolbarLink>
          <ToolbarButton className={`${toolbar({ size: 'sm' }).button}`}>Share</ToolbarButton>
        </Toolbar>
      </DemoFlexRow>
    </DemoContainer>
  )
}

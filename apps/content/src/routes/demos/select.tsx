import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'

import { button, select } from '@fizzui/styles'
import { ScrollDownButton, ScrollUpButton, Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectLabel, SelectPortal, SelectSeparator, SelectTrigger, SelectValue, SelectViewport } from '@radix-ui/react-select'
import { IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons-react'

export const Route = createFileRoute('/demos/select')({
  component: SelectDemoPage,
})

function SelectDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Select>
          <SelectTrigger className={`${button}`}>
            <SelectValue placeholder="Select one" />

            <SelectIcon asChild>
              <IconChevronDown className={`${button.icon({ align: 'end' })}`} />
            </SelectIcon>
          </SelectTrigger>

          <SelectPortal>
            <SelectContent className={`${select}`}>
              <SelectViewport className={`${select.viewport}`}>
                <ScrollUpButton className={`${select.scrollButton}`}>
                  <IconChevronUp className={`${select.scrollButton.icon}`} />
                </ScrollUpButton>

                <SelectGroup>
                  <SelectLabel className={`${select.label}`}>Fruits</SelectLabel>
                  <SelectItem value="apple" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Apple</SelectItemText>
                  </SelectItem>
                  <SelectItem value="banana" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Banana</SelectItemText>
                  </SelectItem>
                  <SelectItem value="blueberry" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Blueberry</SelectItemText>
                  </SelectItem>
                  <SelectItem value="grapes" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Grapes</SelectItemText>
                  </SelectItem>
                  <SelectItem value="pineapple" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Pineapple</SelectItemText>
                  </SelectItem>
                </SelectGroup>

                <SelectSeparator className={`${select.separator}`} />

                <SelectGroup>
                  <SelectLabel className={`${select.label}`}>Vegetables</SelectLabel>
                  <SelectItem value="aubergine" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Aubergine</SelectItemText>
                  </SelectItem>
                  <SelectItem value="broccoli" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Broccoli</SelectItemText>
                  </SelectItem>
                  <SelectItem value="carrot" disabled className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Carrot</SelectItemText>
                  </SelectItem>
                  <SelectItem value="courgette" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Courgette</SelectItemText>
                  </SelectItem>
                  <SelectItem value="leek" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Leek</SelectItemText>
                  </SelectItem>
                </SelectGroup>

                <SelectSeparator className={`${select.separator}`} />

                <SelectGroup>
                  <SelectLabel className={`${select.label}`}>Meat</SelectLabel>
                  <SelectItem value="beef" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Beef</SelectItemText>
                  </SelectItem>
                  <SelectItem value="chicken" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Chicken</SelectItemText>
                  </SelectItem>
                  <SelectItem value="lamb" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Lamb</SelectItemText>
                  </SelectItem>
                  <SelectItem value="pork" className={`${select.item}`}>
                    <SelectItemIndicator className={`${select.item.indicator}`} asChild>
                      <IconCheck />
                    </SelectItemIndicator>
                    <SelectItemText>Pork</SelectItemText>
                  </SelectItem>
                </SelectGroup>
              </SelectViewport>

              <ScrollDownButton className={`${select.scrollButton}`}>
                <IconChevronDown className={`${select.scrollButton.icon}`} />
              </ScrollDownButton>
            </SelectContent>
          </SelectPortal>
        </Select>
      </DemoFlexRow>
    </DemoContainer>
  )
}

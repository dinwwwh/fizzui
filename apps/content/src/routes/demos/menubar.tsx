import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@radix-ui/react-menubar'
import { useState } from 'react'
import { IconCheck, IconChevronRight, IconPointFilled } from '@tabler/icons-react'
import { menubar } from '@fizzui/styles'

export const Route = createFileRoute('/demos/menubar')({
  component: MenubarDemoPage,
})

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis']
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs']

function MenubarDemoPage() {
  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]])
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2])

  return (
    <DemoContainer>
      <DemoFlexRow>
        <Menubar className={`${menubar}`}>
          <MenubarMenu>
            <MenubarTrigger className={`${menubar.trigger}`}>File</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-3} className={`${menubar.menu}`}>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>
                  New Tab
                  <kbd className={`${menubar.menu({ inset: false }).kbd}`}>⌘ T</kbd>
                </MenubarItem>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>
                  New Window
                  <kbd className={`${menubar.menu({ inset: false }).kbd}`}>⌘ N</kbd>
                </MenubarItem>
                <MenubarItem disabled className={`${menubar.menu({ inset: false }).item}`}> New Incognito Window</MenubarItem>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarSub>
                  <MenubarSubTrigger className={`${menubar.menu({ inset: false }).item}`}>
                    Share
                    <IconChevronRight className={`${menubar.menu({ inset: false }).iconMore}`} />
                  </MenubarSubTrigger>
                  <MenubarPortal>
                    <MenubarSubContent alignOffset={-5} className={`${menubar.menu({ inset: false })}`}>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Email Link</MenubarItem>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Messages</MenubarItem>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>
                  Print…
                  <kbd className={`${menubar.menu({ inset: false }).kbd}`}>⌘ P</kbd>
                </MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar.trigger}`}>Edit</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-3} className={`${menubar.menu({ inset: false })}`}>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>
                  Undo
                  <kbd className={`${menubar.menu.kbd}`}>⌘ Z</kbd>
                </MenubarItem>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>
                  Redo
                  <kbd className={`${menubar.menu.kbd}`}>⇧ ⌘ Z</kbd>
                </MenubarItem>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarSub>
                  <MenubarSubTrigger className={`${menubar.menu({ inset: false }).item}`}>
                    Find
                    <IconChevronRight className={`${menubar.menu({ inset: false }).iconMore}`} />
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent alignOffset={-5} className={`${menubar.menu({ inset: false })}`}>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Search the web…</MenubarItem>
                      <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Find…</MenubarItem>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Find Next</MenubarItem>
                      <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Cut</MenubarItem>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Copy</MenubarItem>
                <MenubarItem className={`${menubar.menu({ inset: false }).item}`}>Paste</MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar.trigger}`}>View</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-14} className={`${menubar.menu}`}>
                {CHECK_ITEMS.map(item => (
                  <MenubarCheckboxItem
                    key={item}
                    checked={checkedSelection.includes(item)}
                    className={`${menubar.menu.item}`}
                    onCheckedChange={() =>
                      setCheckedSelection(current =>
                        current.includes(item)
                          ? current.filter(el => el !== item)
                          : current.concat(item),
                      )}
                  >
                    <MenubarItemIndicator asChild>
                      <IconCheck className={`${menubar.menu.icon}`} />
                    </MenubarItemIndicator>
                    {item}
                  </MenubarCheckboxItem>
                ))}
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar.menu.item}`}>
                  Reload
                  <kbd className={`${menubar.menu.kbd}`}>⌘ R</kbd>
                </MenubarItem>
                <MenubarItem
                  className={`${menubar.menu.item}`}
                  disabled
                >
                  Force Reload
                  <kbd className={`${menubar.menu.kbd}`}>⇧ ⌘ R</kbd>
                </MenubarItem>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar.menu.item}`}>
                  Toggle Fullscreen
                </MenubarItem>
                <MenubarSeparator className={`${menubar.menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar.menu.item}`}>
                  Hide Sidebar
                </MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar.trigger}`}>Profiles</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-14} className={`${menubar.menu}`}>
                <MenubarRadioGroup value={radioSelection} onValueChange={setRadioSelection}>
                  {RADIO_ITEMS.map(item => (
                    <MenubarRadioItem
                      key={item}
                      value={item}
                      className={`${menubar.menu.item}`}
                    >
                      <MenubarItemIndicator asChild className={`${menubar.menu.icon}`}>
                        <IconPointFilled />
                      </MenubarItemIndicator>
                      {item}
                    </MenubarRadioItem>
                  ))}
                  <MenubarSeparator className={`${menubar.menu.separator}`} />
                  <MenubarItem className={`${menubar.menu.item}`}>
                    Edit…
                  </MenubarItem>
                  <MenubarSeparator className={`${menubar.menu.separator}`} />
                  <MenubarItem className={`${menubar.menu.item}`}>
                    Add Profile…
                  </MenubarItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>
        </Menubar>
      </DemoFlexRow>
      <DemoFlexRow>
        <Menubar className={`${menubar({ size: 'sm' })}`}>
          <MenubarMenu>
            <MenubarTrigger className={`${menubar({ size: 'sm' }).trigger}`}>File</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-3} className={`${menubar({ size: 'sm' }).menu}`}>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                  New Tab
                  <kbd className={`${menubar({ size: 'sm' }).menu({ inset: false }).kbd}`}>⌘ T</kbd>
                </MenubarItem>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                  New Window
                  <kbd className={`${menubar({ size: 'sm' }).menu({ inset: false }).kbd}`}>⌘ N</kbd>
                </MenubarItem>
                <MenubarItem disabled className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}> New Incognito Window</MenubarItem>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarSub>
                  <MenubarSubTrigger className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                    Share
                    <IconChevronRight className={`${menubar({ size: 'sm' }).menu({ inset: false }).iconMore}`} />
                  </MenubarSubTrigger>
                  <MenubarPortal>
                    <MenubarSubContent alignOffset={-5} className={`${menubar({ size: 'sm' }).menu({ inset: false })}`}>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Email Link</MenubarItem>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Messages</MenubarItem>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Notes</MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                  Print…
                  <kbd className={`${menubar({ size: 'sm' }).menu({ inset: false }).kbd}`}>⌘ P</kbd>
                </MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar({ size: 'sm' }).trigger}`}>Edit</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-3} className={`${menubar({ size: 'sm' }).menu({ inset: false })}`}>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                  Undo
                  <kbd className={`${menubar({ size: 'sm' }).menu.kbd}`}>⌘ Z</kbd>
                </MenubarItem>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                  Redo
                  <kbd className={`${menubar({ size: 'sm' }).menu.kbd}`}>⇧ ⌘ Z</kbd>
                </MenubarItem>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarSub>
                  <MenubarSubTrigger className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>
                    Find
                    <IconChevronRight className={`${menubar({ size: 'sm' }).menu({ inset: false }).iconMore}`} />
                  </MenubarSubTrigger>

                  <MenubarPortal>
                    <MenubarSubContent alignOffset={-5} className={`${menubar({ size: 'sm' }).menu({ inset: false })}`}>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Search the web…</MenubarItem>
                      <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Find…</MenubarItem>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Find Next</MenubarItem>
                      <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Find Previous</MenubarItem>
                    </MenubarSubContent>
                  </MenubarPortal>
                </MenubarSub>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Cut</MenubarItem>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Copy</MenubarItem>
                <MenubarItem className={`${menubar({ size: 'sm' }).menu({ inset: false }).item}`}>Paste</MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar({ size: 'sm' }).trigger}`}>View</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-14} className={`${menubar({ size: 'sm' }).menu}`}>
                {CHECK_ITEMS.map(item => (
                  <MenubarCheckboxItem
                    key={item}
                    checked={checkedSelection.includes(item)}
                    className={`${menubar({ size: 'sm' }).menu.item}`}
                    onCheckedChange={() =>
                      setCheckedSelection(current =>
                        current.includes(item)
                          ? current.filter(el => el !== item)
                          : current.concat(item),
                      )}
                  >
                    <MenubarItemIndicator asChild>
                      <IconCheck className={`${menubar({ size: 'sm' }).menu.icon}`} />
                    </MenubarItemIndicator>
                    {item}
                  </MenubarCheckboxItem>
                ))}
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar({ size: 'sm' }).menu.item}`}>
                  Reload
                  <kbd className={`${menubar({ size: 'sm' }).menu.kbd}`}>⌘ R</kbd>
                </MenubarItem>
                <MenubarItem
                  className={`${menubar({ size: 'sm' }).menu.item}`}
                  disabled
                >
                  Force Reload
                  <kbd className={`${menubar({ size: 'sm' }).menu.kbd}`}>⇧ ⌘ R</kbd>
                </MenubarItem>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar({ size: 'sm' }).menu.item}`}>
                  Toggle Fullscreen
                </MenubarItem>
                <MenubarSeparator className={`${menubar({ size: 'sm' }).menu({ inset: false }).separator}`} />
                <MenubarItem className={`${menubar({ size: 'sm' }).menu.item}`}>
                  Hide Sidebar
                </MenubarItem>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={`${menubar({ size: 'sm' }).trigger}`}>Profiles</MenubarTrigger>
            <MenubarPortal>
              <MenubarContent align="start" sideOffset={5} alignOffset={-14} className={`${menubar({ size: 'sm' }).menu}`}>
                <MenubarRadioGroup value={radioSelection} onValueChange={setRadioSelection}>
                  {RADIO_ITEMS.map(item => (
                    <MenubarRadioItem
                      key={item}
                      value={item}
                      className={`${menubar({ size: 'sm' }).menu.item}`}
                    >
                      <MenubarItemIndicator asChild className={`${menubar({ size: 'sm' }).menu.icon}`}>
                        <IconPointFilled />
                      </MenubarItemIndicator>
                      {item}
                    </MenubarRadioItem>
                  ))}
                  <MenubarSeparator className={`${menubar({ size: 'sm' }).menu.separator}`} />
                  <MenubarItem className={`${menubar({ size: 'sm' }).menu.item}`}>
                    Edit…
                  </MenubarItem>
                  <MenubarSeparator className={`${menubar({ size: 'sm' }).menu.separator}`} />
                  <MenubarItem className={`${menubar({ size: 'sm' }).menu.item}`}>
                    Add Profile…
                  </MenubarItem>
                </MenubarRadioGroup>
              </MenubarContent>
            </MenubarPortal>
          </MenubarMenu>
        </Menubar>
      </DemoFlexRow>
    </DemoContainer>
  )
}

import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { button, menu } from '@fizzui/styles'
import { IconCheck, IconChevronRight, IconMenu2, IconPlus, IconPointFilled } from '@tabler/icons-react'

export const Route = createFileRoute('/demos/menu')({
  component: MenuDemoPage,
})

function MenuDemoPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <DemoContainer>
      <DemoFlexRow>

        <DropdownMenu>
          <DropdownMenuTrigger className={`${button({ variant: 'outline', square: true })}`}>
            <IconMenu2 className={`${button({ variant: 'outline', square: true }).icon({ align: 'center' })}`} />
          </DropdownMenuTrigger>

          <DropdownMenuPortal>
            <DropdownMenuContent sideOffset={5} className={`${menu}`}>
              <DropdownMenuItem className={`${menu.item}`}>
                <IconPlus className={`${menu.icon}`} />
                New Tab
                <kbd className={`${menu.kbd}`}>⌘+T</kbd>
              </DropdownMenuItem>
              <DropdownMenuItem className={`${menu.item}`}>
                New Window
                <kbd className={`${menu.kbd}`}>⌘+N</kbd>
              </DropdownMenuItem>
              <DropdownMenuItem disabled className={`${menu.item}`}>
                New Private Window
                <kbd className={`${menu.kbd}`}>⇧+⌘+N</kbd>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className={`${menu.item}`}>
                  More Tools
                  <IconChevronRight className={`${menu.iconMore}`} />
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent sideOffset={2} alignOffset={-5} className={`${menu}`}>
                    <DropdownMenuItem className={`${menu.item({ inset: false })}`}>
                      Save Page As…
                      <kbd className={`${menu.kbd}`}>⌘+S</kbd>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`${menu.item({ inset: false })}`}>Create Shortcut…</DropdownMenuItem>
                    <DropdownMenuItem className={`${menu.item({ inset: false })}`}>Name Window…</DropdownMenuItem>
                    <DropdownMenuSeparator className={`${menu.separator}`} />
                    <DropdownMenuItem className={`${menu.item({ inset: false })}`}>Developer Tools</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator className={`${menu.separator}`} />
              <DropdownMenuCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
                className={`${menu.item}`}
              >
                <DropdownMenuItemIndicator className={`${menu.icon}`} asChild>
                  <IconCheck />
                </DropdownMenuItemIndicator>
                Show Bookmarks

                <kbd className={`${menu.kbd}`}>⌘+B</kbd>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={urlsChecked}
                onCheckedChange={setUrlsChecked}
                className={`${menu.item}`}
              >
                <DropdownMenuItemIndicator className={`${menu.icon}`} asChild>
                  <IconCheck />
                </DropdownMenuItemIndicator>
                Show Full URLs
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator className={`${menu.separator}`} />
              <DropdownMenuLabel className={`${menu.label}`}>People</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={person}
                onValueChange={setPerson}
              >
                <DropdownMenuRadioItem value="pedro" className={`${menu.item}`}>
                  <DropdownMenuItemIndicator asChild className={`${menu.icon}`}>
                    <IconPointFilled />
                  </DropdownMenuItemIndicator>
                  Pedro Duarte
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="colm" className={`${menu.item}`}>
                  <DropdownMenuItemIndicator asChild className={`${menu.icon}`}>
                    <IconPointFilled />
                  </DropdownMenuItemIndicator>
                  Colm Tuite
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>

              <DropdownMenuArrow className={`${menu.arrow}`} />
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      </DemoFlexRow>
    </DemoContainer>
  )
}

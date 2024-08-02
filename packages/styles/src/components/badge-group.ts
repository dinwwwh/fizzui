import { compose } from '@fizzui/compose'
import { badgeGroupContent, badgeGroupContentIcon, badgeGroupRoot } from './badge-group.css'
import { badge } from './badge'

export const badgeGroup = compose({
  root: badgeGroupRoot,
  badge,
  content: {
    root: badgeGroupContent,
    icon: badgeGroupContentIcon,
  },
})

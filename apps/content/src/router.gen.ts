/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DemosTypographyImport } from './routes/demos/typography'
import { Route as DemosTooltipImport } from './routes/demos/tooltip'
import { Route as DemosToggleImport } from './routes/demos/toggle'
import { Route as DemosSwitcherImport } from './routes/demos/switcher'
import { Route as DemosSliderImport } from './routes/demos/slider'
import { Route as DemosSelectImport } from './routes/demos/select'
import { Route as DemosProgressImport } from './routes/demos/progress'
import { Route as DemosPopoverImport } from './routes/demos/popover'
import { Route as DemosInputGroupImport } from './routes/demos/input-group'
import { Route as DemosInputImport } from './routes/demos/input'
import { Route as DemosCheckboxImport } from './routes/demos/checkbox'
import { Route as DemosButtonGroupImport } from './routes/demos/button-group'
import { Route as DemosButtonImport } from './routes/demos/button'
import { Route as DemosBadgeGroupImport } from './routes/demos/badge-group'
import { Route as DemosBadgeImport } from './routes/demos/badge'

// Create/Update Routes

const DemosTypographyRoute = DemosTypographyImport.update({
  path: '/demos/typography',
  getParentRoute: () => rootRoute,
} as any)

const DemosTooltipRoute = DemosTooltipImport.update({
  path: '/demos/tooltip',
  getParentRoute: () => rootRoute,
} as any)

const DemosToggleRoute = DemosToggleImport.update({
  path: '/demos/toggle',
  getParentRoute: () => rootRoute,
} as any)

const DemosSwitcherRoute = DemosSwitcherImport.update({
  path: '/demos/switcher',
  getParentRoute: () => rootRoute,
} as any)

const DemosSliderRoute = DemosSliderImport.update({
  path: '/demos/slider',
  getParentRoute: () => rootRoute,
} as any)

const DemosSelectRoute = DemosSelectImport.update({
  path: '/demos/select',
  getParentRoute: () => rootRoute,
} as any)

const DemosProgressRoute = DemosProgressImport.update({
  path: '/demos/progress',
  getParentRoute: () => rootRoute,
} as any)

const DemosPopoverRoute = DemosPopoverImport.update({
  path: '/demos/popover',
  getParentRoute: () => rootRoute,
} as any)

const DemosInputGroupRoute = DemosInputGroupImport.update({
  path: '/demos/input-group',
  getParentRoute: () => rootRoute,
} as any)

const DemosInputRoute = DemosInputImport.update({
  path: '/demos/input',
  getParentRoute: () => rootRoute,
} as any)

const DemosCheckboxRoute = DemosCheckboxImport.update({
  path: '/demos/checkbox',
  getParentRoute: () => rootRoute,
} as any)

const DemosButtonGroupRoute = DemosButtonGroupImport.update({
  path: '/demos/button-group',
  getParentRoute: () => rootRoute,
} as any)

const DemosButtonRoute = DemosButtonImport.update({
  path: '/demos/button',
  getParentRoute: () => rootRoute,
} as any)

const DemosBadgeGroupRoute = DemosBadgeGroupImport.update({
  path: '/demos/badge-group',
  getParentRoute: () => rootRoute,
} as any)

const DemosBadgeRoute = DemosBadgeImport.update({
  path: '/demos/badge',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/demos/badge': {
      id: '/demos/badge'
      path: '/demos/badge'
      fullPath: '/demos/badge'
      preLoaderRoute: typeof DemosBadgeImport
      parentRoute: typeof rootRoute
    }
    '/demos/badge-group': {
      id: '/demos/badge-group'
      path: '/demos/badge-group'
      fullPath: '/demos/badge-group'
      preLoaderRoute: typeof DemosBadgeGroupImport
      parentRoute: typeof rootRoute
    }
    '/demos/button': {
      id: '/demos/button'
      path: '/demos/button'
      fullPath: '/demos/button'
      preLoaderRoute: typeof DemosButtonImport
      parentRoute: typeof rootRoute
    }
    '/demos/button-group': {
      id: '/demos/button-group'
      path: '/demos/button-group'
      fullPath: '/demos/button-group'
      preLoaderRoute: typeof DemosButtonGroupImport
      parentRoute: typeof rootRoute
    }
    '/demos/checkbox': {
      id: '/demos/checkbox'
      path: '/demos/checkbox'
      fullPath: '/demos/checkbox'
      preLoaderRoute: typeof DemosCheckboxImport
      parentRoute: typeof rootRoute
    }
    '/demos/input': {
      id: '/demos/input'
      path: '/demos/input'
      fullPath: '/demos/input'
      preLoaderRoute: typeof DemosInputImport
      parentRoute: typeof rootRoute
    }
    '/demos/input-group': {
      id: '/demos/input-group'
      path: '/demos/input-group'
      fullPath: '/demos/input-group'
      preLoaderRoute: typeof DemosInputGroupImport
      parentRoute: typeof rootRoute
    }
    '/demos/popover': {
      id: '/demos/popover'
      path: '/demos/popover'
      fullPath: '/demos/popover'
      preLoaderRoute: typeof DemosPopoverImport
      parentRoute: typeof rootRoute
    }
    '/demos/progress': {
      id: '/demos/progress'
      path: '/demos/progress'
      fullPath: '/demos/progress'
      preLoaderRoute: typeof DemosProgressImport
      parentRoute: typeof rootRoute
    }
    '/demos/select': {
      id: '/demos/select'
      path: '/demos/select'
      fullPath: '/demos/select'
      preLoaderRoute: typeof DemosSelectImport
      parentRoute: typeof rootRoute
    }
    '/demos/slider': {
      id: '/demos/slider'
      path: '/demos/slider'
      fullPath: '/demos/slider'
      preLoaderRoute: typeof DemosSliderImport
      parentRoute: typeof rootRoute
    }
    '/demos/switcher': {
      id: '/demos/switcher'
      path: '/demos/switcher'
      fullPath: '/demos/switcher'
      preLoaderRoute: typeof DemosSwitcherImport
      parentRoute: typeof rootRoute
    }
    '/demos/toggle': {
      id: '/demos/toggle'
      path: '/demos/toggle'
      fullPath: '/demos/toggle'
      preLoaderRoute: typeof DemosToggleImport
      parentRoute: typeof rootRoute
    }
    '/demos/tooltip': {
      id: '/demos/tooltip'
      path: '/demos/tooltip'
      fullPath: '/demos/tooltip'
      preLoaderRoute: typeof DemosTooltipImport
      parentRoute: typeof rootRoute
    }
    '/demos/typography': {
      id: '/demos/typography'
      path: '/demos/typography'
      fullPath: '/demos/typography'
      preLoaderRoute: typeof DemosTypographyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  DemosBadgeRoute,
  DemosBadgeGroupRoute,
  DemosButtonRoute,
  DemosButtonGroupRoute,
  DemosCheckboxRoute,
  DemosInputRoute,
  DemosInputGroupRoute,
  DemosPopoverRoute,
  DemosProgressRoute,
  DemosSelectRoute,
  DemosSliderRoute,
  DemosSwitcherRoute,
  DemosToggleRoute,
  DemosTooltipRoute,
  DemosTypographyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/demos/badge",
        "/demos/badge-group",
        "/demos/button",
        "/demos/button-group",
        "/demos/checkbox",
        "/demos/input",
        "/demos/input-group",
        "/demos/popover",
        "/demos/progress",
        "/demos/select",
        "/demos/slider",
        "/demos/switcher",
        "/demos/toggle",
        "/demos/tooltip",
        "/demos/typography"
      ]
    },
    "/demos/badge": {
      "filePath": "demos/badge.tsx"
    },
    "/demos/badge-group": {
      "filePath": "demos/badge-group.tsx"
    },
    "/demos/button": {
      "filePath": "demos/button.tsx"
    },
    "/demos/button-group": {
      "filePath": "demos/button-group.tsx"
    },
    "/demos/checkbox": {
      "filePath": "demos/checkbox.tsx"
    },
    "/demos/input": {
      "filePath": "demos/input.tsx"
    },
    "/demos/input-group": {
      "filePath": "demos/input-group.tsx"
    },
    "/demos/popover": {
      "filePath": "demos/popover.tsx"
    },
    "/demos/progress": {
      "filePath": "demos/progress.tsx"
    },
    "/demos/select": {
      "filePath": "demos/select.tsx"
    },
    "/demos/slider": {
      "filePath": "demos/slider.tsx"
    },
    "/demos/switcher": {
      "filePath": "demos/switcher.tsx"
    },
    "/demos/toggle": {
      "filePath": "demos/toggle.tsx"
    },
    "/demos/tooltip": {
      "filePath": "demos/tooltip.tsx"
    },
    "/demos/typography": {
      "filePath": "demos/typography.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

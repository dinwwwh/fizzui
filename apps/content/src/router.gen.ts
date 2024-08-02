/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DemosTypographyImport } from './routes/demos/typography'
import { Route as DemosToggleSwitchImport } from './routes/demos/toggle-switch'
import { Route as DemosSelectImport } from './routes/demos/select'
import { Route as DemosPopoverImport } from './routes/demos/popover'
import { Route as DemosInputImport } from './routes/demos/input'
import { Route as DemosButtonGroupImport } from './routes/demos/button-group'
import { Route as DemosButtonImport } from './routes/demos/button'
import { Route as DemosBadgeGroupImport } from './routes/demos/badge-group'
import { Route as DemosBadgeImport } from './routes/demos/badge'

// Create/Update Routes

const DemosTypographyRoute = DemosTypographyImport.update({
  path: '/demos/typography',
  getParentRoute: () => rootRoute,
} as any)

const DemosToggleSwitchRoute = DemosToggleSwitchImport.update({
  path: '/demos/toggle-switch',
  getParentRoute: () => rootRoute,
} as any)

const DemosSelectRoute = DemosSelectImport.update({
  path: '/demos/select',
  getParentRoute: () => rootRoute,
} as any)

const DemosPopoverRoute = DemosPopoverImport.update({
  path: '/demos/popover',
  getParentRoute: () => rootRoute,
} as any)

const DemosInputRoute = DemosInputImport.update({
  path: '/demos/input',
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
    '/demos/input': {
      id: '/demos/input'
      path: '/demos/input'
      fullPath: '/demos/input'
      preLoaderRoute: typeof DemosInputImport
      parentRoute: typeof rootRoute
    }
    '/demos/popover': {
      id: '/demos/popover'
      path: '/demos/popover'
      fullPath: '/demos/popover'
      preLoaderRoute: typeof DemosPopoverImport
      parentRoute: typeof rootRoute
    }
    '/demos/select': {
      id: '/demos/select'
      path: '/demos/select'
      fullPath: '/demos/select'
      preLoaderRoute: typeof DemosSelectImport
      parentRoute: typeof rootRoute
    }
    '/demos/toggle-switch': {
      id: '/demos/toggle-switch'
      path: '/demos/toggle-switch'
      fullPath: '/demos/toggle-switch'
      preLoaderRoute: typeof DemosToggleSwitchImport
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
  DemosInputRoute,
  DemosPopoverRoute,
  DemosSelectRoute,
  DemosToggleSwitchRoute,
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
        "/demos/input",
        "/demos/popover",
        "/demos/select",
        "/demos/toggle-switch",
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
    "/demos/input": {
      "filePath": "demos/input.tsx"
    },
    "/demos/popover": {
      "filePath": "demos/popover.tsx"
    },
    "/demos/select": {
      "filePath": "demos/select.tsx"
    },
    "/demos/toggle-switch": {
      "filePath": "demos/toggle-switch.tsx"
    },
    "/demos/typography": {
      "filePath": "demos/typography.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

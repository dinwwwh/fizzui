import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { tabGroup } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function TabGroupDemo() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Tabs defaultValue="tab1">
          <TabsList className={`${tabGroup}`}>
            <TabsTrigger value="tab1" className={`${tabGroup.item}`}>
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" className={`${tabGroup.item}`}>
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab-n" className={`${tabGroup.item}`} disabled>
              Tab n
            </TabsTrigger>
            <TabsTrigger value="tab3" className={`${tabGroup.item}`}>
              Tab 3
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            <p>Tab 1 content</p>
          </TabsContent>

          <TabsContent value="tab2">
            <p>Tab 2 content</p>
          </TabsContent>

          <TabsContent value="tab3">
            <p>Tab 3 content</p>
          </TabsContent>
        </Tabs>
      </DemoFlexRow>

      <DemoFlexRow>
        <Tabs defaultValue="tab1">
          <TabsList className={`${tabGroup({ size: 'sm' })}`}>
            <TabsTrigger value="tab1" className={`${tabGroup({ size: 'sm' }).item}`}>
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" className={`${tabGroup({ size: 'sm' }).item}`}>
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab-n" className={`${tabGroup({ size: 'sm' }).item}`} disabled>
              Tab n
            </TabsTrigger>
            <TabsTrigger value="tab3" className={`${tabGroup({ size: 'sm' }).item}`}>
              Tab 3
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            <p>Tab 1 content</p>
          </TabsContent>

          <TabsContent value="tab2">
            <p>Tab 2 content</p>
          </TabsContent>

          <TabsContent value="tab3">
            <p>Tab 3 content</p>
          </TabsContent>
        </Tabs>
      </DemoFlexRow>

      <DemoFlexRow>
        <Tabs defaultValue="tab1" style={{ width: '100%' }}>
          <TabsList className={`${tabGroup}`}>
            <TabsTrigger value="tab1" className={`${tabGroup.item}`}>
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" className={`${tabGroup.item}`}>
              Tab 2
            </TabsTrigger>
            <TabsTrigger value="tab-n" className={`${tabGroup.item}`} disabled>
              Tab n
            </TabsTrigger>
            <TabsTrigger value="tab3" className={`${tabGroup.item}`}>
              Tab 3
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1">
            <p>Tab 1 content</p>
          </TabsContent>

          <TabsContent value="tab2">
            <p>Tab 2 content</p>
          </TabsContent>

          <TabsContent value="tab3">
            <p>Tab 3 content</p>
          </TabsContent>
        </Tabs>
      </DemoFlexRow>
    </DemoContainer>
  )
}

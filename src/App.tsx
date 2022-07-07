import { LayoutEngine } from '@sergeyvbo/layout-engine';
import { layoutDictionary } from './lib/layoutDictionary';
import { viewDictionary } from './lib/viewDictionary';

function createLayout(componentName: string) {
  return layoutDictionary[componentName];
}
function createView(componentName: string) {
  return viewDictionary[componentName];
}

function App() {
  return (
    <LayoutEngine 
      modelId={9}
      createLayout={createLayout}
      createView={createView}
    />
  );
}

export default App;

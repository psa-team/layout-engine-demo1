import { LayoutEngine } from '@sergeyvbo/layout-engine';

function Layout(props: any) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
}

function View(props: any) {
  console.log(props);
  return (
    <div>
      <h3>{props.context?.name}</h3>
      {JSON.stringify(props)}
    </div>
  );
}

function createLayout(componentName: string) {
  return Layout;
}
function createView(componentName: string) {
  return View;
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

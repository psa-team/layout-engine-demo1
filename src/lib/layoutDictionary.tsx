import DefaultLayout from "../components/layouts/DefaultLayout";

const Layout0 = () => {
  return (
    <p>
      App layout!
    </p>
  );
};

const Layout1 = () => {
  return (
    <p>
      Layout1!
    </p>
  );
};

const layoutDictionary: {[id: string]: any} = {
  "appLayout": DefaultLayout,
  "layout1": Layout1,
  "defaultLayout": Layout0
};

export { layoutDictionary };
import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }

          const Page = route.component;
          return <Route
            key={index}
            path={route.path}
            element={<Layout >
              <Page />
            </Layout>} />
        })}
      </Routes>
    </Router>
  );
}

export default App;

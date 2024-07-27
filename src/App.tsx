import { Route, Routes } from "react-router-dom";
import { Verse } from "./components/Verse";
import { AppLayout } from "./components/layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Verse />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import ShoppingPage from "../../../component-patterns/pages/ShoppingPage";

const LazyLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShoppingPage />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default LazyLayout;

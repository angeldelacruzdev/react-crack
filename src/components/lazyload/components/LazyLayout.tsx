import { Route, Routes } from "react-router-dom";

 

const LazyLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Hola mundo</h1>} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default LazyLayout;

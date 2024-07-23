import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = React.lazy(() => import("./Home"));
const MobileApps = React.lazy(() => import("./MobileApps.js"));
const Blogs = React.lazy(() => import("./Blogs"));
const NewSubject = React.lazy(() =>
  import("./components/blog_section/new_subject.js")
);
const Subject = React.lazy(() =>
  import("./components/blog_section/subject.js")
);
const LitLoom = React.lazy(() => import("./components/apps_view/LitLoom.js"));
const CarWave = React.lazy(() => import("./components/apps_view/CarWave.js"));

function App() {
  AOS.init();
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-center text-white font-bold text-2xl">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileapps" element={<MobileApps />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/subject" element={<Subject />} />
          {/* Add the Subject route */}
          <Route path="/blogs/newsubject" element={<NewSubject />} />
          <Route path="/mobileapps/carwave" element={<CarWave />} />
          <Route path="/mobileapps/litloom" element={<LitLoom />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

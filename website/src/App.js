import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./images/loading.png";

const Home = React.lazy(() => import("./Home"));
const MobileApps = React.lazy(() => import("./MobileApps.js"));
const Blogs = React.lazy(() => import("./Blogs"));
const NewSubject = React.lazy(() =>
  import("./components/blog_section/new_subject.js")
);
const Subject = React.lazy(() =>
  import("./components/blog_section/subject.js")
);
const Edit = React.lazy(() => import("./components/blog_section/edit_blog"));
const LitLoom = React.lazy(() => import("./components/apps_view/LitLoom.js"));
const CarWave = React.lazy(() => import("./components/apps_view/CarWave.js"));

function App() {
  AOS.init();
  return (
    <div>
      <Suspense
        fallback={
          <img
            src={Loading}
            alt="Loading"
            className="my-10 animate-spin w-14 mx-auto"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileapps" element={<MobileApps />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/subject" element={<Subject />} />
          <Route path="/blogs/edit" element={<Edit />} />

          <Route path="/blogs/newsubject" element={<NewSubject />} />
          <Route path="/mobileapps/carwave" element={<CarWave />} />
          <Route path="/mobileapps/litloom" element={<LitLoom />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
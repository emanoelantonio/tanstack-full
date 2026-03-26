import { CachingExample } from "./components/caching-example";
import "./index.css";

function App() {
  return (
    <>
      <div className="p-4">
        <h2 className="justify-center items-center text-2xl ">Tanstack Full App</h2>
        {/* <QueryExemple /> */}
        {/* <MutationExample /> */}
      </div>
      <CachingExample />
    </>
  );
}

export default App;

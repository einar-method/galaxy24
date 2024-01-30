// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://oehgvkqjvcnqlrzzcwto.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laGd2a3FqdmNucWxyenpjd3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NzAzMjksImV4cCI6MjAyMjE0NjMyOX0.EFrW4lySRGIZ8xdDssabVPe03__BgrNKfgiBJD_TR_A");

function App() {
  const [countries, setCountries] = useState([]);
  const headerText = "Countries"

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <main>
    <h1>{headerText}</h1>
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
    </main>
  );
}

export default App;
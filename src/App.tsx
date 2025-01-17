import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

import { useState } from "react";
import { catData, catImages } from "./data/cat-data";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  const [cats] = useState<Array<Cat>>(catData);

  const catCount = cats.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
              image={catImages.find((image) => image.id === cat.id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

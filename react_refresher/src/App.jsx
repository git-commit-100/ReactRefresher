import getRandomValue from "./utilities/random";
import images from "./utilities/images";
import CORE_CONCEPTS from "./utilities/data";

const headerValues = ["Crucial", "Important", "Fundamental"];

function Header() {
  const headerValue = headerValues[getRandomValue(headerValues.length)];

  return (
    <>
      <header>
        <img src={images.reactCoreImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {headerValue} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <div id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((element, index) => {
              return (
                <li key={index}>
                  <img src={element.image} alt="Stylized atom" />
                  <h1>{element.title}</h1>
                  <p>{element.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

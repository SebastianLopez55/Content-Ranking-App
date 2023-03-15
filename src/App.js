// Description: This is the main component of the app.
//  It is the first component that is rendered when the app is loaded.

import "./style.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>Today I Learned</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}
function NewFactForm() {
  return <form className="fact-form"> Fact Form </form>;
}

function CategoryFilter() {
  return <aside> Category Filter </aside>;
}

function FactList() {
  return <section> Fact List </section>;
}

export default App;

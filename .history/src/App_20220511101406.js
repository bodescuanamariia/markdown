import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="">
        <textarea className="input"></textarea>
      </section>
      mark-down
    </main>
  );
}

export default App;

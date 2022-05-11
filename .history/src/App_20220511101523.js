import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          valiue={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>
      mark-down
    </main>
  );
}

export default App;
import { useState } from "react";

export const Assignment4 = () => {
  const [wordCount, setWordCount] = useState();
  const [paragraph, setParagraph] = useState("");

  function generatePara() {
    const words = [
      "lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
    ];

    let result = "";
    for (let i = 0; i < wordCount; i++) {
      result += words[Math.floor(Math.random() * words.length)] + " ";

      setParagraph(result.trim() + "");
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full m-5">
        <h2 className="font-bold text-xl">Para Generator</h2>

        <div className="w-full h-52">
          <input
            type="text"
            placeholder="Enter Number of Words"
            className="border-2 w-4/5 p-2"
            onInput={(e) => setWordCount(e.target.value)}
          />
          <button
            className="ml-2 rounded-2xl text-sm bg-black text-white p-2"
            onClick={generatePara}
          >
            Generate
          </button>
        </div>
        <div>{paragraph}</div>
      </div>
    </>
  );
};

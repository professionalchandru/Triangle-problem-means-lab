import { useState } from "react";
import calculateMaximumTotal from "./calculateMaximumTotal";
import TriangleTree from "./components/triangleTree";
import { useEffect } from "react";

const App = () => {

  const [textFromFile, setTextFromFile] = useState(null);
  const [arrayInput, setArrayInput] = useState([]);
  const [maximumTotal, setMaximumTotal] = useState(0);
  const [selectedNodeIndexArrayObject, setSelectedNodeIndexArrayObject] =
    useState(null);

    // This useEffect will calculate maximumTotal of the triangle and path of the triangle
  useEffect(() => { 
    if (arrayInput.length) {
      const data = calculateMaximumTotal(arrayInput);
      setMaximumTotal(data.maximumTotal);
      setSelectedNodeIndexArrayObject(data.selectedNodeIndexArrayObject);
    }
  }, [arrayInput]);

  // This useEffect is responsible for reading a input from file and convert it into actual input(arrayInput)
  useEffect(() => {
    if (textFromFile && typeof textFromFile === "string") {
      let i = 1; // this will say which row we are processing
      const rowArr = []; //processed row will be kept in rowArr
      let charArry = []; //Coulmn of each row are stored here as number 
      let localString = ""; //holds current set of character
      let count = 0; // used for knowing all characters are read from file

      for (let char of textFromFile) {
        if (char === "\r" || char === "\n") { // Checking the next line and end of line
          count += 1;
          continue;
        } else if (char.trim() !== "") { // Checking the character is whitespace
          localString = localString + char;
          count += 1;
        } else {
          charArry.push(Number(localString)); // Conver current set of string to number and store it in charArray
          localString = "";
          if (i === charArry.length) { // Checking row and charArray having same length to move to next row
            rowArr.push(charArry);
            i += 1;
            charArry = [];
          }
          count += 1;
        }
      }

      if (textFromFile.length === count) {
        setArrayInput(rowArr); // If All character is processed then updating actual input
      }

    }
  }, [textFromFile]);

  // This function will read the text
  const handleFile = (e) => {
    const content = e.target.result;
    setTextFromFile(content);
  };

  // Listens for file upload
  const onFileChange = (event) => {
    let fileData = new FileReader();
    fileData.onloadend = handleFile;
    fileData.readAsText(event.target.files[0]);
  };

  return (
    <div className="relative">
      {maximumTotal ? (
        <>
          <small className="font-bold">*Note: please reduce your zoom size to view entire triangle</small>
          <p className="text-3xl text-center mt-10 pb-10 italic text-blue-600">
            total {maximumTotal}
          </p>
        </>
      ) : (
        <>
          <div className="w-screen mx-auto mt-10 flex items-center justify-center cursor-pointer">
            <label
              htmlFor="file-input"
              className="text-lg pr-6 text-blue-600 cursor-pointer"
            >
              Please upload triangle.txt file
            </label>
            <input
              type="file"
              name="file-input"
              id="file-input"
              className="cursor-pointer"
              onChange={(e) => onFileChange(e)}
            />
          </div>
        </>
      )}
      <button
        className="w-full pt-3 text-red-700 font-medium text-right absolute -top-10 right-10"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>

      {arrayInput?.length && selectedNodeIndexArrayObject ? (
        <TriangleTree
          selectedNodeIndexArrayObject={selectedNodeIndexArrayObject}
          triangleArray={arrayInput}
        />
      ) : null}
    </div>
  );
};

export default App;

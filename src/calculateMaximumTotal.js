const calculateMaximumTotal = (triangleArray) => {

  let maximumTotal = triangleArray[0][0]; // We are taking first row and first colum as default total

  let selectedNodeIndexArrayObject = [{ i: 0, j: 0 }]; // we are taking the first row and column as default selected index

  for (let i = 1; i < triangleArray.length; i++) {

    for (let j = 0; j <= i; j++) {

      let lastSelectedJIndex = selectedNodeIndexArrayObject[selectedNodeIndexArrayObject.length - 1].j; // This will calculate last selected column index 

      let lastSelectedJIndexPlusOne = selectedNodeIndexArrayObject[selectedNodeIndexArrayObject.length - 1].j + 1; // This will calculate next index of last selected column index 

      let leftValue = triangleArray[i][lastSelectedJIndex]; // this will calculate value of last selected column index 

      let rightValue = triangleArray[i][lastSelectedJIndexPlusOne]; // this will calculate value of next column of last selected column 

      if (j === lastSelectedJIndex) { 

        if (leftValue >= rightValue) {

          maximumTotal += leftValue;

          selectedNodeIndexArrayObject.push({ i, j: lastSelectedJIndex });

          break;

        } else {

          maximumTotal += rightValue;

          selectedNodeIndexArrayObject.push({ i, j: lastSelectedJIndexPlusOne });

          break;
        }

      } else {

        continue;

      }
    }
  }

  return {
    maximumTotal,
    selectedNodeIndexArrayObject
  }
};

export default calculateMaximumTotal;
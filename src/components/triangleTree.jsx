/* eslint-disable react/prop-types */
const TriangleTree = ({ triangleArray, selectedNodeIndexArrayObject }) => {
  return (
    <>
      <div className="w-full h-full mx-auto">
        {triangleArray?.map((row, rowIndex) => {
          return (
            <div
              className="w-full h-full inline-flex gap-x-5 gap-y-14 justify-center items-center content-center"
              key={rowIndex}
            >
              {row?.map((column, columnIndex) => {
                return (
                  <div
                    key={rowIndex.toString() + columnIndex.toString()}
                    className={`text-center ${
                      selectedNodeIndexArrayObject[rowIndex].i === rowIndex &&
                      selectedNodeIndexArrayObject[rowIndex].j === columnIndex
                        ? "text-red-400 font-bold"
                        : "text-black font-normal"
                    } text-base`}
                  >
                    {column}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TriangleTree;

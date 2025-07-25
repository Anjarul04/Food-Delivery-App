const Shimmer = () => {
  return (
    <div className="mt-32 mb-6 flex flex-wrap gap-6 justify-center ">
      {Array(15).fill(0).map((_, index) => (
        <div
          key={index}
          className="w-[300px] h-[250px] bg-gray-200 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;

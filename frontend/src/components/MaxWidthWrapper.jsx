const MaxWidthWrapper = ({ children }) => {
  return (
    <div className={"max-w-xl md:max-w-6xl mx-auto px-4 pt-4 pb-8"}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

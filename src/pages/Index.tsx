const Index = () => {
  console.log("Hello World page loaded successfully!");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-600">
          Hello World!
        </h1>
        <p className="text-lg text-green-600">
          Welcome to my first web page!
        </p>
      </div>
    </div>
  );
};

export default Index;
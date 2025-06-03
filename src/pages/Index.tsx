const Index = () => {
  console.log("Hello World page loaded successfully!");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 tracking-tight">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-md mx-auto leading-relaxed">
          Welcome to your new web application! 
          <span className="block mt-2 text-lg text-gray-500">
            Ready to build something amazing?
          </span>
        </p>
        
        <div className="pt-4">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
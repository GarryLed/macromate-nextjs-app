

export default function GridShowcase() {
    return (
      <div className="w-full max-w-[1200px] mx-auto p-4">
        {/* Grid - 2 Columns */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">Card 1</div>
          <div className="bg-white p-4 rounded-lg shadow">Card 2</div>
        </div>
  
        {/* Grid - 3 Columns */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">Card 1</div>
          <div className="bg-white p-4 rounded-lg shadow">Card 2</div>
          <div className="bg-white p-4 rounded-lg shadow">Card 3</div>
        </div>
      </div>
    );
  }
  
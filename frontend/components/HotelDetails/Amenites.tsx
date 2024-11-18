interface Props {
    amenities: string[];
  }
  
  const Amenities: React.FC<Props> = ({ amenities }) => {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Amenities;
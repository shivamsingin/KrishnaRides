import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Luggage, Fuel } from "lucide-react";

interface FleetCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  seats: number;
  bags: number;
  fuelType: string;
  pricePerKm: number;
  categoryColor?: string;
}

export default function FleetCard({
  name,
  category,
  description,
  image,
  seats,
  bags,
  fuelType,
  pricePerKm,
  categoryColor = "bg-blue-500"
}: FleetCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={`${name} - ${description}`}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-xl">{name}</h3>
          <Badge className={`${categoryColor} text-white`}>
            {category}
          </Badge>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {seats} Seats
          </span>
          <span className="flex items-center">
            <Luggage className="w-4 h-4 mr-1" />
            {bags} Bags
          </span>
          <span className="flex items-center">
            <Fuel className="w-4 h-4 mr-1" />
            {fuelType}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-krishna-black">
            ₹{pricePerKm}/km
          </span>
          <Button className="bg-krishna-gold text-krishna-black hover:bg-yellow-500">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

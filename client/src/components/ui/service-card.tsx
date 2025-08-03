import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="text-center p-6 bg-gray-50 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="w-16 h-16 bg-krishna-gold rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-krishna-black" />
        </div>
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

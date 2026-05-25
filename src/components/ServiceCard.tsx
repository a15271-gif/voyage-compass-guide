import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
}

const ServiceCard = ({ title, description, image, features }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-strong transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 mt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex gap-3 pt-4 mt-auto">
          <Link to="/quote" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
              Pedir Serviço
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-border hover:bg-accent">
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

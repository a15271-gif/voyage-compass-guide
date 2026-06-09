// @ts-nocheck
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features?: string[];
  slug?: string;
}

const ServiceCard = ({ title, description, image, features, slug }: ServiceCardProps) => {
  const detailHref = slug ? `/services/${slug}` : "/services";
  const CardWrapper = slug ? Link : "div";
  const wrapperProps = slug ? { to: detailHref } : {};

  return (
    <div className="group relative bg-card/60 backdrop-blur-xl border border-white/[0.06] rounded-3xl overflow-hidden shadow-elegant hover:shadow-strong hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-500 ease-out h-full flex flex-col">
      <CardWrapper {...wrapperProps} className="relative h-56 overflow-hidden flex-shrink-0 block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
      </CardWrapper>

      <div className="p-7 flex flex-col flex-grow">
        {slug ? (
          <Link to={detailHref}>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
        ) : (
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
        )}
        <p className="text-muted-foreground mt-3 leading-relaxed">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2.5 mt-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-foreground/85">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-3 pt-6 mt-auto">
          {slug ? (
            <Link to={detailHref} className="flex-1">
              <Button className="w-full">Saber Mais</Button>
            </Link>
          ) : (
            <Link to="/quote" className="flex-1">
              <Button className="w-full">Pedir Serviço</Button>
            </Link>
          )}
          <Link to={slug ? "/quote" : "/contact"}>
            <Button variant="outline" size="icon" aria-label="Avançar">
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

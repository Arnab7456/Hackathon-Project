import React from 'react';
import { FeatureCard } from './FeatureCard';

const Feature = [
    {
        cardimage : "res.jpg",
        title : "Result analysis",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },{
        cardimage : "res.jpg",
        title : "Result analysis",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },
    {
        cardimage : "res.jpg",
        title : "Result analysis",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },
    {
        cardimage : "res.jpg",
        title : "Result analysis",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    }
]

export const Features = () => {
    return (
        <div className="flex flex-wrap justify-center m-14">
          {Feature.map(fec => (
            <div key={fec.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <FeatureCard
                cardimage={fec.cardimage}
                title={fec.title}
                description={fec.description}
              />
            </div>
          ))}
        </div>
      );
      
};

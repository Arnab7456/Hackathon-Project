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
        <div className=" m-14 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
            {Feature.map(fec => (
                <div key={fec.title}>
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

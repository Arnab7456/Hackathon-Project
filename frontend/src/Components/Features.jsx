import React from 'react';
import { FeatureCard } from './FeatureCard';

const Feature = [
    {
        cardimage : "res.jpg",
        title : "Result analysis",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },{
        cardimage : "one.png",
        title : "One to One mentorship",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },
    {
        cardimage : "per.png",
        title : "performance based assessment",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    },
    {
        cardimage : "test.png",
        title : "24/7 doubt support",
        description: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus aspernatur suscipit consequuntur. Tempora ea libero facilis ut perspiciatis cum officia? Incidunt aliquam numquam nostrum! Suscipit odio corrupti deleniti maiores."  
    }
    ,{
      cardimage: "ai.jpg",
      title: "Ai based attendence",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nihil sunt animi atque ab iste inventore repellendus libero cupiditate voluptates dicta sed adipisci laborum asperiores doloribus, quidem amet ut accusantium!"
    },
    {
      cardimage: "flutter.jpg",
      title: "Advanced Mobile app",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nihil sunt animi atque ab iste inventore repellendus libero cupiditate voluptates dicta sed adipisci laborum asperiores doloribus, quidem amet ut accusantium!"
    },
    {
      cardimage: "mock.jpg",
      title : "mock test",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum totam explicabo voluptatum in maiores excepturi quos nihil soluta nisi quam aut, similique ipsam consectetur, commodi possimus reiciendis quisquam dolor."
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

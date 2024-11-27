import React from 'react';
import ChildComponent from './ChildComponent';
import Image from 'next/image';

const ArrayMap = () => {
    const ParentComponent = [
        { 
            carName: "Toyota", 
            price: 2800000, 
            image: <Image src="/toyota-corrola.png" alt="TOYOTA COROLLA" width={160} height={160} />, 
            reviews: 460 
        },
        { 
            carName: "Civic", 
            price: 3500000, 
            image: <Image src="/honda-civic.png" alt="HONDA CIVIC" width={160} height={160} />,
            reviews: 600 
        },
        { 
            carName: "Alto", 
            price: 1900000, 
            image: <Image src="/suzuki-alto.png" alt="SUZUKI ALTO" width={160} height={160} />, 
            reviews: 400 
        }
    ];

    return (
        <div>    
            {
                ParentComponent.map((veh, index) => {
                    return (
                        <div key={index} className="flex flex-col mt-2 text-4xl font-bold">
                            <ChildComponent />
                            <div>Car Image: {veh.image}</div>
                            <h4>Car Name: {veh.carName}</h4>
                            <p>Car Price: {veh.price}</p>                            
                            <p>Car Reviews: {veh.reviews}</p>
                            <br />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ArrayMap;
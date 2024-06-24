import React from 'react';
import doctor from '../assets/Doctor.jpg';

export default function Upper_part() {
    return (
        <div className="bg-white text-slate-700 mx-10">
            <div className="container mx-auto flex justify-between items-center m-5 mb-1 p-5">
                <div className="flex items-center">
                    <img src={doctor} alt="Doctor" className="h-20 w-20 rounded-full mx-5 ml-14" />
                    <div>
                        <div className="text-xl font-bold">Dr. Darlene Robertson</div>
                        <p className="text-sm text-gray-500">Nutritionist</p>
                    </div>
                </div>
                <div>
                    <p className="text-green-200 mr-15 pr-20">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            
            <div style={{ backgroundColor: "#F7FDED" }} className='h-2 w-screen mt-0 mr-0'></div>
        </div>
    );
}

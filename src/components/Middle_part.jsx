import React, { useState } from 'react';
import imp from '../assets/scooty.png';
import fruit from '../assets/fruit.png';
import Vegetables from '../assets/Vegetables.png';
import Millets from '../assets/3.png';
import Coconut from '../assets/Coconut.png';
import Sprout from '../assets/5.png';
import Dry_fruit from '../assets/Dry fruits.png';
import Tea from '../assets/tea.png';

const items = [
    { img: fruit, label: 'Fruits', daily: 1000 },
    { img: Vegetables, label: 'Vegetables', daily: 500 },
    { img: Millets, label: 'Millets', daily: 'As needed' },
    { img: Coconut, label: 'Coconut', daily: 'As needed' },
    { img: Sprout, label: 'Sprout', daily: 100 },
    { img: Dry_fruit, label: 'Dry Fruits', daily: 100 },
    { img: Tea, label: 'Tea', daily: 'As needed' }
];

export default function Lower_part() {
    const [timePeriod, setTimePeriod] = useState('weekly');

    const getQuantity = (item) => {
        if (typeof item.daily === 'string') return item.daily;

        switch (timePeriod) {
            case 'daily':
                return `${item.daily} gm`;
            case 'weekly':
                return `${item.daily * 7} gm`;
            case 'monthly':
                return `${item.daily * 7 * 4} gm`;
            default:
                return item.daily;
        }
    };

    return (
        <div style={{ backgroundColor: '#F7FDED' }} className="p-14">
            <div className="m-12 p-0 justify-center items-center">
                <div className='flex justify-center p-7 pl-12 w-3/4'>
                    <div className="text-slate-700 font-bold text-center mx-3 p-3 text-2xl ml-36">HEALTHY GROCERY LIST</div>
                    <select
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        className="bg-white text-slate-700 font-bold text-center mx-3 p-3 text-2xl flex items-center ml-24"
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>

                <div className='flex mx-1'>
                    <div className='flex-1 w-2/3'>
                        {items.map((item, index) => (
                            <div key={index} style={{ backgroundColor: '#eefff5' }} className='flex justify-between m-4 shadow-md h-18'>
                                <div className='flex items-center ml-6'>
                                    <img src={item.img} className="h-16 w-16" alt={item.label} />
                                    <div className='text-slate-500 rounded-lg p-6 ml-4 text-lg'>{item.label}</div>
                                </div>
                                <div className='flex items-center rounded-lg p-6 ml-14 text-lg'>
                                    {getQuantity(item)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-end p-0 m-0 -mt-5 pt-0'>
                        <img src={imp} alt="Scooty" className="h-auto w-auto scale-75" />
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="w-screen h-24 justify-center flex mt-5 mb-0">
                <div style={{ backgroundColor: "#a6cc39" }} className="bg-green-500 justify-center items-center flex p-6 h-16 w-48 rounded-lg text-white font-bold text-lg">
                    <p className="flex justify-center items-center">BUY NOW</p>
                </div>
            </div>

        </div>
    );
}

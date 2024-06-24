import React, { useState } from 'react';
import imp from '../assets/scooty.png';
import initialItems from '../file storage/Items.js';

export default function Lower_part() {
    const [timePeriod, setTimePeriod] = useState('weekly');
    const [food, setFood] = useState('');
    const [quantity, setQuantity] = useState('');
    const [Items, setItems] = useState(initialItems);

    const handleFoodChange = (e) => {
        setFood(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddItem = () => {
        if (food.trim() !== '' && quantity.trim() !== '') {
            const newItem = {
                img: '',
                label: food,
                daily: isNaN(quantity) ? quantity : parseInt(quantity)
            };
            setItems([ ...Items,newItem]); 
            setFood('');
            setQuantity('');
        } else {
            alert('Please enter both food item and quantity.');
        }
    };

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
        <div className='mt-0 mx-10'>
            <div className='bg-white p-5'>
                <div style={{ backgroundColor: "#ecfad3" }} className='h-60 m-4 p-5 flex'>
                    <div className='flex-1 m-1'>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-3 py-3 font-medium text-slate-700 whitespace-nowrap">
                                            <input
                                                type="text"
                                                value={food}
                                                onChange={handleFoodChange}
                                                placeholder="Enter food item"
                                                className="text-slate-500 rounded-lg  text-base w-full"
                                            />
                                        </th>
                                        <td className="px-6 py-3">
                                            <input
                                                type="text"
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                                placeholder="Enter quantity"
                                                className="text-slate-500 rounded-lg  text-base"
                                            />
                                            <button onClick={handleAddItem} className="bg-green-500 text-white font-bold px-3 py-1 rounded-full hover:shadow-lg ml-2">+</button>
                                        </td>
                                    </tr>
                                    {Items.slice(0, 2).map((item, index) => (
                                        <tr key={index} className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">{item.label}</th>
                                            <td className="px-6 py-4">{item.daily}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='flex-1 m-1'>
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Description</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Items.slice(3, 6).map((item, index) => (
                                        <tr key={index} className="bg-white border-b">
                                            <th scope="row" className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">{item.label}</th>
                                            <td className="px-6 py-4">{item.daily}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ecfad3" }} className='h-60 m-4 p-5'>
                    <p className='text-slate-700 font-bold p-3'>Advice</p>
                    <div className='bg-white rounded-lg p-5'>
                        Lorem ipsum dolor sit amet consectetur. Volutpat facilisi porta phasellus tempor. In fusce dolor mi id adipiscing. Et lacus lorem nunc amet. Non dolor purus egestas massa tincidunt donec lacinia. Volutpat odio ac maecenas amet. Nullam volutpat nulla lectus et. Sed eu fermentum urna enim augue.
                    </div>
                </div>
            </div>
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
                            {Items.map((item, index) => (
                                <div key={index} style={{ backgroundColor: '#eefff5' }} className='flex justify-between m-4 shadow-md h-18 hover:shadow-lg'>
                                    <div className='flex items-center ml-6'>
                                        {item.img && <img src={item.img} className="h-16 w-16" alt={item.label} />}
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
                <div className="w-screen h-24 justify-center flex mt-5 mb-0 ml-0">
                    <div style={{ backgroundColor: "#a6cc39" }} className="bg-green-500 justify-center items-center flex p-6 h-16 w-48 rounded-lg text-white font-bold text-lg">
                        <p className="flex justify-center items-center">BUY NOW</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

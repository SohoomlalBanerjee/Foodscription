import React from 'react';
import doctor from '../assets/Doctor.jpg';

export default function Upper_part() {
    return (
        <div className="bg-white text-slate-700 m-10 p=5">

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
                <div style={{ backgroundColor: "#F7FDED" }} className=' h-2 w-screen mt-0'></div>
            <div className='bg-white p-5 m-3'>
                <div style={{ backgroundColor: "#ecfad3" }} className='h-60 m-4 p-5 flex '>

                    <div className='flex-1 m-1'>

                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='flex-1 m-1'>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-700">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b  dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-slate-700">
                                            Lorem ipsum dolor sit amet consectetur.
                                        </th>
                                        <td class="px-6 py-4">
                                            100g
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>
                <div style={{ backgroundColor: "#ecfad3" }} className='h-60 m-4 p-5 '>
                    <p className='text-slate-700 font-bold p-3'>
                        Advice
                    </p>
                    <div className='bg-white rounded-lg p-5 pd-3'>
                        Lorem ipsum dolor sit amet consectetur. Volutpat facilisi porta phasellus tempor. In fusce dolor mi id adipiscing. Et lacus lorem nunc amet. Non dolor purus egestas massa tincidunt donec lacinia. Volutpat odio ac maecenas amet. Nullam volutpat nulla lectus et. Sed eu fermentum urna enim augue.
                    </div>
                </div>
            </div>
        </div>
    );
}

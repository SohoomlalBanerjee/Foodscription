import React from 'react';

export default function Bottom() {
    return (
        <div style={{ backgroundColor: '#F7FDED' }} className='h-auto w-screen pb-10 pl-10 pr-10'>
            <h1 className="font-bold text-slate-700 text-xl mb-5">
                INSTRUCTION:
            </h1>

            <div className='bg-white rounded-lg p-5 shadow-md h-full'>
                <h1 className="font-bold text-slate-700 text-xl mb-5">
                    Points to note for best benefit of FoodCription :
                </h1>
                <div className='grid grid-cols-2 gap-4 text-slate-700 m-5'>
                    <div>
                        <p className='p-3 text-slate-500'>1. The Calculated Weight of the food is without Peel.</p>
                        <p className='p-3 text-slate-500'>3. Wash Food and Hands properly before consuming.</p>
                        <p className='p-3 text-slate-500'>5. Include more colorful foods, More colors equals more nutrients.</p>
                        <p className='p-3 text-slate-500'>7. Stay Hydrated throughout the Day.</p>
                    </div>
                    <div>
                        <p className='p-3 text-slate-500'>2. Chew Properly (32 times - approximately) for best Digestion.</p>
                        <p className='p-3 text-slate-500'>4. Boil / Steam vegetables, if needed.</p>
                        <p className='p-3 text-slate-500'>6. Eat Mindfully- Do not engage in other activities (TV, Talks etc) while eating.</p>
                    </div>
                </div>

                <h1 className="font-bold text-slate-700 text-xl mb-5">
                    IMPORTANT NOTE:
                </h1>
                <div className='text-slate-700 m-5'>
                    <div>
                        <p className='p-3 text-slate-500'>The FoodCription Protocol is inspired and curated from 'Verified Health Sources'. This is not a replacement for Medical Advice and does not work in case of emergency.</p>
                        <p className='p-3 text-slate-500'>Consult, Discuss the protocol with your Healthcare Professional. FoodCription recommends Lifestyle advice Protocol backed by research to help address root cause of diseases.</p>
                        <p className='p-3 text-slate-500'>This advice is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a life-threatening emergency that requires immediate attention please call 102 or the number for your local emergency service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

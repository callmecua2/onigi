'use client'

import Allmenu from "@/PageComponents/Allmenu"


export default function Menu () {
    return (
        <>
            <div className="main w-full bg-lime-200">
                <div className="inner-main w-full pb-10 flex justify-center items-center flex-col ">
                   <div className="title">
                        <ul className="flex gap-5 mt-10 mb-5">
                            <li className="text-2xl border-2 border-black pl-4 pr-4 rounded-2xl outline-none cursor-pointer">All Menu</li>
                            <li className="text-2xl border-2 border-black pl-4 pr-4 rounded-2xl outline-none cursor-pointer">Best Menu</li>
                            <li className="text-2xl border-2 border-black pl-4 pr-4 rounded-2xl outline-none cursor-pointer">Dessert</li>
                            <li className="text-2xl border-2 border-black pl-4 pr-4 rounded-2xl outline-none cursor-pointer">Baverages</li>
                        </ul>
                    </div>
                    <div className="menu-components w-9/12 pt-10 pb-10 min-h-screen bg-red-400">
                        <Allmenu />
                    </div>     
                </div>
            </div>
        </>
    )
}

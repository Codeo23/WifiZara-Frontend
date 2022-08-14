import React from "react" 
import Mostorderedof from "../chart/Mostorderedof";

const MostTypeof = () =>{
    return(
        <div>
             <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold leading-loose text-white">Effectif des etudiants </h2>
                    
                </div>
                <hr class="border-gray-700" />
                <div class="grid grid-cols-2 gap-x-2">
                    <div>
                    <Mostorderedof/>
                    </div>
                    <div class="flex flex-col gap-y-4">
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
                            <div>
                                <div class="text-sm font-medium text-white">M2</div>
                                <div class="text-xs text-gray-500">13%</div>
                            </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
                            <div>
                                <div class="text-sm font-medium text-white">M1</div>
                                <div class="text-xs text-gray-500">20%</div>
                            </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
                        <div>
                            <div class="text-sm font-medium text-white">L3</div>
                            <div class="text-xs text-gray-500">20%</div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">L2</div>
                            <div class="text-xs text-gray-500">20%</div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">L1</div>
                            <div class="text-xs text-gray-500">27%</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostTypeof;
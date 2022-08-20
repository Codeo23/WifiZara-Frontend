import React from "react" 
import { useSelector } from "react-redux";
import Mostorderedof from "../chart/Mostorderedof";

const MostTypeof = () =>{
    const allStudents = useSelector(state=>state.etudiant)

    const nombre = allStudents.length
    let L1,L2,L3,M1,M2
    if(nombre>0){
        L1 = (Math.round((allStudents.filter(liste=>liste.level.wording === 'L1').length/nombre)*100)/100)*100
        L2 = (Math.round((allStudents.filter(liste=>liste.level.wording === 'L2').length/nombre)*100)/100)*100
        L3 = (Math.round((allStudents.filter(liste=>liste.level.wording === 'L3').length/nombre)*100)/100)*100
        M1 = (Math.round((allStudents.filter(liste=>liste.level.wording === 'M1').length/nombre)*100)/100)*100
        M2 = (Math.round((allStudents.filter(liste=>liste.level.wording === 'M2').length/nombre)*100)/100)*100
    }

    const percentage = {L1,L2,L3,M1,M2}
    return(
        <div>
             <div class="flex flex-col p-6 bg-gray-900 rounded-lg gap-y-6">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold leading-loose text-white">Effectif des etudiants </h2>
                    
                </div>
                <hr class="border-gray-700" />
                <div class="grid grid-cols-2 gap-x-2">
                    <div>
                    <Mostorderedof percentage={percentage}/>
                    </div>
                    <div class="flex flex-col gap-y-4">
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-red" />
                            <div>
                                <div class="text-sm font-medium text-white">M2</div>
                                <div class="text-xs text-gray-500">{percentage.M2}%</div>
                            </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-orange" />
                            <div>
                                <div class="text-sm font-medium text-white">M1</div>
                                <div class="text-xs text-gray-500">{percentage.M1}%</div>
                            </div>
                        </div>
                        <div class="flex gap-x-2 items-start">
                        <div class="w-4 h-4 mt-0.5 rounded-full bg-accent-blue" />
                        <div>
                            <div class="text-sm font-medium text-white">L3</div>
                            <div class="text-xs text-gray-500">{percentage.L3}%</div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">L2</div>
                            <div class="text-xs text-gray-500">{percentage.L2}%</div>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">L1</div>
                            <div class="text-xs text-gray-500">{percentage.L1}%</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostTypeof;
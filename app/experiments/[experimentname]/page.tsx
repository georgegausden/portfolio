
'use client'
import { usePathname } from 'next/navigation'

import { experimentData } from '../page';

export default function ExperimentProject(){
    const pathname = usePathname();
    
    const experimentName = pathname.substring(pathname.lastIndexOf('/') + 1);
    console.log(experimentName)
    const experiment = experimentData.find(exp => exp.title.toLowerCase().replace(/\s+/g, '') === experimentName);

    return(
        <div className="flex">
            <iframe width={'70%'} height={800} src={experiment?.link} className="border border-black w-full"></iframe>

            <div className="pl-10">
                <h2 className="text-xl">{experiment?.title}</h2>
                <p className="pt-10">{experiment?.longDescription}</p>
            </div>
        </div>
    )
    // const { params } = useNavigation();
    // const { experimentname } = params;

    // // Find the experiment in the data array
    // const experiment = experimentData.find(exp => exp.title.toLowerCase().replace(/\s+/g, '') === experimentname);

    
}
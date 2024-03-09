import Link from "next/link";
import { ReactNode } from 'react';
import {motion} from "framer-motion";


interface BranchProps {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
    x3?: string;
    y3?: string;
    x4?: string;
    y4?: string;
    children?: ReactNode;
    index?: number;
    color?: string;
}

const Branch: React.FC<BranchProps> = ({ x1, y1, x2, y2, x3, y3, x4, y4, children, index, color }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <svg
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke='black'
                />
            </svg>
            <Link href="/experiments" style={{ position: 'absolute', top: y2, left: x2, backgroundColor: color }} className={`w-10 h-auto m-0 text-white hover:w-32 ease-in-out duration-500 transition-all pl-2`}>
                <h6>Experiments</h6>
            </Link>

            <svg style={{ position: 'absolute', top: x2, left: y2, width: '50%', height: '50%' }}>
                {children}
                
            </svg>
        </div>
    );
};

export default Branch;
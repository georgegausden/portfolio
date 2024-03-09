import Link from "next/link";
import { ReactNode } from 'react';


interface BranchProps {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
    children?: ReactNode;
}

const Branch: React.FC<BranchProps> = ({ x1, y1, x2, y2, children }) => {
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
                    stroke="black"
                />
            </svg>
            <Link href = {"/experiments"} style={{ position: 'absolute', top: y2, left: x2 }} className="w-10 h-auto m-0 bg-green-500 text-white hover:w-auto ease-in-out duration-500 transition-all">
                <h6>Experiments</h6>
            </Link>

            <div style={{ position: 'absolute', top: y2, left: x2 }}>
                {children}
            </div>
        </div>
    );
};

export default Branch;
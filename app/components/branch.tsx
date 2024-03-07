interface BranchProps {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
}

const Branch: React.FC<BranchProps> = ({ x1, y1, x2, y2 }) => {
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
            <button style={{ position: 'absolute', top: y2, left: x2 }} className="w-10 h-10 bg-black text-white hover:w-16 ease-in-out duration-500 transition-all">
                Text
            </button>
        </div>
    );
};

export default Branch;
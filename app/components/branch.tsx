interface BranchProps {
  rotation: number;
}

export default function Branch({ rotation }: BranchProps){
    return(
        <div>
            <svg width="100%" height="100%" className={`rotate-${rotation}`}>
                <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="black" strokeWidth="2" />
                
                <rect x="45%" y="45%" width="10%" height="10%" fill="black" />
            </svg>

            <div>NAME</div>

            
        </div>
    )
}
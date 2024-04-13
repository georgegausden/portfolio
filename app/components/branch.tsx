'use client'

import { ReactNode } from "react";

//here will be the code for my Branch system component

//use svgs

interface BranchProps {
    
    name: string;
    isActive: boolean;
    xPosition: number;
    yPosition: number;
    children?: ReactNode;

}

interface Branch {
    xPosition: number | undefined;
    yPosition: number | undefined;
    
    name: string;
    isActive: boolean;
    children?: Branch[];
}

interface ChildBranchProps {
    parent: {
      x1: number;
      y1: number;
      isActive: boolean;
    };
    name: string;
    isActive: boolean;
    xPosition: number;
    yPosition: number;
    children?: ReactNode;
  }
  
  const ChildBranch = ({
    name,
    xPosition,
    yPosition,
  
  }: ChildBranchProps) => {
    const x2Box = xPosition;
    const y2Box = yPosition;
  
    let x2BoxString = x2Box.toString() + '%';
    let y2BoxString = y2Box.toString() + '%';
  
    if (x2Box > 50) {
      x2BoxString = (100 - x2Box).toString() + '%';
    }
  
    if (y2Box > 50) {
      y2BoxString = (100 - y2Box).toString() + '%';
    }
  
    return (
      <div>
        <a
          id="homepageLink"
          style={{
            position: 'absolute',
            zIndex: 2,
            ...(y2Box > 50 ? { bottom: y2BoxString } : { top: y2BoxString }),
            ...(x2Box > 50 ? { right: x2BoxString } : { left: x2BoxString }),
            backgroundColor: '#F1E7DD',
          }}
          
          className={`w-32 h-auto m-0 rounded-sm text-center text-transparent hover:w-32 ease-in-out duration-500 transition-all px-2`}
        >
          <h6 className="text-black">{name}</h6>
        </a>
  
      </div>
    );
  };



export default function Branch({ name, isActive, xPosition, yPosition, children}: BranchProps){

    let boxWidthPercentage = 5;
    let boxHeightPercentage = 3;

    let x1 = 50;
    let y1 = 50;

    if (x1!= 50){
        if ((x1 ?? 0) > 50){
            x1 = (x1 ?? 0) - boxWidthPercentage;
        } else{
            x1 = (x1 ?? 0) + boxWidthPercentage;
        }
    }

    if (y1 != 50){
        if ((y1 ?? 0) > 50){
            y1 = (y1 ?? 0) - boxHeightPercentage;
        } else {
            y1 = (y1 ?? 0) + boxHeightPercentage;
        }
    }
   

    let x1String = x1?.toString()+ '%';
    let y1String = y1?.toString() + '%';

    //I put the width as 6% of the total width of the div, maybe calculate it properly later, same with the 2 for the height
   
    let x2 = xPosition;
    let y2 = yPosition;

    if (x2 > 50){
       x2 = x2 - boxWidthPercentage;
    } else{
        x2 = x2 + boxWidthPercentage;
    }

    if (y2 > 50){
        y2 = y2 - boxHeightPercentage;
    } else {
        y2 = y2 + boxHeightPercentage;
    }

    const x2Box = xPosition;
    const y2Box = yPosition;

    let x2String = x2.toString() + '%';
    let y2String = y2.toString() + '%';

    let x2BoxString = x2Box.toString() + '%';
    let y2BoxString = y2Box.toString() + '%';

    
    if (x2Box > 50){
        x2BoxString = (100 - x2Box).toString() + '%';
    }

    if (y2Box > 50){
        y2BoxString = (100 - y2Box).toString() + '%';
    }



    return (
        <div className="w-full h-full absolute">
            {/* if there is a parent to the branch, then use those coordinates for the line */}
            
                <div>
                    <svg
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <line
                            style={{ position: 'absolute' }}
                            x1={x1String}
                            y1={y1String}
                            x2={x2String}
                            y2={y2String}
                            stroke="black"
                        />
                    </svg>

                    <a
                        id="homepageLink"
                        style={{
                            position: 'absolute',
                            zIndex: 2,
                            ...(y2Box > 50 ? { bottom: y2BoxString } : { top: y2BoxString }),
                            ...(x2Box > 50 ? { right: x2BoxString } : { left: x2BoxString }),
                            backgroundColor: '#F1E7DD',
                        }}
                        onMouseEnter={() => {
                            isActive = true;
                            console.log(isActive)
                        }}
                        className={`w-32 h-auto m-0 rounded-sm text-center text-transparent hover:w-32 ease-in-out duration-500 transition-all px-2`}
                    >
                        <h6 className="text-black">{name}</h6>
                    </a>

                    {isActive && (
            <ChildBranch
              parent={{ x1, y1, isActive }}
              name={name}
              isActive={isActive}
              xPosition={xPosition}
              yPosition={yPosition}
            >
              {children}
            </ChildBranch>
          )}
                    
                </div>
            
        </div>
    );
}




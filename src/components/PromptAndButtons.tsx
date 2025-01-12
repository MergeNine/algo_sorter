import React from "react";

//used LLM to set types here

interface Bar {
    id: number;
    height: number;
    charArr: string[];
}

interface PromptAndButtonsProps {
    bars: Bar[];
    setIsSorted: (value: boolean) => void;
    setBars: React.Dispatch<React.SetStateAction<Bar[]>>;
    isSorting: boolean;
    bubbleSort: (bars: Bar[]) => Promise<void>;
    generateArray: () => Bar[];
}


const PromptAndButtons: React.FC<PromptAndButtonsProps> =
    ({
         bars,
         setIsSorted,
         setBars,
         isSorting,
         bubbleSort,
         generateArray
     }) => {
        return (
            <div className="flex flex-col gap-2 mr-2">

                <input type="text" placeholder="What do you want to see?" maxLength={50} className="text-center">
                </input>

                <button className={`text-nowrap`}
                        onClick={() => {

                        }}
                        disabled={isSorting}>
                    Set Input
                </button>


                <div className="flex justify-between gap-2">
                    <button className={`text-nowrap`}
                            onClick={() => {
                                setIsSorted(false)
                                setBars(generateArray())
                            }}
                            disabled={isSorting}>
                        Gen New Arr
                    </button>
                    <button
                        className={`text-nowrap ${isSorting ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => (bubbleSort(bars))}
                        disabled={isSorting}>
                        Bubble Sort
                    </button>
                </div>

            </div>
        )
    }

export default PromptAndButtons
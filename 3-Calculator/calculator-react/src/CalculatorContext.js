import React, { useState, createContext } from "react";

export const CalculatorContext = createContext();

export const CalcProvider = ({ children }) => {
    const [mainText, setMainText] = useState("0");
    const [resetMainTextNextTime, setResetMainTextNextTime] = useState(true);
    const [lastResult, setLastResult] = useState();
    const [currentOperation, setCurrentOperation] = useState();

    const handleKeyClick = (isNumber, label, operator) => {
        if (isNumber) {
            if (resetMainTextNextTime) {
                setMainText(label);
                setResetMainTextNextTime(false);
            } else {
                setMainText((mainText) => {
                    return mainText + label;
                });
            }
        }
            // = case'ini daha yalınlaştırmak için.
        // const math_it_up = {
        //     '+': function (x, y) { return x + y },
        //     '-': function (x, y) { return x - y },
        //     '*': function (x, y) { return x * y },
        //     '/': function (x, y) { return x / y },
        // };

        if (operator) {
            setCurrentOperation(label);
            setResetMainTextNextTime(true);
            switch (label) {
                case "+":
                    if (!lastResult) {
                        setLastResult(Number(mainText));
                    } else {
                        setLastResult(Number(mainText) + lastResult);
                        setMainText(Number(mainText) + lastResult);
                    }

                    break;
                case "-":
                    if (!lastResult) {
                        setLastResult(Number(mainText));
                    } else {
                        setLastResult(lastResult - Number(mainText));
                        setMainText(Number(mainText) - lastResult);
                    }
                    break;
                case "x":
                    if (!lastResult) {
                        setLastResult(Number(mainText));
                    } else {
                        setLastResult(lastResult * Number(mainText));
                        setMainText(Number(mainText) * lastResult);
                    }
                    break;
                case "/":
                    if (!lastResult) {
                        setLastResult(Number(mainText));
                    } else {
                        setLastResult(lastResult / Number(mainText));
                        setMainText(lastResult / Number(mainText));
                    }
                    break;
                    case "=":
                        if (currentOperation === "+") {
                            setMainText(Number(mainText) + lastResult);
                            setLastResult("");
                        }
                        else if (currentOperation === "-") {
                            setMainText(lastResult - Number(mainText));
                            setLastResult("");
                        }
                        else if (currentOperation === "x") {
                            setMainText(lastResult * Number(mainText));
                            setLastResult("");
                        }
                        else if (currentOperation === "/") {
                            setMainText(lastResult / Number(mainText));
                            setLastResult("");
                        }
                        else if (currentOperation === "%") {
                            setMainText((lastResult * Number(mainText)) / 100);
                            setLastResult("");
                        }
                        break;
                    //     case "=":
                    //          TODO: Bu yolun üstüne tekrar çalış , kullanılabilir hale getir
                    // if (currentOperation && currentOperation.length > 0){
                    //     let result = math_it_up[currentOperation](lastResult, Number(mainText))
    
                    //     console.log(currentOperation)
                    //     console.log(lastResult)
                    //     console.log(mainText)
                        
                    //     console.log(result)
                        
                    //     setMainText(result);
                    //     setLastResult("");
                    //     // setCurrentOperation('')
                    //     return
                    // }
                    // break
                case "CE":
                    setLastResult(0);
                    break;
                    case "C":
                        setLastResult(0)
                        setMainText(0)
                        break
                default:
                    break;
            }
        }
    };

    return (
        <CalculatorContext.Provider
            value={{
                mainText,
                setMainText,
                handleKeyClick,
                resetMainTextNextTime,
                setResetMainTextNextTime,
                lastResult,
                currentOperation,
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
};
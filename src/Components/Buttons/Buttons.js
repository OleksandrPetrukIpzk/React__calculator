import {numberPanel} from "../constant";

export const Buttons = ({
                            setChoseNumberFirst,
                            setChoseNumberTwo,
                            isOperation,
                            operation,
                            choseNumberFirst,
                            choseNumberTwo,
                            setIsResume,
                            isResume
                        }) => {

    const changeNumber = (value) => {
        if (value === '=') {
            switch (operation) {
                case '+': {
                    setChoseNumberFirst(prev => Number(prev) + Number(choseNumberTwo));
                    break;
                }
                case '-': {
                    setChoseNumberFirst(prev => Number(prev) - Number(choseNumberTwo));
                    break;
                }
                case '/': {
                    setChoseNumberFirst(prev => Math.round(Number(prev) / Number(choseNumberTwo)));
                    break;
                }
                case '*': {
                    setChoseNumberFirst(prev => Math.round(Number(prev) * Number(choseNumberTwo)));
                    break;
                }
                default: {
                    break;
                }
            }
            setIsResume(true);
        } else if (isOperation) {
            if (value === '.' && choseNumberTwo.indexOf('.') === -1 && choseNumberTwo.length !== 0) {
                let number = choseNumberTwo;
                number += value;
                setChoseNumberTwo(number);
            } else if (value === '0' && choseNumberTwo[0] === '0' && choseNumberTwo.indexOf('.') === -1) {

            } else if (value !== '.') {
                if (isResume) {
                    setChoseNumberTwo(value);
                    setIsResume(false);
                } else {
                    let number = choseNumberTwo;
                    number += value;
                    setChoseNumberTwo(number);
                }

            }
        } else {
            if (value === '.' && choseNumberFirst.indexOf('.') === -1 && choseNumberFirst.length !== 0) {
                let number = choseNumberFirst;
                number += value;
                setChoseNumberFirst(number);
            } else if (value === '0' && choseNumberFirst[0] === '0' && choseNumberFirst.indexOf('.') === -1) {

            } else if (value !== '.') {
                let number = choseNumberFirst;
                number += value;
                setChoseNumberFirst(number);
            }

        }
    }

    return (<div className='numbers'>
        {numberPanel.map(item => <button onClick={() => changeNumber(item)}>{item}</button>)}
    </div>)

}
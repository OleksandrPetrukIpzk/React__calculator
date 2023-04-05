import {operation} from "../constant";


export const Functions = ({
                              setIsOperation,
                              isOperation,
                              setOperation,
                              setChoseNumberTwo,
                              setIsResume,
                              choseNumberFirst
                          }) => {

    const changeOperation = (value) => {

        if (isOperation) {
            setOperation(value);
            setChoseNumberTwo('');
            setIsResume(false);
        } else {
            if (choseNumberFirst !== '') {
                setOperation(value);
                setIsOperation(true);
            }
        }
    }

    return (<div className='operation'>
        {operation.map(item => <button onClick={() => changeOperation(item)}>{item}</button>)}
    </div>)
}
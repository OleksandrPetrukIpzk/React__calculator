import {useState} from "react";
import {Buttons} from "../Buttons/Buttons";
import {Functions} from "../Functions/Functions";
import {Display} from "../Display/Display";
import './style.css'

export const Main = () => {

    const [choseNumberFirst, setChoseNumberFirst] = useState('');
    const [choseNumberTwo, setChoseNumberTwo] = useState('');
    const [operation, setOperation] = useState('');
    const [isOperation, setIsOperation] = useState(false);
    const [isResume, setIsResume] = useState(false);

    const clearAll = () => {
        setChoseNumberFirst('');
        setChoseNumberTwo('');
        setOperation('');
        setIsOperation(false);
        setIsResume(false);
    }

    return (<div className='main'>
        <Display choseNumberTwo={choseNumberTwo} choseNumberFirst={choseNumberFirst} operation={operation}
                 isResume={isResume} isOperation={isOperation}/>
        <div className='buttons'>
            <Buttons setChoseNumberFirst={setChoseNumberFirst} setChoseNumberTwo={setChoseNumberTwo}
                     isOperation={isOperation} operation={operation} choseNumberFirst={choseNumberFirst}
                     choseNumberTwo={choseNumberTwo}
                     setIsResume={setIsResume} isResume={isResume}/>
            <Functions setIsOperation={setIsOperation} isOperation={isOperation} setOperation={setOperation}
                       setIsResume={setIsResume} setChoseNumberTwo={setChoseNumberTwo}
                       choseNumberFirst={choseNumberFirst}/>
        </div>
        <button className='clear' onClick={clearAll}>Clear</button>
    </div>)

}
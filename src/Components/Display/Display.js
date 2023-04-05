export const Display = ({choseNumberFirst, choseNumberTwo, operation, isResume, isOperation}) => {


    return (<div className='display'>
        {isOperation ? isResume ? <p>{choseNumberFirst}</p> : <p>{choseNumberFirst} {operation} {choseNumberTwo}</p> :
            <p>{choseNumberFirst}</p>}

    </div>)
}
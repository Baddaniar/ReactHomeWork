import{useAppDispatch, useAppSelector} from '../hooks'
import { useEffect } from 'react'
import { fetchOperations } from '../slices/operationSlice'


const OperationPage = () =>{
    const dispatch = useAppDispatch()
    const operations = useAppSelector((state) => state.operations.data)
    useEffect(() => {
        dispatch(fetchOperations())
    },[])
    return(
        <div>
            <h2>Operations</h2>
            {operations.map((operation) => <p>{operation.type} - {operation.name}</p>)}
        </div>
    )
}

export default OperationPage
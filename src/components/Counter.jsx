import {useDispatch} from 'react-redux';
import {incrementAmt, decrementAmt} from '../store/features/Cart/cartSlice';

const Counter = ({id, quantity})=>{

    const dispatch = useDispatch();

    return(
        <div className="flex items-center gap-3">
            <button 
                className="cursor-pointer border-[3px] border-orng w-[32px] h-[32px] text-center rounded-md text-lg text-orng"
                         
                onClick={() => dispatch(decrementAmt(id))}
            >-</button>
            <span className="text-orng text-lg font-bold">{quantity}</span>
            <button 
                className="cursor-pointer border-[3px] border-orng w-[32px] h-[32px] text-center rounded-md text-lg text-orng"
                onClick={() => dispatch(incrementAmt(id))}
            >+</button>
        </div>
    )
}
export default Counter
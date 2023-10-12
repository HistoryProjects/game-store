import s from './styles/scrollTop.module.scss';
import {AiOutlineArrowUp} from 'react-icons/ai';

const ScrollTop = () => {
    function scrollToTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    return (
        <button onClick={scrollToTop} className={s.scrolTop_btn}>
            <AiOutlineArrowUp size={30} />
        </button>
    )
}
export default ScrollTop;
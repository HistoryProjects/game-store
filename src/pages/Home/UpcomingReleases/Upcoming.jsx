import exp1 from '../../../assets/images/expected/exp-1.webp'
import exp2 from '../../../assets/images/expected/exp-2.webp'
import exp3 from '../../../assets/images/expected/exp-3.webp'
import exp4 from '../../../assets/images/expected/exp-4.webp'
import exp5 from '../../../assets/images/expected/exp-5.webp'
import exp6 from '../../../assets/images/expected/exp-6.webp'

import s from '../../styles/upcoming.module.scss';

const Upcoming = () => {
    return (
        <div className={s.container}>
            <h2 className="text-white text-xl font-bold">Ожидается</h2>

            <div className={s.upcoming_wrap}>
                <div className={s.upcoming_item}>
                    <img src={exp1} alt="" className={s.item_img} />  
                    <img src={exp2} alt="" className={s.item_img} />
                    <img src={exp3} alt="" className={s.item_img} />
                </div>
                <div className={s.upcoming_item}>
                    <img src={exp4} alt="" className={s.item_img} />
                    <img src={exp5} alt="" className={s.item_img} />
                    <img src={exp6} alt="" className={s.item_img} />
                </div>
            </div>
        </div>
    )
}
export default Upcoming;
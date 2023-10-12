import bonus from '../../../assets/icons/bonus.png';
import newProducts from '../../../assets/icons/new_products.png';
import price from '../../../assets/icons/price.png';
import range from '../../../assets/icons/range.png';
import safety from '../../../assets/icons/safety.png';
import support from '../../../assets/icons/support.png';

import Edge from './Edge';
import s from '../../styles/edge.module.scss';

const EdgeList = () => {
    const adventages = [
        {
            id: 1,
            icon: bonus,
            title: 'Бонусная программа',
            text: 'Начисляем до 5% кэшбэка за покупки'
        },
        {
            id: 2,
            icon: newProducts,
            title: 'Множество новинок',
            text: 'предлагая вам самые горячие новинки'
        },
        {
            id: 3,
            icon: price,
            title: 'Горячие цены',
            text: 'доступные цены для всех'
        },
        {
            id: 4,
            icon: range,
            title: 'Большой ассортимент',
            text: 'У нас есть игры на любой вкус'
        },
        {
            id: 5,
            icon: safety,
            title: 'Безопасность продукта',
            text: 'Весь контент проходит тщательную проверку'
        },
        {
            id: 6,
            icon: support,
            title: 'Постоянная поддержка',
            text: 'Отзывчивая поддержка работает без перерывов'
        }
    ]

    //const edgeInRow = 3;

    return (
        <div className={s.edge_list}>
            <div className={s.edgeList_item}>
                {
                    adventages.slice(0,3).map((edge, index) => (
                        <div className={s.edge}  key={edge.id}>
                            <Edge title={edge.title} icon={edge.icon} text={edge.text} />
                        </div>
                    ))

                }
            </div>

            <div className={s.edgeList_item}>
                {
                    adventages.slice(3,6).map((edge, index) => (
                        <div className={s.edge}  key={edge.id}>
                            <Edge title={edge.title} icon={edge.icon} text={edge.text} />
                        </div>
                    ))

                }
            </div>
           

        </div>
    )
}
export default EdgeList;


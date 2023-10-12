import { Link } from 'react-router-dom';
import {BiSolidPhone, BiEnvelope} from 'react-icons/bi';
import {FaMapMarkerAlt, FaTelegram} from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import {SlSocialVkontakte} from 'react-icons/sl';
import {BsInstagram} from 'react-icons/bs';
import s from './styles/footer.module.scss';

const Footer = () => {
    return (
        <div className={s.container}> 
            <div className={s.f_top}> 
                <div className={s.f_contacts}> 
                    <div id="logo" className={s.logo}>
                        <Link to="/">
                            <span className="text-orng">pride</span>game            
                        </Link>
                    </div>
    
                    <ul className="mt-8">
                        <li className="text-white text-lg font-medium flex gap-5 items-center mb-4">
                            <BiSolidPhone size={24} color="#EBB110" />
                            8 (800) 555 12 54
                        </li>
                        <li className="text-white text-lg font-medium flex gap-5 items-center mb-4">
                            <BiEnvelope size={24} color="#EBB110" />
                            pridegame@line.com
                        </li>
                        <li className="text-white text-lg font-medium flex gap-5 items-center mb-6">
                            <FaMapMarkerAlt size={24} color="#EBB110" />
                            Ступино ул. Ладыгина, 28
                        </li>
                        <li className="flex gap-5 items-center">
                            <IoLogoYoutube size={32} color="#EBB110" />
                            <SlSocialVkontakte size={32} color="#EBB110" />
                            <BsInstagram size={32} color="#EBB110" />
                            <FaTelegram size={32} color="#EBB110" />
                        </li>
                    </ul>
                </div>
 
                <div className={s.f_links}> 
                    <div>
                        <ul>
                            <li className="text-lg font-bold text-orng">Информация</li>
                            <li className="text-white text-lg font-medium">О нас</li>
                            <li className="text-white text-lg font-medium">FAQ</li>
                            <li className="text-white text-lg font-medium">Политика<br/>конфиденциальности</li>
                        </ul>
                    </div>
    
                    <div>
                        <ul>
                            <li className="text-lg font-bold text-orng">Магазин</li>
                            <li className="text-white text-lg font-medium">Каталог</li>
                            <li className="text-white text-lg font-medium">Новинки</li>
                            <li className="text-white text-lg font-medium">Бренды</li>
                        </ul>
                    </div>
    
                    <div>
                        <ul>
                            <li className="text-lg font-bold text-orng">Помощь</li>
                            <li className="text-white text-lg font-medium">Оплата</li>
                            <li className="text-white text-lg font-medium">Доставка</li>
                            <li className="text-white text-lg font-medium">Гарантия</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mt-10 w-full border-[3px] border-orng" />

            <div className={s.f_bottom}> 
                © PRIDEGAME 2023
            </div>
        </div>
        
    )
}
export default Footer;

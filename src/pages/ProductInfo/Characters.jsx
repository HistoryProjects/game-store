import {FaPlaystation, FaXbox} from 'react-icons/fa';
import {MdComputer} from 'react-icons/md';
import s from '../styles/details.module.scss';

const Characters = ({name, selectedGame, moreInfo}) =>{
    const platforms = {
        PC: <MdComputer />,
        PlayStation: <FaPlaystation />,
        Xbox: <FaXbox />,
    }

    return (
        <div className={s.character}> 
            <div className={s.title_wraper}>
                <h2 className="break-words text-2xl font-bold">{name}</h2>

                <div className="text-orng border-4 border-orng px-4 py-3 rounded-full">
                    {selectedGame.metacritic}
                </div>
            </div>
                            
            <ul>
                <li className="mb-5">Характеристики</li>
                <li className="flex gap-1"> 
                    <span className="text-dopColor">Жанр — </span>
                    {
                        selectedGame.genres.map((g, index) => (
                            <div key={index}>{g.name}</div>
                        ))
                    }
                </li>
                <li className="flex gap-2 items-center">
                    <span className="text-dopColor">Платформа — </span>
                    <div className="flex gap-3">
                        { platforms.PC }
                        { platforms.PlayStation }
                        { platforms.Xbox }
                    </div>
                </li>
                <li className="flex gap-1">
                    <span className="text-dopColor">Издатель — </span>
                    {moreInfo.publishers[0].name}
                </li>
                <li>
                    <span className="text-dopColor">Разработчик — </span>
                    {moreInfo.developers[0].name}
                </li>
                <li className="flex gap-1">
                    <span className="text-dopColor">Время в игре — </span>
                    {selectedGame.playtime} ч.
                </li>
                <li flex gap-2 items-center>
                    <span className="text-dopColor">Язык — </span>
                    {moreInfo.tags[0].language}
                </li>
                <li className="flex gap-1">
                    <span className="text-dopColor">Дата выхода — </span>
                    {selectedGame.released}
                </li>
            </ul>
                            
        </div>
    )
}
export default Characters;
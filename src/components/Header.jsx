import React, { useState, useEffect } from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom";

import {AiOutlineHeart} from 'react-icons/ai';
import {RiShoppingBasketFill} from 'react-icons/ri';
import {AiOutlineMenuUnfold, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {FaRegUserCircle} from 'react-icons/fa';
import { Dropdown } from 'rsuite';
import { ImExit } from 'react-icons/im';
import {useDispatch, useSelector} from 'react-redux';
import { getGenres } from '../store/features/Product/productSlice';
import {setSearchGames, getSearchGames } from '../store/features/Search/searchSlice';
import { getAuth } from 'firebase/auth';

import './styles/header.css';

const Header = () =>{

    const auth = getAuth();
    const user = auth.currentUser;
    const localStorageUser = localStorage.getItem('user');

    let location = useLocation();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');

    const cart = useSelector((state) => state.cart.cart)
    const genres = useSelector((state) => state.product.genreList)
  
    const handleSearchClick = () => {
        if(searchTerm === ''){
            alert("Введите наименование искомой игры")
        }else{
            dispatch(setSearchGames([]))
            dispatch(getSearchGames(searchTerm));
        }

        if(location.pathname !== '/search') navigate('/search');
        
        setSearchTerm('');
    };

    const [isOpen, setIsOpen] = useState(false);
    
    

    //Выбранный жанр в меню
    const [selectedGenre, setSelectedGenre] = useState('action');

    useEffect(()=>{
        //Запрос списка жанров
        dispatch(getGenres())
    },[dispatch])

    const handleSelectGenre = (genre) => {
        setSelectedGenre(genre.toLowerCase());
    }

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
        let menu = document.querySelector('.menu');
        
        if(!isOpen){
            menu.classList.add('menuActive');
        }else{
            menu.classList.remove('menuActive');
        }
    }

    const logOut = async () => {
        try {
            await auth.signOut();
            localStorage.removeItem('user');
            navigate('/');
        } catch (error) {
            console.error('Ошибка при выходе:', error);
        }
    }
   
    return(
        
        <header className='header'>
            <div className='h_top'>
                <div className="text-white text-xl font-bold">8 (800) 555 12 54</div>
               
                
                

                {user && localStorageUser ? (
                    <button type='button' onClick={logOut}>
                        <ImExit 
                            size={30} 
                            className="text-white cursor-pointer hover:text-orng"
                        />  
                    </button>
                                
                ) : (
                    <Link to="/login">
                        <FaRegUserCircle size={30} className="text-white cursor-pointer hover:text-orng" />           
                    </Link>
                )}

                
    
            </div>
            <div className='h_bottom'>
                <nav className='nav'>
                    <div id="logo" className='logo'>
                        <Link to="/">
                            <span className="text-orng">pride</span>game            
                        </Link>
                    </div>

                   
                    <button className='menu_btn' onClick={toggleMenu}>
                        {!isOpen ? (
                                <AiOutlineMenu size={40} className="text-white cursor-pointer hover:text-orng" />   
                            ) : (
                             
                                <AiOutlineClose size={40} className="text-white cursor-pointer hover:text-orng" /> 
                            )
                        }
                    </button>
                     
                    
                    <ul className='menu' >
                        <li className='genres'>
                            <Dropdown title='Жанры' icon={<AiOutlineMenuUnfold />} 
                                className="cursor-pointer bg-orng w-full p-3 rounded-lg text-white text-lg font-medium">
                                {
                                
                                genres.map((genre, index) => (
                                        <Link key={genre.id} to={`/products/${genre.name}`}>
                                            <Dropdown.Item className="block" onClick={()=>handleSelectGenre(genre.name)}  key={index}>
                                                {genre.name}
                                            </Dropdown.Item>
                                        </Link>
                                        
                                    ))
                                }   
                            </Dropdown>
                        </li>
                        <li className="text-dopColor text-lg font-medium">Информация</li>
                        <li className='search_item'>
                            <input 
                                type="search" 
                                placeholder="Поиск"
                                value={searchTerm}
                                onChange={(e)=>setSearchTerm(e.target.value)} 
                                className="w-[90%] bg-[#575656] 
                                font-bold px-3 py-3 rounded-l-lg" 
                            />
                            <Link to="/search" className="w-[10%] ">
                                <button className="bg-orng text-white py-3 w-full flex 
                                    justify-center items-center rounded-r-lg"
                                    onClick={handleSearchClick}
                                >
                                    <BiSearch size={26} />
                                </button>
                            </Link>
                        
                        </li>
                        
                        <li className='favorite_item'>
                            <Link to="/favorites">
                                <AiOutlineHeart className='favorite_icon cursor-pointer' />              
                            </Link>
                            <p className='favorite_title'>Избранное</p>
                        </li>
                        
                        <li className='cart_item'>
                            <div className="relative">
                                <Link to="/cart">
                                    <RiShoppingBasketFill className="cart_icon cursor-pointer" />              
                                </Link>
                                <span className="text-white absolute right-[-3px] top-[-13px]">{cart.length}</span>
                            </div>
                            <p className='cart_title'>Корзина</p>
                            
                        </li>
                    </ul>    
                </nav>
            </div>
        </header>
        
    )
}
export default Header;

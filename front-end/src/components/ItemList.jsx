import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
    const {pathname} = useLocation();
    const isHome = pathname === '/';
    const finalItems = isHome ? items : Infinity;

    

return (
    <div className='item-list'>
            {/* Cabeçalho da lista */}
            <div className='item-list__header'>
            <h2>{title} Populares</h2>

            {isHome ? (
                <Link to={path} className='item-list__link'>Mostrar Tudo</Link>
                ) : (
                <></>
                )}
            </div>

            <div className='item-list__container'>
                {itemsArray
                .filter((currentValue, index) => index < finalItems)
                .map((currentObj, index) => (
                <SingleItem 
                {...currentObj}
                idPath={idPath}
                key={`${title}-${index}`}/>))}
            </div>
        </div>
)
}

export default ItemList
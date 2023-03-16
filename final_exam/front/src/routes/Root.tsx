import {Outlet, Link} from 'react-router-dom'

const Root = () => {
    return(
        <div>
            <h1>router</h1>
            <div>
                <nav>
                    <Link to={'/'}>Main</Link>
                    <Link to={'/stock'}>Склад</Link>
                    <Link to={'/operations'}>Операции</Link>
                    <Link to={'/buysell'}>Купля/Продажа</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Root
import {Outlet, Link} from 'react-router-dom'

const Root = () => {
    return(
        <div>
            <div>
                <nav>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/stock'}>Склад</Link>
                    <Link to={'/operations'}>Операции</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}

export default Root
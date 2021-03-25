import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import { useContext } from 'preact/hooks';
import { UserState } from '../../services/UserState';

interface IHeaderProps {
    user: UserState
}

const Header: FunctionalComponent<IHeaderProps> = (props:IHeaderProps) => {
    return (
        <header class={style.header}>
            <h1>
                <Link activeClassName={style.active} href="/">
                    PrimeBid
                </Link>
            </h1>
            <nav>
               {!props.user.value && 
                <Link activeClassName={style.active} href="/sign-up">
                    Sign up
                </Link>
                }
                {!props.user.value && 
                <Link activeClassName={style.active} href="/login" >
                    Login
                </Link>
                }
                {props.user.value &&
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                }
            </nav>
        </header>
    );
};

export default Header;

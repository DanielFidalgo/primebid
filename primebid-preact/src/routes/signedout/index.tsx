import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const SignedOut: FunctionalComponent = (props) => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>NOT SIGNED</p>
        </div>
    );
};

export default SignedOut;

import { FunctionalComponent, h } from 'preact';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';

let bar: { MDComponent: { show: (arg0: { message: any; }) => void; }; };
export const showSnack = (message: any) => {
    bar.MDComponent.show({
        message: message
      });
}

const Snack: FunctionalComponent = (props) => {
    return (
    <Snackbar ref={data=>{bar=data;}}/>
    );
}

export default Snack;
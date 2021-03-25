import { FunctionalComponent, h } from 'preact';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';
import style from './style.css';
import { auth, firestore } from '../../services/firebase';
import { showSnack } from '../../components/snackbar';
import { route } from 'preact-router';
import Login from '../login';
import { Link } from 'preact-router/match';

let name: string;
let email: string;
let password: string;
let confirm: string;
let bar: { MDComponent: { show: (arg0: { message: string; }) => void; }; };

const clear = () => {
    name = email = password = confirm = "";
}

const signup = () => {
    if(confirm === password){
        auth.createUserWithEmailAndPassword(email, password).then((user) => 
        {
            firestore.collection("users")
                     .doc(user.user?.uid)
                     .set({uuid: user.user?.uid, name: name, email: email})
                     .then(() => {
                         route("/", true);
                         showSnack("success")
                        });
            
        })
    }
}

const SignUp: FunctionalComponent = (props) => {
    if (auth.currentUser?.isAnonymous)
        route("/", true);
    return (
        <div class={style.home}>
            <LayoutGrid>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell cols={3}></LayoutGrid.Cell>
                    <LayoutGrid.Cell cols={6}>
                        <Card>
                            <div class="card-header">
                                <h2 class=" mdc-typography--title">Sign up</h2>
                                <div class=" mdc-typography--caption">Have an account? <Link href="/login">Login</Link></div>
                            </div>
                            <Card.Media className="card-media">
                            <LayoutGrid>
                                <LayoutGrid.Inner>
                                    <LayoutGrid.Cell cols={1}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={5}><FormField><TextField label="Name" type="text"  value={name} onInput={(e: any) => name= e.target.value}/></FormField></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={5}><FormField><TextField label="e-mail" type="email"  value={email} onInput={(e: any) => email= e.target.value}/></FormField></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={1}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={1}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={5}><FormField><TextField label="password" type="password" value={password} onInput={(e: any) => password= e.target.value}/></FormField></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={5}><FormField><TextField label="confirm password" type="password" value={confirm} onInput={(e: any) => confirm= e.target.value}/></FormField></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={1}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={12}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={4} class={style.center} ><button onClick={clear}>Clear</button></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={4} class={style.center} ><button onClick={signup}>Sign up</button></LayoutGrid.Cell>
                                    <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                </LayoutGrid.Inner>
                            </LayoutGrid>
                            </Card.Media> 
                        </Card>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                </LayoutGrid.Inner>
            </LayoutGrid>
        </div>
    );
};

export default SignUp;

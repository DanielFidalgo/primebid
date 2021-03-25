import {FunctionalComponent, h} from 'preact'
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';
import { Link, route } from 'preact-router';
import { Button } from 'preact-material-components/Button';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import style from './style.css';

let email: string;
let password: string;

const Login: FunctionalComponent = () => {
    return(
        <div class={style.home}>
            <LayoutGrid>
                <LayoutGrid.Inner>
                    <LayoutGrid.Cell cols={3}></LayoutGrid.Cell>
                    <LayoutGrid.Cell cols={6}>
                        <Card>
                            <div class="card-header">
                                <h2 class=" mdc-typography--title">Log in</h2>
                                <div class=" mdc-typography--caption">Don't have an account? <Link href="/sign-up"> Sign up</Link></div>
                            </div>
                            <Card.Media className="card-media">
                                <LayoutGrid>
                                    <LayoutGrid.Inner>
                                        <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}><FormField><TextField label="e-mail" type="email"  value={email} onInput={(e: any) => email= e.target.value}/></FormField></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}><FormField><TextField label="password" type="password" value={password} onInput={(e: any) => password= e.target.value}/></FormField></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}><Link> Reset password</Link></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={2}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}></LayoutGrid.Cell>
                                        <LayoutGrid.Cell cols={4}><Button>Login</Button></LayoutGrid.Cell>
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
    )
}

export default Login
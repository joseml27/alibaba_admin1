import {section_administrador, section_login} from './login.js';

export function adminstrador(){
    alert('Soy Administrador');
    section_administrador.classList.remove("block");
    section_login.classList.remove("activar-flex");
}
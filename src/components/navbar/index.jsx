import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <>
            <div class="nav">
            <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
                <div class="nav-title">
                JoGeek
                </div>
            </div>
            
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div class="nav-links">
                <Link to='/grid_dupla_pra_baixo'> Grid dupla pra baixo</Link>
                <Link to='/exemplo_grid'> Exemplo Grid</Link>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
                <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
            </div>
            </div>
        </>
    );
}

export default Navbar;
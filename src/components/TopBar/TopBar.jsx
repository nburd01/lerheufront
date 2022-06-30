import React from 'react'
import './Topbar.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';





export default function TopBar() {
  return (
    <div class="topbar">
    <div class="top">
        <nav class="menu">
            <a href="#">Se connecter</a>
            <a href="/connection">Nous rejoindre</a>
        </nav>
        <div class="logo">
            <img src="../assets/img/logo-leRheu.png"></img>
        </div>
        <div class="labels">
            <img src="/assets/label_jeunes.jpg"></img>
            <img src="/assets/label_jeunes.jpg"></img>
            <img src="/assets/label_jeunes.jpg"></img>
        </div>
        <ul class ="nav-links">
            <li>
                <a>Nos disciplines</a>
            </li>
            <li>
                <a>Nous contacter</a>
            </li>
            <li>
                <a>Mon compte</a>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </div>
    <div class="disciplines">
        <a href="#">Football</a>
        <a href="#">Futsal</a>
        <a href="#">Beach Soccer</a>
        <a href="#">Fitfoot</a>
        <a href="#">Féminines</a>
    </div>
</div>
  )
}

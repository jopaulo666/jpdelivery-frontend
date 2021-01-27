import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer(){
    return(
        <footer className="main-footer">
            João Paulo da Mata Mendes &copy; 2021
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/joãopaulo-damatamendes" target="_new">
                    <LinkedinIcon />
                </a>
                 <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/joãopaulo-damatamendes" target="_new">

                </a>
            </div>
        </footer>
    )
}

export default Footer;
import './App.css'
import ironHackLogo from './assets/ironhack-logo-xs.png'
import menuIcon from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'

function App() {
  return (
    <div className='App'>
    <img src={ironHackLogo} alt='ironhack logo' className='logo'/>
    <img src={menuIcon} alt='menu icon'/>
    <h1>Say hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend library, and become a super ninja Developer</p>
    <button>Awesome!</button>
    </div>
  );
}

export default App

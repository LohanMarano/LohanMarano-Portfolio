import Avatar from '../img/picture.png'
import SocialNetworks from './SocialNetworks'

import '../styles/components/Sidebar.scss'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lohan Marano" />
      <p className='title'>Desenvolvedor Web Full Stack</p>  
      <SocialNetworks />
      <InformationContainer />
      <a href="https://www.canva.com/design/DAEfEHbddAQ/N2ujbgagUNw3pAwJZlJhmA/view?utm_content=DAEfEHbddAQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className='btn'>Download Currículo</a>
    </aside>
  )
}

export default Sidebar
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/SocialNetworks.scss'

const socialNetworks = [
    { name: "linkedin", icon:<FaLinkedinIn />, text_link:"https://www.linkedin.com/in/lohan-marano-930a80b1/"},
    { name: "github", icon:<FaGithub />, text_link:"https://github.com/LohanMarano"},
    { name: "instagram", icon: <FaInstagram />, text_link:"https://www.instagram.com/lmdigitalsolutions/"},
]

const SocialNetworks = () => {
  return ( <section id="social-networks">
      {socialNetworks.map((network)=> (
        <a href={network.text_link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}

export default SocialNetworks
import "../styles/components/InformationContainer.scss";

import { AiFillPhone, AiFillMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(21) 97968-3743</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>lohan.marano@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Nova Friburgo/RJ</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;

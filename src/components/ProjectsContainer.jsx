import {Card, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/components/ProjectsContainer.css"


const ProjectsContainer = () => {
    return (
      <section className="projects-container">
        <h2>Projetos</h2>
        <p>
          Abaixo estão disponível alguns de meus projetos de desenvolvimento web e design.
        </p>
        <div className='CardGroup d-flex'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Strate Per Roma</Card.Title>
            <Card.Text>
            Landing Page para empresa de turismo em Roma (utilizando Bootstrap 5).
            </Card.Text>
            <Button className='btn-card' variant="primary" as="a" href="https://lohanmarano.github.io/Strate-per-Roma-Landing-Page---Bootstrap-5-/">Abrir</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Design Gráfico</Card.Title>
            <Card.Text>
            Criação de Logo, identidade visual, papelaria institucional, posts de rede sociais, e etc...
            </Card.Text>
            <Button className='btn-card' variant="primary" as="a" href="https://drive.google.com/file/d/1umS4DBw7mFyYrPnYA4BypTFyvrC7FStQ/view?usp=sharing">Abrir</Button>
          </Card.Body>
        </Card>          
        </div>
      
        
      </section>
    )
  }
  
  export default ProjectsContainer;
  
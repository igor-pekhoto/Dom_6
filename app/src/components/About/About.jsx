import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>Необходимая и достаточная информация о приложении.</p>
      <button type="button" onClick={() => { navigate(1) }} className="btn btn-success">Подробности</button>
    </>

  )
}

export default About

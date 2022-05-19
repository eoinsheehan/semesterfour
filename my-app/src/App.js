import Course from './components/courses/Courses'
import Card from './components/UI/Card'
import './components/UI/Card.css'

const App = () => {

  return (
    <div className='main'>
      <Card>
      <Course/>
      </Card>
      <Card className="card2">Module Selection</Card>
    </div>
  );
}

export default App;

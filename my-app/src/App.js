import Course from './components/courses/Courses'
import Card from './components/UI/Card'

const App = () => {

  const clicky = () =>{
    console.log('Eoin')
  }

  return (
    <div>
      <Card>
      <Course/>
      <button onClick={clicky}>Click me</button>
      </Card>
    </div>
  );
}

export default App;

import TourList from './TourList';


export default function Main({mode}) {
    return (
    <div className="App">
      <h1>hello from Earth 2!</h1>
      <TourList mode={mode}/>
    </div>
    )
}
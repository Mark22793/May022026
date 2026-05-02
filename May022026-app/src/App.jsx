import './App.css'
import Card from './Card'

function App(){
  const carditems=[
    {header:"Chapter 1", title:"Objectives", description:"Objectives of the study", buttontext:"View scope and limitation", hastitle:false },
    {header:"Chapter 2", title:"Review of Related Literature", description:"RELATED SYSTEM", buttontext:"Show more", hastitle:false},
    {header:"Chapter 3", title:"Methodology", description:"Method of development", buttontext:"See Chart", hastitle:true }

  ]
  return(
    <>
        <h1>Hello World</h1>
        {carditems.map(item=>(
           <Card 
              header={item.header}
              title={item.title} 
              description={item.description}
              buttontext={item.buttontext}
              hastitle = {item.hastitle}
              >
        </Card>
        )
      )
    }
        
    
    </>
  )
}
export default App 
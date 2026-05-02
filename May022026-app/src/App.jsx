import './App.css'
import Card from './Card'

function App(){
  const carditems=[
    {header:"Chapter 1", title:" Objective", description:"Objectives of the study", buttontext:"View scope and limitation" },
    {header:"Chapter 2", title:" RRL", description:"RELATED SYSTEM", buttontext:"Show more" },
    {header:"Chapter 3", title:" Methodology", description:"Method of development", buttontext:"See Chart" }

  ]
  return(
    <>
        <h1>Hello World</h1>
        {carditems.map((item,index)=>(
           <Card 
              header={item.header}
              titles={item.title} 
              description={item.description}
              buttontext={item.buttontext}>
        </Card>
        )
      )
    }
        
    
    </>
  )
}
export default App 
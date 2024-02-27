import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCheckbox from './componets/formComponents/MyCheckbox'
import MyDropDown from './componets/formComponents/MyDropDown'


function App() {
  const[count, setCount] = useState(0);
  const[brands, setBrands] = useState(['Volvo', 'Saab','Opel', 'Audi']);
  const[selectedBrands, setSelectedBrands] = useState('');

  const fn1 = (event)=>{
    console.log(event.target.checked)
  }

  const printData= (data)=>{
    console.log(data);
  }

  const runFirst= () =>{
    console.log('component Loaded');
  }

  const getSelectData = (selectedData)=>{
    console.log("selectedData:", selectedData);
    setSelectedBrands(selectedData)
  }

  useEffect(()=>{
    //setBrands();
  },[]);

  return (
    <>
      <form>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <MyDropDown name="cars" text ="Arabalar" 
            dataList ={brands}
            onSelectChange={getSelectData}
            
          />

          <MyCheckbox name='category' 
            text='Haberler' 
            checkEvent={fn1} 
            sendDataToParent={printData} 
            runAtFirstInit={runFirst} />
          <MyCheckbox name='category' 
            text='Gündem' 
            checkEvent={fn1} 
            runAtFirstInit={runFirst} />
          

        </div>
      </form>


    </>
  )
}

export default App

import './App.css'
import Restaurants from './pages/Restaurants/Restaurants'
import Restaurant_Booking from './pages/Restaurants/Components/Restaurant_Booking'
import FoodKiosks from './pages/FoodKiosks/FoodKiosks'
import SpecialFoods from './pages/SpecialFoods/SpecialFoods'
import SpecialFoods_Request from './pages/SpecialFoods/Components/SpecialFood_Request'
import Subscription from './pages/Subscription/Subscription'
import Subscribe_Form from './pages/Subscription/Components/Subscribe_Form'
import Login from './pages/Login/Login'


function App() {

  return (
    <>
      <Restaurants />
      <Restaurant_Booking />
      <FoodKiosks />
      <SpecialFoods />
      <SpecialFoods_Request />
      <Subscription />
      <Subscribe_Form />
      <Login />
    </>
  )
}

export default App

import DressStyle from "./components/DressStyle/DressStyle"
import HappyCustomers from "./components/HappyCustomers/HappyCustomers"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import NewArrivals from "./components/NewArrivals/NewArrivals"
import TopSelling from "./components/TopSelling/TopSelling"


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <NewArrivals />
      <TopSelling /> 
      <DressStyle />
      <HappyCustomers />
    </div>
  )
}

export default App

import Preview from "../components/Preview";
import '../styles/home.css'

const Home = () => {
  const RestaurantList = [
    {
      name: 'rest1'
    },{
      namme: 'rest2'
    },
    {
      name: 'rest3'
    },
    {
      name: 'rest4'
    },
  ]
  return (
    <div>
      <h1 className="text-center mt-5"> HOME </h1>
      <div className="home_content row">
        {RestaurantList.map(obj => (
            <div className="col-3">
              <Preview 
                key={obj.name}
                name={obj.name}
              />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
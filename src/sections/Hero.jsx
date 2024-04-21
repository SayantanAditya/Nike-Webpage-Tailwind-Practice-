import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import { statistics } from "../constants";

function Hero() {
  return (
    <section
      id='home'
      className="w-full flex xl:flex-row flex-col justify-center gap -10 max-container min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center itms-start w-full max-xl:padding-x pt-28">
        <p>Our summer Collections</p>
        <h1>
          <span>The New Arrival</span> <br/>
          <span>Nike</span>
          <span>Shoes</span>
        </h1>
        <p>Discover stylish Nike arrivals, quality, comfort and innovations for your active life.</p>

        <Button label="Shop now" iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
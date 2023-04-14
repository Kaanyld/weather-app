import { useWeather } from "../context/WeatherContext";

function Dropdown() {
    const {city,cities,setCity} = useWeather();
    const changeCity = (e) => {
        cities.filter((item) => {
            if (item.name === e.target.value){
                setCity(item);
            }
        });
    };

    return (
        <div className="flex flex-row md:w-full rounded-md lg:w-[1048px] mx-auto mt-12 bg-slate-500 shadow-2xl h-fit px-2  py-2">

         <select value={city.name}
         onChange={changeCity}
         className=" w-1/6 p-2 text-black-500 cursor-pointer  rounded-md shadow-sm outline-none  ">
            {cities.map((item,key)=>{
                return (
                    <option value={item.name} key={key}>{item.name}</option>
                );
            })};
            </select>


        
        </div>
    )
}

export default Dropdown;
import Axios from "npm:axios";
import { apiCapitalData, apiCountryData, apiPhoneData } from "./types.ts";

export const apiPhone = async (
    phone: string
): Promise<apiPhoneData> => {
    const apiKey = Deno.env.get("API_KEY")
    if(!apiKey)
        throw new Error("Error al obtener la api key")
    const response = await Axios.get(`https://api.api-ninjas.com/v1/validatephone?number=${phone}`,{
        headers: {
            'X-Api-Key': apiKey
        }
    })

    if(response.status != 200)
        throw new Error ("Error al hacer la llamada a la apiPhone")
    else{
        const data:apiPhoneData = {
            is_valid: response.data.is_valid,
            country: response.data.country
        }
        return data;
    }
}

export const apiCountry = async (
    country: string
): Promise<apiCountryData> => {
    const apiKey = Deno.env.get("API_KEY")
    if(!apiKey)
        throw new Error("Error al obtener la api key")
    const response = await Axios.get(`https://api.api-ninjas.com/v1/country?name=${country}`,{
        headers: {
            'X-Api-Key': apiKey
        }
    })

    if(response.status != 200)
        throw new Error ("Error al hacer la llamada a la apiCountry")
    else
    {
        const data: apiCountryData = {
            capital: response.data[0].capital,
            name: response.data[0].name
        }
        return data;
    }
}

export const apiCapital = async (
    city: string
): Promise<apiCapitalData> => {
    const apiKey = Deno.env.get("API_KEY")
    if(!apiKey)
        throw new Error("Error al obtener la api key")
    
    const responseCity = await Axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`,{
        headers: {
            'X-Api-Key': apiKey
        }
    })
    if(responseCity.status != 200)
        throw new Error ("Error al hacer la llamada a la apiCity")
    const responseWeather = await Axios.get(`https://api.api-ninjas.com/v1/weather?lat=${responseCity.data[0].latitude}&lon=${responseCity.data[0].longitude}`,{
        headers: {
            'X-Api-Key': apiKey
        }
    })

    if(responseWeather.status != 200)
        throw new Error ("Error al hacer la llamada a la apiCountry")
    else
    {
        const data: apiCapitalData = {
            capital: city,
            name: (await apiCountry(city)).name,
            temp: responseWeather.data.temp
        }
        return data;
    }
}
import { FreshContext, Handlers } from "$fresh/server.ts";
import Axios from "npm:axios"

export const handler: Handlers = {
  GET: async(req: Request, ctx: FreshContext<unknown>) => {
    const url = new URL(req.url);
    const phone = url.searchParams.get("phone");

    if(phone)
    { 
      const apiKey = Deno.env.get("API_KEY")
      if(!apiKey)
        throw new Error("Error al obtener la api key")
      const response = await Axios.get(`https://api.api-ninjas.com/v1/validatephone?number=${phone}`,{
        headers: {
          'X-Api-Key': apiKey
        }
      })
    }
    else if(phone === "")
    {
      return new Response(null, {
        status: 303, // See Other
        headers: {
          Location: "/"
        },
      });
    }

    return ctx.render();
  }
}

export default function Home() {
  return (
    <div>
      Parcial Frontend
    </div>
  );
}

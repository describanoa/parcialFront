import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { apiCountry } from "../../apis.ts";
import { ValidCountry } from "../../components/validCountry.tsx";
import { apiCountryData } from "../../types.ts";

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, apiCountryData>) => {
        const {country} = ctx.params;

        if(country)
        {
            const buscarCapital = await apiCountry(country)
            if(buscarCapital)
                return ctx.render(buscarCapital)
            else
                return ctx.render()
        }
        return ctx.render();
    }
}

export default function Home(props: PageProps<apiCountryData>) {
    return (
        <div class="containerCountry">
            <ValidCountry data={props.data}/>
        </div>
    );
}

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { apiCountry } from "../../apis.ts";
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
            {props.data !== undefined ? (
                <>
                    <p><strong>País: </strong>{props.data.name}</p>
                    <p>
                        <strong>Capital: </strong>
                        <a href={`/city/${props.data.capital}`}>{props.data.capital}</a>
                    </p>
                </>
            ): null}
        </div>
    );
}

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { apiCapital } from "../../apis.ts";
import { ValidCapital } from "../../components/validCapital.tsx";
import { apiCapitalData } from "../../types.ts";

export const handler: Handlers = {
    GET: async(_req: Request, ctx: FreshContext<unknown, apiCapitalData>) => {
        const {city} = ctx.params;

        if(city)
        {
            const buscarDatosCapital = await apiCapital(city)
            if(buscarDatosCapital)
                return ctx.render(buscarDatosCapital)
            else
                return ctx.render()
        }
        return ctx.render();
    }
}

export default function Home(props: PageProps<apiCapitalData>) {
    return (
        <div class="containerCapital">
            <ValidCapital data={props.data} />
        </div>
    );
}

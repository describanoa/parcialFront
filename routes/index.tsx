import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Form } from "../components/form.tsx";
import { apiPhone } from "../apis.ts";
import { apiPhoneData } from "../types.ts";

export const handler: Handlers = {
  GET: async(req: Request, ctx: FreshContext<unknown, apiPhoneData>) => {
    const url = new URL(req.url);
    const phone = url.searchParams.get("phone");

    if(phone)
    { 
      const validPhone = await apiPhone(phone);
      if(validPhone)
        return ctx.render(validPhone)
      else
        return ctx.render(validPhone)
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

export default function Home(props: PageProps<apiPhoneData>) {
  return (
    <div class="container">
      <Form />
      {
        props.data !== undefined && (
          props.data.is_valid ? (
            <>
              <p>El teléfono es válido</p>
              <p>
                País: <a href={`/country/${props.data.country}`}>{props.data.country}</a>
              </p>
            </>
          ): !props.data.is_valid ? (
            <p>El teléfono no es válido</p>
          ) : null
        )
        
      }
    </div>
  );
}

import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { apiPhone } from "../apis.ts";
import { apiPhoneData } from "../types.ts";
import { ValidPhone } from "../components/validPhone.tsx";

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
      <ValidPhone data={props.data}/>
    </div>
  );
}

import { FunctionalComponent } from "preact/src/index.d.ts";

export const Form: FunctionalComponent = () => {
    return(
        <div>
            <form action="/" method="get">
                <input type="text" name="phone" placeholder="Buscar..."/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}
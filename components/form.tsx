import { FunctionalComponent } from "preact/src/index.d.ts";

export const Form: FunctionalComponent = () => {
    return(
        <div class="formBuscarTelefono">
            <form action="/" method="get">
                <input type="text" name="phone" placeholder="Buscar..."/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}
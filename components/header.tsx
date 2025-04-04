import { FunctionalComponent } from "preact/src/index.d.ts";

export const Header: FunctionalComponent = () => {
    return(
        <div class="header">
            <a href="/country">Buscar país</a>
            <p>Examen Parcial FrontEnd</p>
            <a href="/">
                <button type="button">
                    <strong>HOME</strong>
                </button>
            </a>
        </div>
    );
}
import { FunctionalComponent } from "preact/src/index.d.ts";
import { apiCapitalData } from "../types.ts";

type Props = {
    data: apiCapitalData
}

export const ValidCapital: FunctionalComponent<Props> = ({data: props}) => {
    return(
        <div class="componentCapital">
            {props !== undefined ? (
                <>
                    <p><strong>Capital: </strong>{props.capital}</p>
                    <p>
                        <strong>País: </strong>
                        <a href={`/country/${props.name}`}>{props.name}</a>
                    </p>
                    <p><strong>Temperatura: </strong>{props.temp}</p>
                </>
            ): null}
        </div>
    );
}
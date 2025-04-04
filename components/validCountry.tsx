import { FunctionalComponent } from "preact/src/index.d.ts";
import { apiCountryData } from "../types.ts";

type Props = {
    data: apiCountryData
}

export const ValidCountry: FunctionalComponent<Props> = ({data: props}) => {
    return(
        <div class="componentCountry">
            {props !== undefined ? (
                <>
                    <p><strong>País: </strong>{props.name}</p>
                    <p>
                        <strong>Capital: </strong>
                        <a href={`/city/${props.capital}`}>{props.capital}</a>
                    </p>
                </>
            ): null}
        </div>
    );
}
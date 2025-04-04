import { FunctionalComponent } from "preact/src/index.d.ts";
import { Form } from "./form.tsx";
import { apiPhoneData } from "../types.ts";

type Props = {
    data: apiPhoneData
}

export const ValidPhone: FunctionalComponent<Props> = ({data: props}) => {
    return(
        <div class="componentPhone">
            <Form />
                {props !== undefined && (
                        props.is_valid ? (
                            <>
                                <p>El teléfono es válido</p>
                                <p>
                                    País: <a href={`/country/${props.country}`}>{props.country}</a>
                                </p>
                            </>
                        ): !props.is_valid ? (
                            <p>El teléfono no es válido</p>
                        ) : null
                    )
                }
        </div>
    );
}
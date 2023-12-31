import { Match, Switch } from "solid-js";

import App from "~/components/App";
import { FullscreenLoader } from "~/components/layout";
import SetupErrorDisplay from "~/components/SetupErrorDisplay";
import { useMegaStore } from "~/state/megaStore";

export default function Home() {
    const [state, _] = useMegaStore();

    return (
        <Switch fallback={<FullscreenLoader />}>
            <Match when={state.setup_error}>
                <SetupErrorDisplay initialError={state.setup_error!} />
            </Match>
            <Match when={true}>
                <App />
            </Match>
        </Switch>
    );
}

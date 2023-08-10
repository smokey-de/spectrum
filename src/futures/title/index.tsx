import {Title} from "@mantine/core";
import {useEffect} from "react";
import {useTitleStore} from "../../shared/store/title";
import {shallow} from "zustand/shallow";

export default function HeadTitle({route}: { route: string }) {
    const [fetchTitle, titleItem, reset] = useTitleStore(s => [s.fetchTitle, s.titleItem, s.reset], shallow);
    useEffect(() => {
        fetchTitle(route)
    }, [])
    console.log(titleItem)
    return (
            <Title order={1} className={'headerTitle'}>
                {titleItem?.title ? titleItem.title : "-"}
            </Title>
    )
}
import React, { useState, useEffect } from "react";
import { ITileData } from "./lib";

interface IProps {
    data: ITileData;
}
export default React.memo(function Tile(props: IProps) {
    const [offset, setOffset] = useState(0)

    const id = React.useMemo(() => {
        return props?.data?.id?.length ? props.data.id : []
    }, [props.data])

    useEffect(() => {
        let timer: number;
        if (id.length) {
            timer = window.setInterval(() => {
                setOffset((o) => (o + 1) % id.length)
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [id])

    return (
        <div className="tile">
            <i style={{ display: 'inline-block' }} className={`icon-${id[offset]}`}>
                { props?.data?.count ? <span>{props.data.count}</span> : null }
            </i>
        </div>
    )
})
import React from "react";
import Tile from "./Tile";
import { ITileData } from "./lib";

interface IProps {
    rows: number;
    cols: number;
    data: ITileData[];
}
export default React.memo(function Grid(props: IProps) {
    return (
        <div className='grid' style={{ width: props.cols * 42 }}>
            {
                Array.from({ length: props.cols * props.rows }).map((_, i) => {
                    // const data = props.data[i] ? props.data[i] : {} as ITileData
                    const item = props.data[i]
                    return (
                        <Tile key={i} data={item} />
                    )
                })
            }
        </div>
    )
})
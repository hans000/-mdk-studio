import React from "react";
import { ITileData } from "./lib";
import Tile from "./Tile";

interface IProps {
    data: ITileData[];
}

export default React.memo(function Smithing(props: IProps) {
    return (
        <div className='smithing'>
            <Tile data={props.data[0]} />
            <div className="smithing-add"></div>
            <Tile data={props.data[1]} />
        </div>
    )
})
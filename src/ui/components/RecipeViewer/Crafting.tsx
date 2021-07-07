import React from "react";
import Tile from "./Tile";
import Grid from "./Grid";
import { ICraftData, ITileData, transform } from "./lib";

interface IProps {
    data: ICraftData;
}
/**
 * 工作台
 */
export default React.memo(function Crafting(props: IProps) {

    const data = React.useMemo(() => {
        const d = transform(props.data)
        return d
    }, [props.data])

    return (
        <div className='craft'>
            <div className="input">
                {
                    props.data.type === 'crafting_shaped' || 
                    props.data.type === 'crafting_shapeless'
                        ? <Grid rows={3} cols={3} data={data.input} />
                        : <Tile data={data.input[0]}  />
                }
            </div>
            <div className='arrow'></div>
            <div className="output">
                <Tile data={data.output} />
            </div>
        </div>
    )
})
import { LineInfo } from "../../../../../mdk/dist/model";
import LineItem from "../LineItem";

interface IProps {
    name: string;
    description: string;
    fileInfo: Array<{
        type: string
        text: string
        extra: LineInfo[]
    }>
}
  
export default function FileItem(props: IProps) {
    return (
        <div className="file-item" style={{ margin: 8 }}>
            <h3>
                <div>{props.name}</div>
                <div className="file-item__desc">{props.description}</div>
            </h3>
            <div className='file-item__cont' style={{ overflow: "auto" }}>
                {
                    props.fileInfo.map((item, index) => (
                        <LineItem length={props.fileInfo.length} lineNum={index + 1} key={index} lineInfo={item}/>
                    ))
                }
            </div>
        </div>
    );
}
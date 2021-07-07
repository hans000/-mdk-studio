import { useState } from "react";
import RecipeViewer from "../RecipeViewer";

interface IProps {
    name: string;
    text: string;
    description: string;
    fileInfo: any
    type: string
}

export default function FileMcMetaItem(props: IProps) {
    const [visible, setVisible] = useState(true)
    function preview() {
        setVisible(v => !v)
    }
    return (
        <div className="file-meta-item" style={{ margin: 8 }}>
            <h3>
                <div>{props.name}</div>
                <div className="file-meta-item__desc">{props.description}</div>
            </h3>
            <div className='file-meta-item__cont'>
                <pre className='file-meta-item__code'>
                    {props.text}
                </pre>
                {
                    props.type === "recipe" && visible && (
                        <div className="file-meta-item__wrap">
                            <RecipeViewer data={props.fileInfo[0]} />
                        </div>
                    )
                }
                {/* {props.type === 'recipe' && <span className='file-meta-item__preview' onClick={preview}>预览</span>} */}
            </div>
            
        </div>
    );
}

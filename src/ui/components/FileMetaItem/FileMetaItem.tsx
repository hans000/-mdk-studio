interface IProps {
    name: string;
    text: string;
    description: string;
}

export default function FileMcMetaItem(props: IProps) {
    return (
        <div className="file-item" style={{ margin: 8 }}>
            <h3>
                <div>{props.name}</div>
                <div className="file-item__desc">{props.description}</div>
            </h3>
            <pre className='file-item__cont' style={{ overflow: "auto" }}>
                {props.text}
            </pre>
        </div>
    );
}

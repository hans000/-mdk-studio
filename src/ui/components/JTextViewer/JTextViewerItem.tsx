import { Tooltip } from "antd";
import React, { useState } from "react";
import {
    PartitionOutlined,
    CalendarOutlined,
    UserOutlined,
} from '@ant-design/icons';

interface IProps {
    data: any
    readonly?: boolean
}
// TODO mc 颜色映射
function transform(data: any): React.CSSProperties {
    const fontWeight = data.bold ? 600 : undefined
    const fontStyle = data.italic ? 'italic' : undefined
    const color = data.color || 'black'
    const decoration: string[] = []
    data.underlined && decoration.push('underline')
    data.obfuscated && decoration.push('overline')
    data.strikethrough && decoration.push('line-through')
    const textDecoration = decoration.join(' ')
    return {
        fontWeight,
        fontStyle,
        textDecoration,
        color,
    }
}

interface Token {
    type: 'string' | 'enter' | 'space'
    value?: string
}

function toList(raw: string) {
    const result: Token[] = []
    let value = ''
    for (let i = 0; i < raw.length; i++) {
        const ch = raw[i];
        if (ch === ' ' || ch === '\n') {
            value && result.push({ type: 'string', value })
            result.push({ type: ch === ' ' ? 'space' : 'enter' })
            value = ''
            continue
        }
        value += ch
    }
    value && result.push({ type: 'string', value })
    return result
}

function ComplexItem(props: {
    className: string;
    style: React.CSSProperties;
    data: any;
}) {
    if (props.data.score) {
        return (
            <Tooltip title={<HoverItem data={props.data} />}>
                <span className={props.className} style={props.style}>
                    <CalendarOutlined />
                </span>
            </Tooltip>
        )
    } else if (props.data.nbt) {
        return (
            <Tooltip title={<HoverItem data={props.data}/>}>
                <span className={props.className} style={props.style}>
                    <PartitionOutlined />
                </span>
            </Tooltip>
        )
    } else if (props.data.selector) {
        return (
            <Tooltip title={<HoverItem data={props.data}/>}>
                <span className={props.className} style={props.style}>
                    <UserOutlined />
                </span>
            </Tooltip>
        )
    } else {
        return (
            <span></span>
        )
    }
}

function HoverItem(props: {
    data: any
}) {
    return (
        <div>
            {
                Object.keys(props.data).map(key => {
                    return (
                        <div key={key}>
                            {key}: {JSON.stringify(props.data[key])}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function JTextViewerItem(props: IProps) {
    const [active, setActive] = useState(false)
    const style = transform(props.data)

    function handleClick() {
        if (props.readonly) return
        setActive(active => !active)
    }

    const classObject = React.useMemo(
        () => {
            const cls = (!props.readonly && active) ? ' active' : ''
            return {
                str: 'jv-item__str' + cls,
                space: 'jv-item__space' + cls,
                enter: 'jv-item__enter' + cls,
            }
        },
        [active, props.readonly]
    )

    return (
        <span className='jv-item'
            onClick={handleClick}>
            {
                props.data.text
                    ? (
                        toList(props.data.text).map((token, index) => token.type === 'string'
                            ? (
                                (props.data.clickEvent || props.data.hoverEvent)
                                    ? (
                                        <Tooltip key={index} title={<HoverItem data={props.data}/>}>
                                            <span className={classObject.str} style={style}>
                                                {token.value}
                                            </span>
                                        </Tooltip>
                                    )
                                    : <span key={index} className={classObject.str} style={style}>{token.value}</span>
                            )
                            : token.type === 'space'
                                ? <span key={index} className={classObject.space}></span>
                                : <br key={index} className={classObject.enter} />
                        )
                    )
                    : <ComplexItem data={props.data} style={style} className={classObject.str} />
            }
        </span>
    )
}
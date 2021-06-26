import React, { useState } from "react";

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

export default function JTextViewerItem(props: IProps) {
    const [active, setActive] = useState(false)
    const style = transform(props.data)
    const list = toList(props.data.text)

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

    function handleDragStart(ev: React.DragEvent<HTMLSpanElement>) {
        // ev.preventDefault()
    }
    function handleDrag() {
        console.log(1);
        
    }

    return (
        <span className='jv-item'
            // draggable
            // onDragStart={handleDragStart}
            // onDrag={handleDrag}
            onClick={handleClick}>
            {
                list.map((token, index) => token.type === 'string'
                    ? <span key={index} className={classObject.str} style={style}>{token.value}</span>
                    : token.type === 'space'
                        ? <span key={index} className={classObject.space}></span>
                        : <br key={index} className={classObject.enter} />
                )
            }
        </span>
    )
}
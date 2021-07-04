import React from 'react'
import { useState } from 'react'
import { JText } from '../../../../../mdk/dist/lib'
import { LineInfo } from '../../../../../mdk/dist/model'
import JTextViewer from '../JTextViewer'
import './index.less'

interface IProps {
    lineInfo: LineInfo
    lineNum: number
    length: number
}

export default function LineItem(props: IProps) {

    const [visible, setVisible] = useState(false)

    const showBtn = React.useMemo(
        () => {
            return props.lineInfo.type === 'tellraw'
        }, 
        [props.lineInfo.type]
    )

    function handleClick() {
        setVisible(v => !v)
    }

    const marginLeft = React.useMemo(
        () => {
            return props.length.toString().length / 2 + 1 + 'em'
        }, 
        [props.length]
    )

    const lineCls = React.useMemo(
        () => {
            const cls = ['line-item__text']
            props.lineInfo.type === 'comment' && cls.push('line-item__comment')
            return cls.join(' ')
        },
        [props.lineInfo.text]
    )

    return (
        <div className='line-item'>
            <div className="line-item__num">{props.lineNum}</div>
            <div className={lineCls} style={{ marginLeft }}>{props.lineInfo.text}</div>
            {
                showBtn && <div className="line-item__btn" onClick={handleClick}>预览</div>
            }
            {
                visible && (
                    <div className="line-item__view">
                        <JTextViewer data={(props.lineInfo.extra as JText).list} />
                    </div>
                )
            }
        </div>
    )
}
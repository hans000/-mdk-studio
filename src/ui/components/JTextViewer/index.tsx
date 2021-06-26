import React, { useEffect, useState } from 'react'
import './index.less'
import JTextViewerItem from './JTextViewerItem'

interface IProps {
    data: any;
    readonly?: boolean
}

export default function JTextViewer(props: IProps) {
    return (
        <div>
            {
                props.data.map((item: any, index: number) => <JTextViewerItem readonly={props.readonly} key={index} data={item} />)
            }
        </div>
    )
}
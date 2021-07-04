import mdk from 'mdkjs'
import { FileAbstract } from '../../../../mdk/dist/core'
import foo from '../changelog'
import main from './functions/main'
import * as tags from './tags'

export default mdk.createPack({
    packname: 'sys',
    description: '测试数据包',
    packs: [
        foo
    ],
    files: [
        ...Object.values<FileAbstract<any>>(tags),
        main,
    ]
})
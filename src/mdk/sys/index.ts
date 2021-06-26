import * as mdk from 'mdkjs'
import foo from '../changelog'
import main from './functions/main'
import * as tags from './tags'
import { FileAbstract } from 'mdkjs'

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
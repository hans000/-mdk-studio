import * as mdk from 'mdkjs'
import changelog from '../changelog'
import main from './functions/main'
import * as tags from './tags'

export default new mdk.Pack({
    packname: 'sys',
    description: '测试数据包',
    modules: [
        changelog,
    ],
    files: [
        ...Object.values<any>(tags),
        main,
    ]
})
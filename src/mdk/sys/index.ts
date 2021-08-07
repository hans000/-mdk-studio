import * as mdk from 'mdkjs'
import foo from '../changelog'
import main from './functions/main'
import * as tags from './tags'

export default mdk.createPack({
    packname: 'sys',
    description: '测试数据包',
    modules: [
        foo
    ],
    files: [
        ...Object.values<any>(tags),
        main,
    ]
})
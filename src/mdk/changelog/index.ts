import * as mdk from 'mdkjs'
import * as functions from './functions'

export default new mdk.Pack({
    packname: 'changelog',
    description: 'changelog数据包，用于演示mdk版本新增特性',
    files: [
        ...Object.values(functions),
    ]
})
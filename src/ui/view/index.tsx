import { FileInfo } from '../../../../mdk/dist/core';
import pack from '../../mdk/sys'
import FileItem from '../components/FileItem';
import FileMetaItem from '../components/FileMetaItem';
import { renderZip } from "../utils/render";

const packInfo = pack.create()
const fileInfoList = Object.keys(packInfo).reduce<FileInfo[]>((acc, key) => {
    acc.push(...packInfo[key])
    return acc
}, [])
console.log(fileInfoList);

export default function() {
    function clickHandle() {
        renderZip(fileInfoList)
    }
    return (
        <div>
            <button onClick={clickHandle}>数据包下载</button>
            <h2>内容预览</h2>
            <hr />
            {
                fileInfoList.map((item) => {
                    return (
                        item.type === 'file'
                            ? <FileItem fileInfo={item.extra} key={item.name} description={item.description} name={item.name}></FileItem>
                            : <FileMetaItem type={item.type} fileInfo={item.extra} key={item.name} text={item.text} description={item.description} name={item.name}></FileMetaItem>
                    )
                })
            }
        </div>
    )
}
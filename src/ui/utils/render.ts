import JSzip from "jszip";
import { FileInfo, LineInfo } from "mdkjs";

export function renderZip(fileInfo: FileInfo[], name = "pack.zip") {
    const zip = new JSzip()
    fileInfo.forEach((info) => {
        let text = info.text
        if (info.type === 'file') {
            text = (info.extra as LineInfo[]).map(lineInfo => lineInfo.text).join('\n')
        }
        zip.file(info.name, text);
    })
    zip.generateAsync({
      type: "blob"
    }).then((res) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(res);
        a.download = name;
        a.click();
        URL.revokeObjectURL(a.href);
        a.remove();
    })
}

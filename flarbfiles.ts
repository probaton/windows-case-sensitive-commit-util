import * as fs from "fs";
import * as _ from "lodash";
import * as path from "path";

export function doToFiles(startPath, toDo: (filePath: string) => void, suffix: string) {
    const files = fs.readdirSync(startPath);
    for (const file of files) {
        const filePath = path.join(startPath, file);
        const stat = fs.lstatSync(filePath);
        if (stat.isDirectory()) {
            doToFiles(filePath, toDo, suffix);
        } else if (_.endsWith(file, suffix)) {
            toDo(filePath);
        }
    }
}
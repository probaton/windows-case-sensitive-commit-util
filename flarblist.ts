import { Conf } from "./conf";
import { doToFiles } from "./flarbfiles";

function fileLogger(filePath: string) {
    console.log(`>>>> ${filePath}`)
} 

doToFiles(Conf.baseDir, fileLogger, Conf.suffix);


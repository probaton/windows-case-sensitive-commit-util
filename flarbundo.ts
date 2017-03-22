import { Conf } from "./conf";
import { doToFiles } from "./flarbfiles";
import * as fs from "fs";

function flarbify(filePath: string) {
    fs.rename(filePath, filePath.slice(0, filePath.length-Conf.append.length));
}

function fileLogger(filePath: string) {
    console.log(`>>>> ${filePath}`)
} 

doToFiles(Conf.baseDir, flarbify, Conf.append);



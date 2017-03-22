import { Conf } from "./conf";
import { doToFiles } from "./flarbfiles";
import * as fs from "fs";

function flarbifier(filePath: string) {
    fs.rename(filePath, filePath + Conf.append);
}

doToFiles(Conf.baseDir, flarbifier, Conf.suffix);


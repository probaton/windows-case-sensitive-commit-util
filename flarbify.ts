import { Conf } from "./conf";
import { doToFiles } from "./flarbfiles";
import * as fs from "fs";

function flarbify(filePath: string) {
    fs.rename(filePath, filePath + "s");
}

doToFiles(Conf.baseDir, flarbify, Conf.append);


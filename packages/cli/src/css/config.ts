import { readConfigs } from '../util';
import type { StyleLintConfig } from '../types';

// 读取当前目录下的 json 文件，以文件名为 key 对外 export
// json 配置文件中可以使用注释
export default readConfigs(__dirname) as Record<string, StyleLintConfig>;

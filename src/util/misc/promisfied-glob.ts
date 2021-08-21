import * as g from "glob";
const util = require('util');

export function glob(pattern: string, options?: g.IOptions): Promise<string[]> {
  console.log('CE -- ihp -- 1');
  const g_promise = util.promisify(g);
  return g_promise(pattern, options);
//  return new Promise<string[]>((resolve, reject) => {
//     g(pattern, options, (err, matches) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(matches);
//       }
//     });
//  });
}

export function globSingleFile(pattern: string, options?: g.IOptions): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    g(pattern, options, (err, matches) => {
      if (err) {
        reject(err);
      }

      if (matches.length === 0) {
        reject(new Error(`Cannot find any file that matches pattern "${pattern}"`));
      } else if (matches.length > 1) {
        reject(new Error(`Found more than one file that matches pattern "${pattern}`));
      } else {
        resolve(matches[0]);
      }
    });
  });
}

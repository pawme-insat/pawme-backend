import fs from 'fs';

export function deletefile(name: string, where: string) {
  const path = where + name;
  try {
    fs.unlinkSync(path);
  } catch (e) {
    console.log(e);
  }
}

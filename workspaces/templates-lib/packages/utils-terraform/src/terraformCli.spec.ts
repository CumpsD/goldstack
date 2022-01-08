import { mkdir } from '@goldstack/utils-sh';
import { tf } from './terraformCli';
import MockCloudProvider from './MockCloudProvider';

import path from 'path';

describe('Terraform CLI', () => {
  it('Should accept folder with spaces (v0.12)', async () => {
    const testDir = './goldstackLocal/cli-folder-w-space/0.12/My Dir';
    mkdir('-p', testDir);
    tf('init', {
      dir: path.resolve(testDir),
      version: '0.12',
      provider: new MockCloudProvider(),
    });
  });
  it('Should accept folder with spaces (v0.13', async () => {
    const testDir = './goldstackLocal/cli-folder-w-space/0.13/My Dir';
    mkdir('-p', testDir);
    tf('init', {
      dir: path.resolve(testDir),
      version: '0.13',
      provider: new MockCloudProvider(),
    });
  });
});

import { getAWSUser } from '@goldstack/infra-aws';
import { resolve } from 'path';
import { awsCli } from '@goldstack/utils-aws-cli';

interface S3UploadParams {
  userName: string;
  region: string;
  localPath: string;
  bucket: string;
  bucketPath: string;
}

export const upload = async (params: S3UploadParams): Promise<void> => {
  const user = await getAWSUser(params.userName);

  const dest = `s3://${params.bucket}${params.bucketPath}`;
  const source = resolve(params.localPath);

  console.log(`Uploading [${source}] to [${dest}]`);
  // command run twice, once without and once with delete to ensure that
  // users will not try to request files that no longer exist
  // during the upload process
  // see https://github.com/aws/aws-cli/issues/1417
  await awsCli({
    command: `s3 sync . ${dest}`,
    workDir: source,
    credentials: user,
    region: params.region,
    options: { silent: false },
  });
  await awsCli({
    command: `s3 sync . ${dest} --delete`,
    workDir: source,
    credentials: user,
    region: params.region,
    options: { silent: false },
  });
};

import { auth } from '../../../src/lib/fireBaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let { email } = req.body;
  return await auth.sendPasswordResetEmail(email)
    .then((res: any) => {
      // testar esssa função depois
      alert('email de reset de senha enviado!')
    })
    .catch((err: any) => {
      console.log(err);
    });

}
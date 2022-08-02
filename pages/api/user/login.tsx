import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../src/lib/fireBaseClient'
import "firebase/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  let { email, senha } = req.body;
  return async () => {
    auth.signInWithEmailAndPassword(email, senha).then((res: any) => {
      //userWrite(res.user);
    }).catch((err: any) => {
      console.log(err);
    })
  }

}


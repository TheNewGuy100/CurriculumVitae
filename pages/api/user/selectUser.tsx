import fs from 'firebase-admin';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const user = req.body;
    const db = fs.firestore();
    return async (user: any) => {
        await db.collection('users').doc(user.uid.toString()).get().then((res) => {
            console.log(res.data());
        }).catch((err) => {
            console.log(err);
        })
    }
}
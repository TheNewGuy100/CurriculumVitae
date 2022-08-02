import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'firebase-admin';

import { userInterface } from 'src/models/user.models';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const user = req.body;
    const userFireStore: userInterface =
    {
        id: user.uid,
        email: user.email,
        roles: {
            user: true,
            admin: false
        }
    }

    const db = fs.firestore();
    
    return await db.collection('users').doc(user.uid.toString()).set(userFireStore).then((res) => {
        alert('user enviado ao firestore')
    }).catch((err) => {
        console.log(err);
    })

}
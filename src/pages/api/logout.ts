import { sessionOptions } from '@/lib/i-session';
import { withIronSessionApiRoute } from 'iron-session/next';

import { NextApiRequest, NextApiResponse } from 'next';

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();

  res?.status(200)?.json({
    isLoggedIn: false,
    token: '',
    _id: '',
    name: '',
    email: '',
    message: '',
    createdAt: '',
    updatedAt: '',
    role: '',
  });
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

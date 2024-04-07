import { withIronSessionApiRoute } from 'iron-session/next';

import { sessionOptions } from '@/lib/i-session';
import { BACK_END_API_URLS, SHIKSHA_LOGIN_URL } from '@/services/shiksha-ml';
import { NextApiRequest, NextApiResponse } from 'next';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    let loginData = null;

    // const httpResponse = await fetch(SHIKSHA_LOGIN_URL + BACK_END_API_URLS.USERLOGIN, {
      const httpResponse = await fetch("http://shikshaml.in/backend/api/auth/sikhshaML/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!httpResponse.ok) {
      const errorText = await httpResponse.text();
      // console.error('errorText', errorText);
      try {
        throw {
          message: JSON.parse(errorText).message,
          status: httpResponse.status,
        };
      } catch (e) {
        throw { message: errorText, status: httpResponse.status };
      }
    }

    loginData = await httpResponse.json();
    // console.log('loginData', loginData);
    if (!loginData) {
      // console.error('loginData', loginData);
      throw { message: 'Token not available', status: httpResponse.status };
    }
    const user: any = {
      isLoggedIn: true,
      message: loginData?.message,
      token: loginData?.token,
      _id: loginData?._id,
      name: loginData?.first_name,
      email: loginData?.email,
      role: loginData?.role,
      createdAt: loginData?.createdAt,
      updatedAt: loginData?.updatedAt,
    };

    req.session.user = user;
    await req.session.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

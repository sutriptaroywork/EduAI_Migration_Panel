import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// export function useSocket(url: string, token: string, path: any) {
export function useSocket(url: string, path: any) {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketIo = io(url, {
      transports: ['websocket'],
      // auth: {
      //   token: token,
      // },
      path: path,
    });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return socket;
}

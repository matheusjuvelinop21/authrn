interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export default function signInAuth(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdf',
        user: {
          name: 'Matheus',
          email: 'matheus.juvelino.work@gmail.com',
        },
      });
    }, 2000);
  });
}

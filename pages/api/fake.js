// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
  fetch('http://localhost:9000/stores')
    .then((res) => res.json())
    .then((res) => {
      response.status(200).json(res);
    });
}

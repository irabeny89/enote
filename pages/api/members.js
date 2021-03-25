// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    members: [{ name: "Ernest Irabor", id: 1 }, { name: "Kazeem", id: 2 }]
  })
}

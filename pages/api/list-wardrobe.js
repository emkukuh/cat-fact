// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "datas": [
      {
        "id": 1,
        "name": "baju bagus",
        "ownerEmail": "ivan@gunawan.com",
        "status": "terpinjam",
        "duration": 4
      },
      {
        "id": 2,
        "name": "baju bagus sekali",
        "ownerEmail": "anak@kuda.com",
        "status": "tersedia",
        "duration": 2
      },
      {
        "id": 3,
        "name": "baju murah",
        "ownerEmail": "pamela@upstone.com",
        "status": "terpinjam",
        "duration": 2
      },
      {
        "id": 4,
        "name": "baju sewa toko sebelah",
        "ownerEmail": "emma@whyson.com",
        "status": "terpinjam",
        "duration": 1
      },
      {
        "id": 5,
        "name": "baju hangat",
        "ownerEmail": "congki@imoet.com",
        "status": "laundry",
        "duration": 2
      }
    ]
  })
}

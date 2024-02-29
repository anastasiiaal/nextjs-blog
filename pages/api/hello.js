// this data is availale on http://localhost:3000/api/hello

export default function handler(req, res) {
    res.status(200).json({ data: 'Hello', otherData: 'world' });
}

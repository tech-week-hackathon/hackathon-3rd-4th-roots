// pages/api/ipfs.ts
export default async function handler(req: { query: { cid: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; json: { (arg0: { error: string; }): void; new(): any; }; }; }) {
  const { cid } = req.query;

  try {
    const response = await fetch(`https://ipfs.io/ipfs/${cid}`);
    const content = await response.text();
    res.status(200).send(content);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content from IPFS' });
  }
}

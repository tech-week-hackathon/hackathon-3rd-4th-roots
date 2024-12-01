import * as Cardano from "@emurgo/cardano-serialization-lib-browser";

export function convertHashToBech32Committee(hash: string): string {

  const hex = hash.replace("scriptHash-", "");

  const bytes = new Uint8Array(Buffer.from(hex, "hex"));

  const scriptHash = Cardano.ScriptHash.from_bytes(bytes);
  const bech32 = scriptHash.to_bech32("cc_cold");

  return bech32;
}

export function formatAddressUI(address: string): string {
  if (!address) return "";
  return `${address.slice(0,8)}...${address.slice(-8)}`
}

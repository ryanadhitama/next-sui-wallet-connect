import { addressEllipsis, ConnectButton, useWallet } from "@suiet/wallet-kit";
import Head from "next/head";

export default function Home() {
  const wallet = useWallet();

  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen">
        {wallet.connected ? (
          <div className="text-center">
            <div className="text-2xl">{addressEllipsis(wallet.address)}</div>
            <div>
              Status : <span className="text-green-500">{wallet.status}</span>
            </div>
            <button
              className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg text-base"
              onClick={() => wallet.disconnect()}
            >
              Disconnect
            </button>
          </div>
        ) : (
          <ConnectButton />
        )}
      </div>
      <Head>
        <title>NextJS - Wallet Connect</title>
      </Head>
    </>
  );
}

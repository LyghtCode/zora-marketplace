import { useState } from "react"

const UserNFTs = ({ userAddress, nfts, collectionInfo, setCollectionCB }) => {

    const [collectionLookup, setCollectionLookup] = useState("0x7e6663E45Ae5689b313e6498D22B041f4283c88A")

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center w-full text-center pt-36 sm:pt-24 ">
                <div className="w-full text-3xl text-white underline">
                    {`My NFTs (${userAddress.substring(0, 4) + "..." + userAddress.substring(userAddress.length - 4)})`}
                </div>
                <div className="grid w-full grid-cols-3 mt-5 md:w-7/12">
                    <div className="flex flex-row self-center mb-1 text-xl text-white w-fit justify-self-center">
                        Address
                    </div>                
                    <div className="flex flex-row self-center mb-1 text-xl text-white w-fit justify-self-center">
                        Balance
                    </div>
                    <div className="flex flex-row self-center mb-1 text-xl text-white w-fit justify-self-center">
                        Name
                    </div>
                </div>
                <div className="w-full md:w-7/12"> 
                    {
                        nfts && nfts.length > 0
                        ?
                        nfts.map((nft, index) => {
                        while (index < nfts.length && index < 10 ) {
                            return (
                                <div key={nft.collectionAddress} className="grid w-full grid-cols-3 text-white">
                                    <a
                                    href={`https://etherscan.io/address/${nft.collectionAddress}`}
                                    className=" py-[0.5px] w-fit flex flex-row justify-self-center self-center hover:underline hover:text-green-300"
                                    >
                                        {"" + (nft.collectionAddress.substring(0, 4)) + "..." + (nft.collectionAddress.substring(nft.collectionAddress.length - 4))}
                                    </a>
                                    <div className=" py-[0.5px] w-fit flex flex-row justify-self-center self-center ">
                                        {"" + nft.count}    
                                    </div>                                             
                                    <div className=" py-[0.5px] w-fit flex flex-row justify-self-center self-center">
                                        {"" + nft.name}    
                                    </div>                     
                                </div>
                            )
                        }
                    }   
                        ) : (
                            <div className="grid w-full grid-cols-3 text-white ">
                                <div className="flex flex-row self-center w-fit justify-self-center ">
                                    n/a
                                </div>        
                                <div className="flex flex-row self-center w-fit justify-self-center ">
                                    0  
                                </div>                                             
                                <div className="flex flex-row self-center w-fit justify-self-center ">
                                    n/a
                                </div>                     
                            </div>
                        )
                    }                    
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center w-full pt-5 text-center h-fit sm:pt-10 ">                        
                <div className="w-full pb-5 text-3xl text-white underline ">
                    Collection Lookup
                </div>
                <div className="flex flex-col flex-wrap">
                    <input
                        className="w-6/12 h-full px-2 text-center bg-slate-200"
                        placeholder="Input NFT Address"
                        name="inputContract"
                        type="text"
                        value={collectionLookup} // zorbs
                        onChange={(e) => {
                            e.preventDefault();
                            setCollectionLookup(e.target.value)
                        }}
                        required                    
                    >
                    </input>
                    <button
                        className="h-full px-2 ml-2 text-white border-2 border-solid text-slate-200 border-slate-200 hover:text-black hover:bg-slate-200 "
                        onClick={() => {
                            setCollectionCB(collectionLookup)
                        }}
                    >
                        SEARCH
                    </button>
                </div>
                <div className="flex flex-col flex-wrap content-center w-full pt-2">
                    <div className="h-full">
                        <div className="text-white">
                            Address
                        </div>                
                        <div className="text-white ">
                            Name
                        </div>
                        <div className="text-white ">
                            Current Supply
                        </div>
                        <div className="text-white ">
                            Unique Owners
                        </div>
                        <div className="text-white ">
                            Sales Volume
                        </div>
                        <div className="text-white ">
                            Floor Price
                        </div>
                    </div>
                    <div className="h-full">
                        <div className="text-white ">
                            {"" + (collectionInfo.address.substring(0, 4)) + "..." + (collectionInfo.address.substring(collectionInfo.address.length - 4))}                
                        </div>                
                        <div className="text-white ">
                            {collectionInfo.name}
                        </div>
                        <div className="text-white ">
                            {collectionInfo.nftCount}
                        </div>
                        <div className="text-white ">
                            {collectionInfo.ownerCount}
                        </div>
                        <div className="text-white ">
                            {"" + Number(collectionInfo["salesVolume"].chainTokenPrice).toFixed(2) + " ETH"}
                        </div>
                        <div className="text-white ">
                            {collectionInfo.floorPrice + " ETH"} 
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default UserNFTs
const { ethers } = require("hardhat");

async function main() {
    const AuctionFactory = await ethers.getContractFactory("Auction");
    console.log("Deploying the contract ....");
    const Auction = await AuctionFactory.deploy(
        100,
        "0x5b38da6a701c568545dcfcb03fcb875f56beddc4"
    );
    await Auction.deployed();
    console.log(`Adress ${Auction.address}`);
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

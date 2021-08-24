import { verify, deployToLiveNetwork, setDefaultSigner, deployer, toWei } from "../utils";
import { ethers } from "hardhat";

async function main() {

    deployToLiveNetwork();

    const signers = await ethers.getSigner();
    const owner = signers[0];
    setDefaultSigner(owner);

    await deployer("Token");
}

main()
    .then(verify)
    .then(() => process.exit(0))
    .catch((error: Error) => {
        console.error(error);
        process.exit(1);
    });
import { ChainId, Token } from "@dogeswap/sdk-core";

export type ChainTokens<T extends string = string> = { [chainId in ChainId]: Token<T> };
export type ChainContracts = { [chainId in ChainId]: string };

interface InfrastructureAddress {
    factory: string;
    router: string;
    multicall: string;
    ensRegistrar: string;
}

export const addresses = {
    [ChainId.MAINNET]: {
        infrastructure: {
            factory: "0xD27D9d61590874Bf9ee2a19b27E265399929C9C3",
            router: "0xa4EE06Ce40cb7e8c04E127c1F7D3dFB7F7039C81",
            multicall: "0xA04551f053294A096Bd4Bff946e24CBbCCd0692F",
            ensRegistrar: "0x0000000000000000000000000000000000000000",
        } as InfrastructureAddress,
        tokens: {
            omnom: "0xe3fcA919883950c5cD468156392a6477Ff5d18de",
            wwdoge: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
            eth: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
            usdc: "0x765277EebeCA2e31912C9946eAe1021199B39C61",
            dai: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
            usdt: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
            wbtc: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
        },
    },
    [ChainId.TESTNET]: {
        infrastructure: {
            factory: "0x3D82cf3c8B34e13314A66645A97749910a0627B3",
            router: "0xf78CB981272840292a1275224aF55C917d106983",
            multicall: "0x05f10ef3dDB06842b6963BD6D766A09cD935c5a5",
            ensRegistrar: "0x0000000000000000000000000000000000000000",
        } as InfrastructureAddress,
        tokens: {
            wwdoge: "0x2465086E721F68761e3275A54802C985FFd0D727",
            usdt: "0x5b5E34d03b1533877E23F68622f642ECb721B918",
            // usdc: "0x1D0DD931c0101ba58bDB312e5416C5f8330c194D", Can trade using the testnet token list
        },
    },
    [ChainId.LOCALNET]: {
        infrastructure: {
            factory: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
            router: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
            multicall: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
            ensRegistrar: "0x0000000000000000000000000000000000000000",
        } as InfrastructureAddress,
        tokens: {
            dst: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
            usdt: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
            usdc: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
            // dai: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", Can trade using the local token list
            wwdoge: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
        },
    },
};

export const getAddress = (address: keyof InfrastructureAddress, chainId: ChainId | undefined) => {
    return chainId == undefined ? undefined : addresses[chainId]?.infrastructure?.[address];
};

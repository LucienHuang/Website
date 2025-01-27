import type { FlashMint, Mint } from '@/types'

export const mint: Mint = {
  information: {
    // 只支持文件名含 @ 符号的图片，如 banner_@1x.jpg banner_@2x.jpg banner_@3x.jpg
    images: [
      'https://ambrus.s3.amazonaws.com/1672031056982_0.85_banner%400.33x.jpg',
      'https://ambrus.s3.amazonaws.com/1672031056980_0.75_banner-2%400.67x.jpg',
      'https://ambrus.s3.amazonaws.com/1672031056961_0.79_banner-1.jpg'
    ],
    type: 'E4C Rangers NFT Hive Series 3',
    name: 'Thorn: Bumble Fighter',
    content:
      '<p>Rin is the first Ranger coming to <a href="https://www.ambrus.studio/worldview" target="_blank" rel="noopener">E4C Verse</a>. She is a combat cyborg, who carries the razor-sharp katana sword and scaled samurai armor. She is also a major member of A.E.R.L, who fights against corruption. <a href="https://www.ambrus.studio/worldview/ranger/6">Learn more about Rin</a></p>',
    note: '<p>For public mint, visit <a href="https://rarible.com/" target="_blank" rel="noopener">Rarible.com</a></p>'
  },
  disclaimer: {
    images: [
      'https://ambrus.s3.amazonaws.com/1672032083985_0.65_1.jpg',
      'https://ambrus.s3.amazonaws.com/1672032084006_0.64_2.jpg',
      'https://ambrus.s3.amazonaws.com/1672032084009_0.68_3.jpg',
      'https://ambrus.s3.amazonaws.com/1672032084014_0.99_4.jpg',
      'https://ambrus.s3.amazonaws.com/1672032084017_0.86_5.jpg',
      'https://ambrus.s3.amazonaws.com/1672032084020_0.37_6.jpg'
    ],
    content: ''
  },
  publicSale: {
    start: 1664935200, // Wednesday, October 5, 2022 10:00:00 AM GMT+08:00，不填时间不会展示 Public Sale
    text: 'Mint on Rarable.com',
    link: 'https://rarible.com/'
  },
  editions: [], // 删除所有版本展示 Coming soon
  // editions: [
  //   {
  //     name: 'Gold Edition',
  //     value: 'gold',
  //     contract: '0xc2D4e1a46b48EB3208bdcf4887f85E02682B7752',
  //     nftContract: '0x19Dd9D7899Cb03c3a0e12911121ADaED7a4648B8',
  //     style: {
  //       background: 'linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)',
  //       boxShadow: '0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
  //     }
  //   },
  //   {
  //     name: 'Rangers Edition',
  //     value: 'rangers',
  //     contract: '0xc2D4e1a46b48EB3208bdcf4887f85E02682B7752', // TODO: 等后端改合约
  //     nftContract: '0x19Dd9D7899Cb03c3a0e12911121ADaED7a4648B8', // TODO: 等后端改合约
  //     style: {
  //       background: 'linear-gradient(90deg, #399E98 0%, #88C4C0 100%)',
  //       boxShadow: '0px 0px 8px 1px #88C3C0, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
  //     }
  //   }
  // ],
  introduction: [
    // 完全展示部分
    {
      title: 'E4C Rangers HIVE',
      content:
        '<p><strong>Amount</strong>: 9,999<br>Free mint and available to E4C NFT holders, E4Cverse Permit owners, and Whitelist owners only.<br><strong>Permit Mint</strong>: From Jan.9th 10AM SGT<br><strong>Whitelist Mint</strong>: From Jan.10th 10AM SGT</p>'
    },
    {
      title: 'Utilities',
      content:
        '<p>In-game airdrops of champions.<br>Staking the NFT to receive future $DGC tokens (the utility token of E4C, find more in the <a href="https://tokenomics.ambrus.studio/">Tokenomics Paper</a>). <br>Please note that the Hive Edition is not applicable for NFT upgrading.</p>'
    }
    // 折叠部分需要 foldable 为 true
//    {
//      title: 'NFT Staking',
//      foldable: false,
//      content:
//        '<p>For Gold/Rangers Edition holders, we offer you a chance to upgrade your NFT to Gold+/Rangers+ Edition and to earn more benefits by:</p><ul><li>Staking E4C Rangers NFT for at least 35 days.</li><li>Acquiring 1 special community badge.</li></ul>'
//    },
//    {
//      title: 'Gold Edition Utilities',
//      foldable: true,
//      content:
//        '<ul><li>5% in-game IP dividend ownership* of the corresponding champions&skins</li><li>Exclusive airdrop of the corresponding champion in game E4C: Final Salvation</li><li>Gold Loot Box containing in-game champions and skins</li><li>10% discount on in-game purchases</li><li>Complementary gifts to 1 friend</li></ul>'
//    },
//    {
//      title: 'Gold+ Edition Utilities',
//      foldable: true,
//      content:
//        '<ul><li>3% additional in-game IP dividend ownership* of the corresponding champions&skins</li><li>Exclusive airdrop of the corresponding champion in game E4C: Final Salvation</li><li>E4C token airdrop</li><li>Gold+ Loot Box containing in-game champions and skins</li><li>15% discount on in-game purchases</li><li>Complementary gifts to 3 friends</li></ul>'
//    },
//    {
//      title: 'Rangers Edition Utilities',
//      foldable: true,
//      content:
//        '<ul><li>5% in-game IP dividend ownership* of the corresponding champions&skins</li><li>Exclusive airdrop of the corresponding champion in game E4C: Final Salvation</li></ul>'
//    },
//    {
//      title: 'Rangers+ Edition Utilities',
//      foldable: true,
//      content:
//        '<ul><li>5% in-game IP dividend ownership* of the corresponding champions&skins</li><li>Exclusive airdrop of the corresponding champion in game E4C: Final Salvation</li><li>Gold Loot Box containing in-game champions and skins</li><li>10% discount on in-game purchases</li><li>Complementary gifts to 1 friend</li></ul>'
//    }
  ]
}

export const flashMint: FlashMint = {
  ...mint, // 文案和 Mint 一致
  flashSale: {
    start: 1664589600, // Saturday, October 1, 2022 10:00:00 AM GMT+08:00，不填不会跳转普通 Mint
    end: 1664607600 // Saturday, October 1, 2022 3:00:00 PM GMT+08:00，不填不会跳转普通 Mint
  },
  editions: [
    // Flash sale 只有 Gold 版本
    {
      name: 'Gold Edition',
      value: 'gold',
      contract: '0xc2D4e1a46b48EB3208bdcf4887f85E02682B7752',
      nftContract: '0x19Dd9D7899Cb03c3a0e12911121ADaED7a4648B8',
      style: {
        background: 'linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)',
        boxShadow: '0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
      }
    }
  ]
}

// 不要更改这里
export const initialMint: Mint = {
  information: { images: [], type: '', name: '', content: '' },
  disclaimer: { images: [], content: '' },
  publicSale: { text: '', link: '' },
  editions: [],
  introduction: [],
  properties: []
}

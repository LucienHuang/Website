import type { NFTItem } from '@/types'

export const mint: NFTItem = {
  information: {
    images: [
      'https://ambrus.s3.amazonaws.com/1659502593244_0.08_banner_480w_480w.jpg',
      'https://ambrus.s3.amazonaws.com/1659502593218_0.20_banner_960w_960w.jpg',
      'https://ambrus.s3.amazonaws.com/1659502593241_0.88_banner_1440w_1440w.jpg'
    ],
    type: 'E4C Rangers NFT Series 1',
    name: 'Rin: Heir of Musashi',
    content:
      "<p>Rin is the first Ranger coming to E4C Verse. She'll also make an appearance in our upcoming game, E4C Final Salvation.</p><p>She was born in 2063 as a human and re-born in 2079 as a combat mecha. Because her family celebrated the existence of samurai ancestors, she carries the razor-sharp katana sword and scaled samurai armor. Rin has become an infamous spectral force among criminal forces throughout the central areas of Japanese Honshu island.</p>"
  },
  disclaimer: {
    images: [
      'https://ambrus.s3.amazonaws.com/1659503426906_0.55_1.jpg',
      'https://ambrus.s3.amazonaws.com/1659503426929_0.47_2.jpg',
      'https://ambrus.s3.amazonaws.com/1659503426933_0.29_3.jpg'
    ],
    content: ''
  },
  // editions: [], // Show 'Coming soon'
  editions: [
    {
      name: 'Gold Edition',
      value: 'legendary',
      contract: '0xc2D4e1a46b48EB3208bdcf4887f85E02682B7752',
      nftContract: '0x19Dd9D7899Cb03c3a0e12911121ADaED7a4648B8',
      style: {
        background: 'linear-gradient(90deg, #E4AA15 0%, #F0C75D 100%)',
        boxShadow: '0px 0px 8px 1px #FFB800, inset 4px 0px 10px rgba(0, 0, 0, 0.15)'
      }
    }
  ],
  introduction: [
    {
      title: 'Gold edition',
      content:
        '<p>Amount: 450<br>Mint price: 0.49ETH<br><strong>Permit Mint</strong>: 9.30 8pm SGT ~ 10.1 8pm SGT; 24h; 15%-off<br><strong>Gamefi3.0 Summit Flash Sale (limited supply)</strong>: 10.1 10am SGT ~ 10.1 3pm SGT; 5h; 5%-off<br><strong>Whitelist Mint</strong>: 10.1 8pm SGT ~ 10.2 8pm SGT; 24h; 10%-off<br><strong>Public Mint (if any remaining)</strong>: starts from 10.2 8pm SGT; full price; on <a href="#">Rarible.com</a></p>'
    },
    {
      title: 'Rangers edition',
      content:
        '<p>Amount: 646<br>Mint price: 0.19ETH<br><strong>Permit Mint</strong>: 10.3 8pm SGT ~ 10.4 8pm SGT; 24h; 15%-off<br><strong>Whitelist Mint</strong>: 10.4 8pm SGT ~ 10.5 8pm SGT; 24h; 10%-off<br><strong>Public Mint (if any remaining)</strong>: starts from 10.5 8pm SGT; full price; on <a href="#">Rarible.com</a></p>'
    },
    {
      title: 'NFT Utilities',
      content:
        '<p>What you get with Gold Edition:</p><ul><li>5% in-game IP dividend ownership of the corresponding champions+skins(shared among holders).Airdrop of the corresponding champion in games.</li><li>Gold Loot Box containing airdrops of in-game champions and skins.</li><li>10% discount on in-game purchases.</li><li>Complementary gifts to 1 friend.</li></ul>'
    },
    {
      title: 'NFT Staking System',
      content:
        '<p>For Gold Edition holders, we offer you a chance to upgrade your NFT to Gold+ and earn more benefits by:</p><ul><li>Staking E4C Rangers NFT for at least 90 days.</li><li>Completing specific community missions and claiming the badge.</li></ul>'
    },
    {
      title: 'Utilities of the Gold+ Edition',
      content:
        '<ul><li>5% in-game IP dividend ownership shared among holders and 3% additional IP dividend ownership of the corresponding character (shared among holders of Ultimate and Gold+ Edition).</li><li>E4C token airdrop.</li><li>Airdrop of the corresponding ranger in games.</li><li>Gold+ Loot Box airdrop of rangers and skins.</li><li>15% discount on in-game purchases.</li><li>Complementary gifts to 3 friends.</li></ul><p><br/>In addition, holders who stake will also be granted 1 NFT airdrop from the next release.</p>'
    }
  ]
}

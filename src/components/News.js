import React, { Component } from 'react';
import NewsItems from './NewsItems';

export default class News extends Component {
    constructor(){
        super();
        // console.log('this is the constructor of news component')
        this.state ={
            articles: [
                
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Tech Desk",
                    "title": "James Webb Space Telescope Completes Mirror Deployment Process - News18",
                    "description": "On January 24, NASA will fire the James Webb telescope's thrusters to fire it into the its orbit around the sun.",
                    "url": "https://www.news18.com/news/tech/james-webb-space-telescope-completes-mirror-deployment-process-4685300.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/james-webb-164135813516x9.png",
                    "publishedAt": "2022-01-22T04:00:35Z",
                    "content": "James Webb telescope, the largest space telescope has deployed all of the hexagonal mirror segments. The delicate operation that required the James Webb observatory’s individual mirror segments out o… [+1525 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Blogspot.com"
                    },
                    "author": "noreply@blogger.com (Unknown)",
                    "title": "Elon Musk reveals who bitcoin's creator Satoshi Nakamoto might be",
                    "description": "Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency Bitcoin. \"You can watch ideas evolve before Bitcoin was lau…",
                    "url": "https://techncruncher.blogspot.com/2021/12/elon-musk-reveals-who-bitcoins-creator.html",
                    "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEik_48hPzMzsDzwfdUeHj4jNGqYGevEuVjTTPkAGTu9bRN3oePxV6bxF897GK8Az3AaSqUOalYXNG4HSCy0fW5KUHuruCWP8hAfZxgrgbzh-dsbLM9jxyFGCthOZdBCa1dNkqk6mrVl0VtflsV2VvKXfGnwL6-68m-mxp7qHJuLlvqGIahZ9YDe5mt97w=w1200-h630-p-k-no-nu",
                    "publishedAt": "2021-12-29T20:41:00Z",
                    "content": "Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency… [+1467 chars]"
                },
                {
                    "source": {
                        "id": "wired",
                        "name": "Wired"
                    },
                    "author": "Gian M. Volpicelli",
                    "title": "As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss",
                    "description": "The central Asian country became No. 2 in the world for Bitcoin mining. But political turmoil and power cuts have hit hard, and the future looks bleak.",
                    "url": "https://www.wired.com/story/kazakhstan-cryptocurrency-mining-unrest-energy/",
                    "urlToImage": "https://media.wired.com/photos/61de2d453e654a13e9a16ef0/191:100/w_1280,c_limit/Business_Kazakhstan-2HDE52K.jpg",
                    "publishedAt": "2022-01-12T12:00:00Z",
                    "content": "When Denis Rusinovich set up cryptocurrency mining company Maveric Group in Kazakhstan in 2017, he thought he had hit the jackpot. Next door to China and Russia, the country had everything a Bitcoin … [+4140 chars]"
                },
                {
                    "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                    },
                    "author": "Jon Porter",
                    "title": "Jack Dorsey’s Block is working to make Bitcoin mining easier",
                    "description": "Block is working on building an “open Bitcoin mining system,” its CEO Jack Dorsey has announced. The company’s goals for the system are for it to be easily available, reliable, and relatively power efficient.",
                    "url": "https://www.theverge.com/2022/1/14/22883500/jack-dorsey-block-bitcoin-mining-system-open-source-mainstream",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/NE548fVufAlHoBliurOdnG-lfuw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23168502/1321753348.jpg",
                    "publishedAt": "2022-01-14T13:46:28Z",
                    "content": "Were officially building an open Bitcoin mining system\r\nPhoto by Joe Raedle/Getty Images\r\nBlock, the payment company formerly known as Square, is working on building an open Bitcoin mining system, it… [+2078 chars]"
                },
                {
                    "source": {
                        "id": "the-verge",
                        "name": "The Verge"
                    },
                    "author": "Corin Faife",
                    "title": "Crypto.com admits over $30 million stolen by hackers",
                    "description": "Cryptocurrency exchange Crypto.com has said that $15 million in ethereum and $18 million in bitcoin were stolen by hackers in a security breach",
                    "url": "https://www.theverge.com/2022/1/20/22892958/crypto-com-exchange-hack-bitcoin-ethereum-security",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/mde_l3lUC4muDPEFG7LYrUz0O3g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8921023/acastro_bitcoin_2.jpg",
                    "publishedAt": "2022-01-20T13:23:31Z",
                    "content": "In a new blog post the company said that 4,836 ETH and 443 bitcoin were taken\r\nIllustration by Alex Castro / The Verge\r\nIn a blog post published in the early hours of Thursday morning, cryptocurrency… [+2004 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Mariella Moon",
                    "title": "Block is officially building an 'open Bitcoin mining system,' says founder Jack Dorsey",
                    "description": "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provider, then known as Square, was considering working on the proj…",
                    "url": "https://www.engadget.com/jack-dorseys-block-is-officially-building-an-open-bitcoin-mining-system-114033482.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/b08eca30-67a7-11ec-bfef-a5351ba20ef6",
                    "publishedAt": "2022-01-14T11:40:33Z",
                    "content": "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provide… [+1584 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "New York Times"
                    },
                    "author": "Dana Rubinstein, Jonah E. Bromwich and Jeffery C. Mays",
                    "title": "Eric Adams Is Taking His First Paycheck in Crypto",
                    "description": "Mr. Adams, who wants New York City to become the global capital for cryptocurrency, will have his paycheck converted into Bitcoin and Ethereum.",
                    "url": "https://www.nytimes.com/2022/01/20/nyregion/eric-adams-bitcoin-cryptocurrency.html",
                    "urlToImage": "https://static01.nyt.com/images/2022/01/20/nyregion/20adams-crypto01/20adams-crypto01-facebookJumbo.jpg",
                    "publishedAt": "2022-01-20T19:54:48Z",
                    "content": "On some level, the new mayor is simply employing an age-old political strategy: making overtures to the business community. Fintech is a growing field in New York City, and blockchain-based companies… [+1562 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Blogspot.com"
                    },
                    "author": "noreply@blogger.com (Unknown)",
                    "title": "Musk says Tesla to accept dogecoin for merchandise",
                    "description": "<table><tr><td></td></tr><tr><td> Representation of cryptocurrency Dogecoin is seen in this illustration taken November 29, 2021. REUTERS/Dado Ruvic/Illustration/File Photo</td></tr>\r\n</table>Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogeco…",
                    "url": "https://techncruncher.blogspot.com/2022/01/musk-says-tesla-to-accept-dogecoin-for.html",
                    "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEiAHi2o-pAdNQNqbU6eVnDtHVY2HvIYdHuBHFQXpjzRRvUkNNNjSD8rJIH_TmYn8--wpME7gw7bhfJ6KoISJSNOJQLfYqr-HZT02wXpVXeg0Ar9yGLKD_ZNbToLt0-vBjvldJdotQOlbaWzlZonZIIINp6eG1v0xyMZdNVTVX4hq23Qkx6XGF9NIurkfw=w1200-h630-p-k-no-nu",
                    "publishedAt": "2022-01-14T14:14:00Z",
                    "content": "Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogecoin as payment for its products such as the \"Giga Texas\" belt buckle and mini  electric vehicle models, CEO Elon Musk said on Friday … [+1482 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Blogspot.com"
                    },
                    "author": "noreply@blogger.com (Unknown)",
                    "title": "Russian c.bank proposes banning cryptocurrencies, crypto mining",
                    "description": "<table><tr><td></td></tr><tr><td>Representations of virtual cryptocurrencies are seen in this illustration taken November 28, 2021. REUTERS/Dado Ruvic/Illustration/File Photo</td></tr>\r\n</table>Russia's central bank on Thursday proposed banning the use and mi…",
                    "url": "https://techncruncher.blogspot.com/2022/01/russian-cbank-proposes-banning.html",
                    "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEh8Ab2fniYX1LMiTt-SPNcljyB-NxzIH1dlQTxEvcspfJZA-dwAY1rGM3kB4TV9RsJFUZg-x_0n7tfSr8j-WBwrBpsKE543Zdyd75jKXHVcGwSjeuqaueLN4BpkzkxjM3ik7yYdc9yCr_qRRy32QlvV9DtvFZefdtdqiYPTvpZHgVUVFKfbADao2NjVIQ=w1200-h630-p-k-no-nu",
                    "publishedAt": "2022-01-20T12:56:00Z",
                    "content": "Russia's central bank on Thursday proposed banning the use and mining of cryptocurrencies on Russian territory, citing threats to financial stability, citizens' wellbeing and its monetary policy sove… [+2149 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Blogspot.com"
                    },
                    "author": "noreply@blogger.com (Unknown)",
                    "title": "Crypto CEO becomes one of the world's richest billionaires",
                    "description": "<table><tr><td></td></tr><tr><td>\"Zhao Changpeng has become the world's biggest cryptocurrency billionaire(Image: Bloomberg via Getty Images)</td></tr>\r\n</table>A cryptocurrency CEO has become one of the richest people on the planet.Changpeng \"CZ\" Zhao, who m…",
                    "url": "https://techncruncher.blogspot.com/2022/01/crypto-ceo-becomes-one-of-worlds.html",
                    "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEj978sCv3gLJg0vBKUzMeJLfis0RTv9EXx5SBp1dBHmTSW5zI946qp2JBTkwo-IFL5ZNv2OQRdVr1Y7qR__vDrWKrS1TUMgRVxmAoHhDXfO4R5FII7PwGwWUvzIjR9wlfuZQIKBl-lprQH3Qmpw1DZQSJED9v3GGMsDJcaxBCkpPDtCBuKi15my8tFvLA=w1200-h630-p-k-no-nu",
                    "publishedAt": "2022-01-11T12:29:00Z",
                    "content": "A cryptocurrency CEO has become one of the richest people on the planet.Changpeng \"CZ\" Zhao, who manages the Binance cryptocurrency exchange, has joined the ranks of the world's top billionaires, wit… [+3566 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "U.S. SEC rejects Valkyrie, Kryptoin bitcoin trusts - Reuters",
                    "description": "The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green light the effort after approving futures-backed bitcoin funds in October.",
                    "url": "https://www.reuters.com/markets/funds/us-sec-rejects-valkyrie-kryptoin-bitcoin-trusts-2021-12-23/",
                    "urlToImage": "https://www.reuters.com/resizer/VcQMWevXkM8HjQhqCD_PvcxdZa4=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RDU5LE4KKJP7LDUVELT6RRXH2Y.jpg",
                    "publishedAt": "2021-12-23T20:25:00Z",
                    "content": "Dec 23 (Reuters) - The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green … [+1769 chars]"
                },
                {
                    "source": {
                        "id": "business-insider",
                        "name": "Business Insider"
                    },
                    "author": "hmalik@insider.com (Hamza Fareed Malik)",
                    "title": "Jack Dorsey says Block is building a bitcoin mining system so that anyone can easily buy a rig",
                    "description": "Block is officially building a bitcoin mining system to make mining bitcoin \"more distributed and efficient.\"",
                    "url": "https://markets.businessinsider.com/news/currencies/block-bitcoin-mining-jack-dorsey-rig-crypto-open-anyone-buy-2022-1",
                    "urlToImage": "https://images2.markets.businessinsider.com/61e16983c5e27c00185b8d80?format=jpeg",
                    "publishedAt": "2022-01-14T12:34:09Z",
                    "content": "Jack Dorsey onstage at a bitcoin convention in June.Joe Raedle/Getty Images\r\nBlock is going ahead with building a bitcoin mining system that will be open to individuals and businesses worldwide, its … [+2459 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Shoshana Wodinsky",
                    "title": "Crypto Dev Says He’s Spending $500,000 on a Statue of Elon Musk’s Head on a Goat’s Body",
                    "description": "Between Bitcoin-themed superspreader events and cringey branded NFT’s, those within the crypto community have set a high bar for devising the worst ways to hawk their currency of choice. But this week, the creators of an Elon Musk-themed cryptocurrency dubbed…",
                    "url": "https://gizmodo.com/crypto-dev-says-he-s-spending-500-000-on-a-statue-of-e-1848321336",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/747f9809de270cde233f59fd229fd8c4.png",
                    "publishedAt": "2022-01-07T19:30:00Z",
                    "content": "Between Bitcoin-themed superspreader events and cringey branded NFTs, those within the crypto community have set a high bar for devising the worst ways to hawk their currency of choice. But this week… [+3034 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Igor Bonifacic",
                    "title": "Robinhood opens cryptocurrency wallet to beta testers",
                    "description": "Back in September\r\n, Robinhood announced plans to test a cryptocurrency wallet within its app. At the time, the company said it would open the beta to a small number of people before expanding availability ahead of a full-scale release. If you joined the wait…",
                    "url": "https://www.engadget.com/robinhood-cryptocurrency-wallet-beta-225721593.html",
                    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/5035fef0-1bd6-11ec-b7e5-a610838e0b98",
                    "publishedAt": "2022-01-21T22:57:21Z",
                    "content": "Back in September\r\n, Robinhood announced plans to test a cryptocurrency wallet within its app. At the time, the company said it would open the beta to a small number of people before expanding availa… [+1069 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Mack DeGeurin",
                    "title": "EU Regulator Wants to Ban Proof of Work Crypto Mining to Avoid Climate Disaster",
                    "description": "One of the European Union’s top regulators has a new proposal for reducing cryptocurrency’s carbon footprint: ban proof of work mining. The proposed prohibition, suggested by European Securities and Markets Authority Vice Chair Erik Thedéen during a Financial…",
                    "url": "https://gizmodo.com/european-union-regulator-proof-of-work-bitcoin-ethereum-1848384679",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e347ce1038984213dcf95a7a9142c961.jpg",
                    "publishedAt": "2022-01-19T17:55:00Z",
                    "content": "One of the European Unions top regulators has a new proposal for reducing cryptocurrencys carbon footprint: ban proof of work mining. The proposed prohibition, suggested by European Securities and Ma… [+3602 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gizmodo.com"
                    },
                    "author": "Matt Novak",
                    "title": "Crypto.com Finally Acknowledges $34 Million Stolen by Hackers",
                    "description": "Trading platform Crypto.com lost about $34 million worth of cryptocurrency in a hack on Monday, according to a new blog post by the company published overnight. The company had previously declined to say much about the hack, which forced users to stop withdra…",
                    "url": "https://gizmodo.com/crypto-com-finally-acknowledges-34-million-stolen-by-h-1848389819",
                    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3c7e7ff30b167a88b03f3ef59220cd22.jpg",
                    "publishedAt": "2022-01-20T12:00:00Z",
                    "content": "Trading platform Crypto.com lost about $34 million worth of cryptocurrency in a hack on Monday, according to a new blog post by the company published overnight. The company had previously declined to… [+2933 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Bitcoin falls 6.1 percent to $47607 - Reuters",
                    "description": "Bitcoin dropped 6.13% to $47,606.92 on Tuesday, losing $3,111.19 from its previous close.",
                    "url": "https://www.reuters.com/business/bitcoin-falls-61-percent-47607-2021-12-28/",
                    "urlToImage": "https://www.reuters.com/resizer/w4pjI5JlvB_pshqV4hN-uthyRYY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3W3WSPQ3C5KVRAWJI2YIQPE72Y.jpg",
                    "publishedAt": "2021-12-28T22:10:00Z",
                    "content": "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken October 19, 2021. REUTERS/Edgar SuDec 28 (Reuters) - Bitcoin dropped 6.13% to $47,606.92 on Tuesday, … [+473 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Bitcoin slumps to lowest since September - Reuters",
                    "description": "Bitcoin  on Friday slumped as much as 5% to its lowest since late September, tumbling under $41,000 amid a broader sell-off for cryptocurrencies.",
                    "url": "https://www.reuters.com/markets/stocks/bitcoin-slumps-lowest-since-september-2022-01-07/",
                    "urlToImage": "https://www.reuters.com/resizer/bnf5uX3QzriNXncsDw8oUDcwuoc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YAQWJZANPFO3FEZURXTUSOSENA.jpg",
                    "publishedAt": "2022-01-07T08:03:00Z",
                    "content": "LONDON, Jan 7 (Reuters) - Bitcoin on Friday slumped as much as 5% to its lowest since late September, tumbling under $41,000 amid a broader sell-off for cryptocurrencies.\r\nBitcoin was last down 3.7% … [+1419 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Bitcoin falls 9.3% to $36955 - Reuters",
                    "description": "Bitcoin dropped 9.28% to $36,955.03 at 22:02 GMT on Friday, losing $3,781.02 from its previous close.",
                    "url": "https://www.reuters.com/technology/bitcoin-falls-93-36955-2022-01-21/",
                    "urlToImage": "https://www.reuters.com/resizer/dAgPtOWZKLDrKS2Jwdrqn294sU0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HJLMCJEIPNKXBEOQ6T3SCMFCEM.jpg",
                    "publishedAt": "2022-01-21T23:30:00Z",
                    "content": "A representation of virtual currency Bitcoin is seen in front of a stock graph in this illustration taken January 8, 2021. REUTERS/Dado Ruvic/File PhotoJan 21 (Reuters) - Bitcoin dropped 9.28% to $36… [+508 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BNNBloomberg.ca"
                    },
                    "author": "Bloomberg News",
                    "title": "Bitcoin death cross is staring down bulls after a painful retreat - BNN",
                    "description": "<ol><li>Bitcoin death cross is staring down bulls after a painful retreat  BNN\r\n</li><li>Crypto investors buy the dip as Bitcoin falls below $40000  Kitco NEWS\r\n</li><li>Where Is Bitcoin Heading Next After Falling Below $40,000 Today?  Forbes\r\n</li><li>Bitcoi…",
                    "url": "http://www.bnnbloomberg.ca/bitcoin-death-cross-is-staring-down-bulls-after-a-painful-retreat-1.1705998",
                    "urlToImage": "http://www.bnnbloomberg.ca/polopoly_fs/1.1706002!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/bitcoin.jpg",
                    "publishedAt": "2022-01-11T14:54:48Z",
                    "content": "After one of roughest patches ever for Bitcoin enthusiasts, holders of the largest digital currency are facing an ominous technical price pattern with a name that suggests more pain ahead. \r\nKnown as… [+3529 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "BUZZ Crypto stocks slip as bitcoin briefly slides below $40000 - Reuters",
                    "description": "** Shares of cryptocurrency and blockchain-related firms fall after bitcoin  briefly slides below $40,000 to a 5-month low",
                    "url": "https://www.reuters.com/markets/asia/buzz-crypto-stocks-slip-bitcoin-briefly-slides-below-40000-2022-01-10/",
                    "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=66",
                    "publishedAt": "2022-01-10T15:31:00Z",
                    "content": "** Shares of cryptocurrency and blockchain-related firms fall after bitcoin briefly slides below $40,000 to a 5-month low\r\n** The world's largest digital asset was last down 2.6% at $40,800 after fal… [+1132 chars]"
                }
                ,{
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Entertainment Bureau",
                    "title": "Palak Tiwari Hides Face As She Clicked With Ibrahim Ali Khan; Netizens Spot 'Hickey' on Latter's Neck - News18",
                    "description": "What's brewing between Saif Ali Khan's son Ibrahim Ali Khan and Shweta Tiwari's daughter Palak Tiwari?",
                    "url": "https://www.news18.com/news/movies/palak-tiwari-hides-face-as-she-gets-clicked-with-ibrahim-ali-khan-netizens-spot-hickey-on-latters-neck-4685201.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/01/palak-tiwari-and-ibrahim-ali-khan-164282267216x9.jpg",
                    "publishedAt": "2022-01-22T03:52:00Z",
                    "content": "Saif Ali Khan’s son, Ibrahim Ali Khan, and Shweta Tiwari’s daughter, Palak Tiwari, sent the internet into a tizzy after they were spotted together outside a restaurant in Mumbai on Friday evening. Th… [+1302 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "To New Parents Priyanka Chopra And Nick Jonas, With Love From Katrina Kaif And Others - NDTV Movies",
                    "description": "Congratulations, Priyanka Chopra and Nick Jonas!",
                    "url": "https://www.ndtv.com/entertainment/to-new-parents-priyanka-chopra-and-nick-jonas-with-love-from-katrina-kaif-and-others-2723005",
                    "urlToImage": "https://c.ndtvimg.com/2022-01/9ejnh4mo_priyanka_625x300_22_January_22.jpg",
                    "publishedAt": "2022-01-22T03:38:16Z",
                    "content": "Nick Jonas with Priyanka Chopra. (courtesy: priyankachopra)\r\nHighlights\r\n<ul><li>The couple welcomed a baby via surrogacy\r\n</li><li> The couple got married in 2018\r\n</li><li>Priyanka was last seen in… [+1874 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": "Asian News International",
                    "title": "\"Not True\": Sourav Ganguly On Reports Of Him Wanting To Send Showcause Notice To Virat Kohli - NDTVSports.com",
                    "description": "Sourav Ganguly has termed reports that claimed he wanted to send a show-cause notice to Virat Kohli as \"not true\".",
                    "url": "https://sports.ndtv.com/cricket/not-true-sourav-ganguly-on-reports-of-him-wanting-to-send-show-cause-notice-to-virat-kohli-2722993",
                    "urlToImage": "https://c.ndtvimg.com/2021-12/g6ro6ea8_sourav-ganguly-virat-kohli-afp_625x300_13_December_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
                    "publishedAt": "2022-01-22T03:29:29Z",
                    "content": "A day after reports emerged that Sourav Ganguly wanted to send a show-cause notice to Virat Kohli ahead of the South Africa series, the Board of Control for Cricket in India (BCCI) president has term… [+1628 chars]"
                },
                {
                    "source": {
                        "id": "xinhua-net",
                        "name": "Xinhua Net"
                    },
                    "author": null,
                    "title": "U.S. vaccination lags among children amid COVID-19 surge: The Guardian - Xinhua",
                    "description": "",
                    "url": "http://www.xinhuanet.com/english/northamerica/20220122/57b58cb31e9c40b585f3728f699ef673/c.html",
                    "urlToImage": null,
                    "publishedAt": "2022-01-22T02:41:45Z",
                    "content": "LONDON, Jan. 21 (Xinhua) -- Though the United States saw a record increase in COVID-19 infections among children early this month, their rate of vaccination lagged, The Guardian has said.\r\n Nearly a … [+656 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Light Rain Hits Delhi, Air Quality Remains 'Very Poor' - NDTV",
                    "description": "As cold wave continues in several parts of the country, Delhi this morning witnessed light rains and shallow fog that brought the minimum temperature down to 10.0 degrees Celsius.",
                    "url": "https://www.ndtv.com/delhi-news/light-rains-shallow-fog-in-delhi-and-nearby-areas-amid-cold-wave-2722973",
                    "urlToImage": "https://c.ndtvimg.com/2022-01/6gljkp94_delhi-rain-today_625x300_05_January_22.jpg",
                    "publishedAt": "2022-01-22T02:34:40Z",
                    "content": "The weather department has also forecast rainfall for the next two days in Delhi. (File)\r\nNew Delhi: As cold wave continues in several parts of the country, Delhi this morning witnessed light rains a… [+2042 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "hindustantimes.com",
                    "title": "'We are trying to get better': KL Rahul pinpoints 'mistakes' behind India's ODI series defeat against South Africa - Hindustan Times",
                    "description": "Rahul also identified positives as he heaped praise on the batting display from Shikhar Dhawan & Virat Kohli in the series opener. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/we-are-trying-to-get-better-kl-rahul-pinpoints-mistakes-behind-india-s-odi-series-defeat-against-south-africa-101642787134685.html",
                    "urlToImage": "https://images.hindustantimes.com/img/2022/01/21/1600x900/ANI-20220121359-0_1642787986420_1642788016505.jpg",
                    "publishedAt": "2022-01-22T02:23:10Z",
                    "content": "Skipper KL Rahul praised South Africa for putting up an impressive display at home but also pinpointed India's flaws after his team suffered a seven-wicket loss in the second game and lost the three-… [+2469 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "K Shriniwas Rao",
                    "title": "IPL in either India or South Africa and media rights tender to be discussed at BCCI and franchise owners - Times of India",
                    "description": "Cricket News: The office-bearers of the BCCI and the chairman of the Indian Premier League (IPL) governing council will get into a virtual meeting with franchise ow",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-in-india-or-south-africa-media-rights-tender-on-mind-as-bcci-and-franchise-owners-meet/articleshow/89051271.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-89051264,width-1070,height-580,imgsize-47840,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2022-01-22T02:17:00Z",
                    "content": "IPL in either India or South Africa and media rights tender to be discussed at BCCI and franchise owners meet"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Apurva Vishwanath",
                    "title": "Two years on, property damage in anti-CAA protests in UP: Officials play judge and jury, due process derailed - The Indian Express",
                    "description": "From no evidence to no hearing: The Indian Express investigation found telling patterns in recovery orders issued by the local administration.",
                    "url": "https://indianexpress.com/article/express-exclusive/property-damage-anti-caa-protests-up-7735787/",
                    "urlToImage": "https://images.indianexpress.com/2022/01/UP-anti-CAA-protests.jpg",
                    "publishedAt": "2022-01-22T02:04:46Z",
                    "content": "Its process under challenge in the courts, an investigation by The Indian Express reveals how the state administration cited a High Court ruling that went against an earlier Supreme Court verdict and… [+6616 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "hindustantimes.com",
                    "title": "UP polls: Amit Shah to hold door-to-door campaign in Kairana today - Hindustan Times",
                    "description": "Uttar Pradesh elections 2022: Yogi Adityanath and BJP chief JP Nadda will also be on the campaign trail in western Uttar Pradesh, along with Amit Shah. The region is crucial for the BJP, where it had won 83 of the 108 seats on 2017 assembly polls.",
                    "url": "https://www.hindustantimes.com/elections/uttar-pradesh-assembly-election/up-polls-amit-shah-to-hold-door-to-door-campaign-in-kairana-today-101642816022686.html",
                    "urlToImage": "https://images.hindustantimes.com/img/2022/01/22/1600x900/Amit_Shah_yogi_adityanath_and_jp_nadda_1642816154454_1642816154617.jpg",
                    "publishedAt": "2022-01-22T01:56:56Z",
                    "content": "To give a boost to Bharatiya Janata Party's (BJP's) campaign in poll-bound Uttar Pradesh, Union home minister Amit Shah will take part in meetings, dialogues and contact programs on Saturday, along w… [+2459 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricbuzz"
                    },
                    "author": null,
                    "title": "KL Rahul signed by Lucknow franchise for INR 17 crores | Cricbuzz.com - Cricbuzz - Cricbuzz",
                    "description": "Rahul will captain the team, that has also signed Marcus Stoinis (INR 9.2 crores) and Ravi Bishnoi (INR 4 crores)",
                    "url": "https://www.cricbuzz.com/cricket-news/120795/kl-rahul-signed-by-lucknow-franchise-for-inr-17-crores",
                    "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c225272/kl-rahul-and-ravi-bishnoi-tea.jpg",
                    "publishedAt": "2022-01-22T01:41:15Z",
                    "content": "KL Rahul and Ravi Bishnoi, teammates at Punjab Kings, will be part of the Lucknow franchise. © BCCI/IPL\r\nThe new Lucknow franchise in the IPL has signed on KL Rahul for a fee of INR 17 crores, making… [+1462 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "hindustantimes.com",
                    "title": "PM Modi to interact with DMs of various districts today - Hindustan Times",
                    "description": "The interaction is called to review the performance and ascertain the challenges that are being faced by the local officials, according to the release. | Latest News India",
                    "url": "https://www.hindustantimes.com/india-news/pm-modi-to-interact-with-dms-of-various-districts-today-101642814953310.html",
                    "urlToImage": "https://images.hindustantimes.com/img/2022/01/22/1600x900/0618bb02-7a25-11ec-92d4-e30affc03428_1642706194140_1642815391495.jpg",
                    "publishedAt": "2022-01-22T01:37:02Z",
                    "content": "Prime Minister Narendra Modi will interact with various district magistrates on Saturday to take their direct feedback on the progress and status of implementation of various government schemes and p… [+1780 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Manoj CG",
                    "title": "Amar Jawan Jyoti, War Memorial flame are one; Netaji at India Gate - The Indian Express",
                    "description": "🔴 The move triggered a political firestorm with the Opposition accusing the government of attempting to rewrite history, a charge that members of the establishment and the ruling party rejected.",
                    "url": "https://indianexpress.com/article/india/amar-jawan-jyoti-war-memorial-flame-are-one-netaji-at-india-gate-7736124/",
                    "urlToImage": "https://images.indianexpress.com/2022/01/P1-amarjyotilate-5col.jpg",
                    "publishedAt": "2022-01-22T01:31:18Z",
                    "content": "The move triggered a political firestorm with the Opposition accusing the government of attempting to rewrite history, a charge that members of the establishment and the ruling party rejected.\r\nAmid … [+5004 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": null,
                    "title": "Thich Nhat Hanh, influential Zen Buddhist monk, dies at 95 - India Today",
                    "description": "Vietnamese Zen Master Thich Nhat Hanh—a world-renowned spiritual leader, author, poet, and peace activist—died on Saturday. He was 95.",
                    "url": "https://www.indiatoday.in/world/story/thich-nhat-hanh-zen-buddhist-monk-dies-at-95-1903057-2022-01-22",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/oj971s58_thich-nhat-hanh-reute-647x363.jpeg?dQaRc_.D1LKydMPeHob3nrgndgEBSK1a",
                    "publishedAt": "2022-01-22T01:27:53Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "CarToq.com"
                    },
                    "author": "Ajeesh Kuttan",
                    "title": "Tata Tiago iCNG fuel economy test in real world driving conditions [Video] - CarToq.com",
                    "description": "Tata launched their first ever CNG vehicle Tata Tiago and Tigor in the market recently. The car has already started reaching the dealerships and the deliveries have already started and several walkaround videos of the same are available online. Price for Tata…",
                    "url": "https://www.cartoq.com/tata-tiago-icng-fuel-economy-test-in-real-world-driving-conditions-video/",
                    "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/01/Tiago-CNG-mileage-featured.jpg",
                    "publishedAt": "2022-01-22T01:17:40Z",
                    "content": "Tata launched their first ever CNG vehicle Tata Tiago and Tigor in the market recently. The car has already started reaching the dealerships and the deliveries have already started and several walkar… [+2723 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Digital Trends"
                    },
                    "author": "Rahul Srinivas",
                    "title": "Leaked Realme 9 Pro specs show a potent Redmi Note 10 rival - Digital Trends",
                    "description": "Leaving nothing to chance, Realme has prepped a potent Redmi Note 10 competitor in 2022 with the Realme 9 Pro.",
                    "url": "https://www.digitaltrends.com/mobile/realme-9-pro-sseries-leaked/",
                    "urlToImage": "https://icdn.digitaltrends.com/image/digitaltrends/realme-9-pro-header.jpg",
                    "publishedAt": "2022-01-22T00:17:13Z",
                    "content": "While most smartphone enthusiasts in the West seem to focus on brand rivalries between giants like Samsung and Apple, unbeknown to them, Chinese smartphone brands Redmi and Realme have been fighting … [+3877 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "GSMArena.com"
                    },
                    "author": "Vlad",
                    "title": "OnePlus 10R leaks with Dimensity 9000 at the helm, launching in Q2 - GSMArena.com news - GSMArena.com",
                    "description": "Apparently there will also be a vanilla OnePlus 10 for global markets.",
                    "url": "https://www.gsmarena.com/oneplus_10r_leaks_with_dimensity_9000_at_the_helm_launching_in_q2-news-52806.php",
                    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/01/oneplus-10r-leak/-952x498w6/gsmarena_000.jpg",
                    "publishedAt": "2022-01-21T23:05:46Z",
                    "content": "An interesting new leak today gives us a treasure trove of information regarding OnePlus' plans and overall strategy. To recap, the company's new market segmentation works like this: the numbered ser… [+1564 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Krishn Kaushik",
                    "title": "I&B orders blocking of 35 YouTube channels for anti-India content - The Indian Express",
                    "description": "These channels, with more than 100 crore views, were all based in Pakistan, ministry officials said. They were involved in spreading “anti-India fake news in a coordinated manner over digital media”, they said.",
                    "url": "https://indianexpress.com/article/india/ib-ministry-block-pakistan-youtube-facebook-twitter-anti-india-7735512/",
                    "urlToImage": "https://images.indianexpress.com/2016/06/facebook-twitter-youtube-12001.jpg",
                    "publishedAt": "2022-01-21T22:21:54Z",
                    "content": "A month after it invoked new powers under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 to get 20 YouTube channels banned, the Information and Broadca… [+3907 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Samir Jain",
                    "title": "Horoscope Today, 22 January 2022: Check astrological prediction for Aries, Taurus, Gemini, Cancer and oth - Times of India",
                    "description": "Horoscope(Old) News: Read your horoscope predictions to know what the stars have in store for you today: Aries Today, you may be busy with kids, you may plan to invest in .",
                    "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-22-january-2022-check-astrological-prediction-for-aries-taurus-gemini-cancer-and-other-signs/articleshow/88946871.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-88946847,width-1070,height-580,imgsize-244410,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2022-01-21T21:30:00Z",
                    "content": null
                }
            ]
        }
        // console.log(this.state.article[0].title);
        
    }
  render() {
    return(
        <>  
        <div className='container my-3'>
            <h3>News - Crypto, Politics, Sports etc.</h3> <br />

            <div className="row">
            {this.state.articles.map((article)=>{
               return <div className="col-md-4" key={article.url}>
                <NewsItems title = {article.title} description = {article.description} url ={article.url} imgUrl = {article.urlToImage} />
                </div>

            })}
            </div>
        </div>
        </>
    );
        
    
  }
}

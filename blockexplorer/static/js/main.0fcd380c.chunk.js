(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(308)},127:function(e,t,a){},185:function(e,t){},187:function(e,t){},221:function(e,t){},222:function(e,t){},298:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){},304:function(e,t,a){},306:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),o=(a(127),a(7)),l=a.n(o),i=a(14),u=a(17),m=a(18),d=a(20),h=a(19),p=a(21),f=a(4),b=a(49),g=a.n(b),k=function(){return new Promise(function(e,t){window.addEventListener("load",Object(i.a)(l.a.mark(function a(){var n,r,c,s;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.ethereum){a.next=13;break}return n=new g.a(window.ethereum),a.prev=2,a.next=5,window.ethereum.enable();case 5:e(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),t(a.t0);case 11:a.next=14;break;case 13:window.web3?(r=window.web3,console.log("Injected web3 detected."),e(r)):(c=new g.a.providers.HttpProvider("https://mainnet.infura.io/v3/813f7758462347cbb1d64391851852d1"),s=new g.a(c),console.log("No web3 instance injected, using infura web3 (mainnet)."),e(s));case 14:case"end":return a.stop()}},a,this,[[2,8]])})))})},E=a(120),v=a.n(E),w=(a(298),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={badgeStyles:{greyBackground:"#dceaef",greyTextColor:"#6d8088",greenBackground:"#21d48f",greenTextColor:"white",blueEagleBackground:"#00cbe6"}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.badgeStyles;return r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{className:"headerGroupItem"},r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement(f.j,{size:"xlarge"},"Last block"),r.a.createElement("div",{className:"currentBlockNumberContainer"},r.a.createElement(f.b,{shape:"compact",background:"transparent",foreground:"white"},r.a.createElement("div",{className:"currentBlockNumber"},this.props.lastBlockNumber)))),r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement(f.j,{size:"small"},"Time since last block"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},r.a.createElement("div",{className:"timeAgo"},r.a.createElement(v.a,{durationFromNow:!0,interval:1e3,ago:!0},new Date(1e3*this.props.lastBlockTime))))))),r.a.createElement("div",{className:"headerGroupItem"},r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Network ID"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor,style:{paddingRight:"5px",paddingLeft:"5px"}},this.props.networkId))),r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Gas used"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},this.props.gasUsedOnBlock))),r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Difficulty"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},this.props.difficulty)))),r.a.createElement("div",{className:"headerGroupItem"},r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Block hash"),r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},this.props.lastBlockHash)),r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Block size"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},this.props.lastBlockSize))),r.a.createElement("div",{className:"headerInnerItem"},r.a.createElement("span",null,"Timestamp"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:e.greyBackground,foreground:e.greyTextColor},this.props.lastBlockTime)))))}}]),t}(n.Component)),B=a(30),y=(a(300),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).transfromWeiToEther=function(e){return a.props.web3.utils.fromWei(String(e),"ether")},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.badgeStyles,a=e.transactioninfo;return r.a.createElement("div",{className:"TransactionInfoContainer"},r.a.createElement("div",{className:"transactionInnerContainer"},r.a.createElement("div",{className:"tableCellContent"},r.a.createElement("span",null,"Ether"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:t.greyBackground,foreground:t.greyTextColor},r.a.createElement("div",{className:"transactionText"},this.transfromWeiToEther(a.value))))),r.a.createElement("div",{className:"tableCellContent"},r.a.createElement("span",null,"Gas price (Gwei)"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:t.greyBackground,foreground:t.greyTextColor},r.a.createElement("div",{className:"transactionText"},Number(a.gasPrice)/1e9))))),r.a.createElement("div",{className:"transactionInnerContainer"},r.a.createElement("div",{className:"tableCellContent"},r.a.createElement("span",null,"From"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:t.greyBackground,foreground:t.greyTextColor},r.a.createElement("div",{className:"transactionText"},a.from)))),r.a.createElement("div",{className:"tableCellContent"},r.a.createElement("span",null,"To"),r.a.createElement("span",null,r.a.createElement(f.b,{shape:"compact",background:t.greyBackground,foreground:t.greyTextColor},r.a.createElement("div",{className:"transactionText"},a.to))))))}}]),t}(n.Component)),T=(a(302),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).updateTransactionInfo=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setEtherscanTransactionHash(t.hash),a.setState({transactioninfo:t});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.returnTransactionInfoFromEthereum=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.props.web3.eth.getTransaction(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=Object(i.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:Promise.all(a.props.block.blockTransactions.map(function(e){return a.returnTransactionInfoFromEthereum(e)})).then(function(e){var t=e.filter(function(e){return e.value>0});if(console.log(t),t.length>0)a.setState({onlyPaidTransactions:t},function(){return a.updateTransactionInfo(a.state.onlyPaidTransactions[0])});else{var n=[{gasPrice:0,hash:"No paid transactions has been sent on this block",from:"do not apply",to:"do not apply",value:0}];a.setState({onlyPaidTransactions:n},function(){return a.updateTransactionInfo(n[0])})}});case 1:case"end":return e.stop()}},e,this)})),a.state={activeItem:0,transactioninfo:{value:0,from:"0x",to:"0x"},badgeStyles:{greyBackground:"#dceaef",greyTextColor:"#6d8088",greenBackground:"#21d48f",greenTextColor:"white",blueEagleBackground:"#00cbe6"},onlyPaidTransactions:[],etherscanUrl:"https://etherscan.io/tx/",transactionHashEtherscan:""},a.handleChange=a.handleChange.bind(Object(B.a)(Object(B.a)(a))),a.updateTransactionInfo=a.updateTransactionInfo.bind(Object(B.a)(Object(B.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({activeItem:e},function(){return t.updateTransactionInfo(t.state.onlyPaidTransactions[t.state.activeItem])})}},{key:"setEtherscanTransactionHash",value:function(e){this.setState({transactionHashEtherscan:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"BlockListItem"},r.a.createElement(f.f,{header:r.a.createElement(f.i,null,r.a.createElement(f.h,{title:"Block Number ".concat(this.props.block.number)}))},r.a.createElement(f.i,null,r.a.createElement(f.g,null,r.a.createElement("div",{className:"tableCellContent"},r.a.createElement("span",{style:{marginBottom:"5px"}},"Block transactions"),r.a.createElement(f.d,{items:this.state.onlyPaidTransactions.map(function(e){return e.hash}),active:this.state.activeItem,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement(y,{transactionObjectSelected:this.state.onlyPaidTransactions[this.state.activeItem],web3:this.props.web3,transactioninfo:this.state.transactioninfo,badgeStyles:this.state.badgeStyles}))),r.a.createElement("div",{className:"tableCellContent rightButton"},r.a.createElement(f.c.Anchor,{mode:"outline",wide:!0,href:this.state.etherscanUrl+this.state.transactionHashEtherscan,target:"_blank"},r.a.createElement("div",{className:"etherscanButton"},r.a.createElement("span",null,r.a.createElement(f.e,null)),r.a.createElement(f.j,{size:"normal"},"see"),r.a.createElement(f.j,{size:"normal",style:{marginBottom:"5px"}},"transaction"),r.a.createElement(f.j,{size:"xsmall"},"(etherscan.io)"))))))))}}]),t}(n.Component)),x=(a(304),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"blockList"},this.props.lastTenBlocks.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(T,{block:t,index:a,web3:e.props.web3}))}))}}]),t}(n.Component)),I=(a(306),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).componentDidMount=Object(i.a)(l.a.mark(function t(){var a,n,r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k();case 3:return a=t.sent,t.next=6,a.eth.getAccounts();case 6:return n=t.sent,t.next=9,a.eth.net.getId();case 9:return r=t.sent,t.next=12,e.setState({web3:a,accounts:n,networkId:r},e.getLastBlockInfo);case 12:setInterval(e.getLastBlockInfo,1e4),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(t.t0);case 19:case"end":return t.stop()}},t,this,[[0,15]])})),e.getLastBlockInfo=Object(i.a)(l.a.mark(function t(){var a,n,r,c,s,o,i,u,m;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.web3,t.next=3,a.eth.getBlockNumber();case 3:return n=t.sent,t.next=6,a.eth.getBlock(n);case 6:r=t.sent,c=r.hash,s=r.size,o=r.gasUsed,i=r.timestamp,u=r.transactions,m=r.difficulty,e.createLastTenBlocks(n,a),e.setState({lastBlockNumber:n,lastBlockHash:c,lastBlockSize:s,gasUsedOnBlock:o,lastBlockTime:i,lastBlockTransactions:u,difficulty:m});case 15:case"end":return t.stop()}},t,this)})),e.createLastTenBlocks=function(){var t=Object(i.a)(l.a.mark(function t(a,n){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=[1,2,3,4,5,6,7,8,9,10],Promise.all(r.map(function(){var e=Object(i.a)(l.a.mark(function e(t,r){var c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.eth.getBlock(a-r);case 2:return c=e.sent,e.abrupt("return",{number:a-r,blockHash:c.hash,blockSize:c.size,gasUsedOnBlock:c.gasUsed,blockTime:c.timestamp,blockTransactions:c.transactions,blockDifficulty:c.difficulty});case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}())).then(function(t){e.setState({lastTenBlocks:t})});case 2:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),e.state={web3:null,accounts:null,networkId:null,lastBlockNumber:null,lastBlockHash:null,lastBlockSize:null,gasUsedOnBlock:null,lastBlockTime:null,lastBlockTransactions:null,difficulty:null,lastTenBlocks:[]},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{publicUrl:"/aragon-ui-assets/"},r.a.createElement("div",{className:"App"},r.a.createElement(f.j,{size:"xxlarge",style:{margin:"20px"}},r.a.createElement("i",{class:"fab fa-ethereum"})," Ethereum Block Explorer"),r.a.createElement("div",{className:"aragonCard Header"},r.a.createElement(w,{networkId:this.state.networkId,lastBlockNumber:this.state.lastBlockNumber,lastBlockHash:this.state.lastBlockHash,lastBlockSize:this.state.lastBlockSize,gasUsedOnBlock:this.state.gasUsedOnBlock,lastBlockTime:this.state.lastBlockTime,lastBlockTransactions:this.state.lastBlockTransactions,difficulty:this.state.difficulty})),r.a.createElement(f.j,{size:"xsmall",style:{marginBottom:"30px"}},"Here you can see the last ten blocks on Ethereum and all its transactions within each block. Transactions without ether movement will not be displayed."),r.a.createElement(x,{lastTenBlocks:this.state.lastTenBlocks,web3:this.state.web3}),r.a.createElement(f.j,{size:"xsmall",style:{marginBottom:"50px"}},"Made with \u2661 by ",r.a.createElement("a",{href:"https://albererre.com/",target:"_blank"},"Alber Erre"))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.0fcd380c.chunk.js.map
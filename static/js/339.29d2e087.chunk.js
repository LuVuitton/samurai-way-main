"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[339],{9339:function(s,e,r){r.r(e),r.d(e,{default:function(){return ts}});var a=r(5671),n=r(3144),o=r(136),t=r(5716),i=r(364),l=r(8593),d=r(5455),c=r(2791),u="UsersList_mainWrapper__NbRnK",p="UsersList_itemWrapper__VYVru",h="UsersList_userName__eWm-m",m="UsersList_btnWrapper__2Hhrn",f="UsersList_btn__YeJ-9",v="UsersList_textTotal__TUYU4",x="UsersList_cardWrapper__73Nsg",g="UsersList_bodyWrapper__CRwvb",C="UsersList_statusWrapper__o4RWg",b="UsersList_cardBodyWrapper__yontr",j=r(1523),w=r(3360),N=r(1413),_=r(5987),U=r(654),L=r.n(U),Z=r(162),y=r(6543),T=r(7472),A=r(184),W=["bsPrefix","className","variant","as"],k=c.forwardRef((function(s,e){var r=s.bsPrefix,a=s.className,n=s.variant,o=s.as,t=void 0===o?"img":o,i=(0,_.Z)(s,W),l=(0,Z.vE)(r,"card-img");return(0,A.jsx)(t,(0,N.Z)({ref:e,className:L()(n?"".concat(l,"-").concat(n):l,a)},i))}));k.displayName="CardImg";var I=k,P=c.createContext(null);P.displayName="CardHeaderContext";var R=P,M=["bsPrefix","className","as"],F=c.forwardRef((function(s,e){var r=s.bsPrefix,a=s.className,n=s.as,o=void 0===n?"div":n,t=(0,_.Z)(s,M),i=(0,Z.vE)(r,"card-header"),l=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:i}}),[i]);return(0,A.jsx)(R.Provider,{value:l,children:(0,A.jsx)(o,(0,N.Z)((0,N.Z)({ref:e},t),{},{className:L()(a,i)}))})}));F.displayName="CardHeader";var S=F,H=["bsPrefix","className","bg","text","border","body","children","as"],O=(0,T.Z)("h5"),q=(0,T.Z)("h6"),B=(0,y.Z)("card-body"),E=(0,y.Z)("card-title",{Component:O}),D=(0,y.Z)("card-subtitle",{Component:q}),J=(0,y.Z)("card-link",{Component:"a"}),V=(0,y.Z)("card-text",{Component:"p"}),Y=(0,y.Z)("card-footer"),G=(0,y.Z)("card-img-overlay"),K=c.forwardRef((function(s,e){var r=s.bsPrefix,a=s.className,n=s.bg,o=s.text,t=s.border,i=s.body,l=void 0!==i&&i,d=s.children,c=s.as,u=void 0===c?"div":c,p=(0,_.Z)(s,H),h=(0,Z.vE)(r,"card");return(0,A.jsx)(u,(0,N.Z)((0,N.Z)({ref:e},p),{},{className:L()(a,h,n&&"bg-".concat(n),o&&"text-".concat(o),t&&"border-".concat(t)),children:l?(0,A.jsx)(B,{children:d}):d}))}));K.displayName="Card";var z=Object.assign(K,{Img:I,Title:E,Subtitle:D,Body:B,Link:J,Text:V,Header:S,Footer:Y,ImgOverlay:G}),Q=r(7022),$=r(9743),X=r(2677),ss=function(s){var e=s.photos,r=s.followed,a=s.name,n=s.status,o=s.userID,t=s.usersAreLoading,i=s.onFollowTC,l=s.onUnfollowTC;return(0,A.jsx)("div",{className:p,children:(0,A.jsx)(z,{style:{},children:(0,A.jsx)("div",{className:x,children:(0,A.jsx)(Q.Z,{children:(0,A.jsxs)($.Z,{children:[(0,A.jsx)(X.Z,{children:(0,A.jsxs)("div",{className:g,children:[(0,A.jsx)(j.OL,{to:"/profile/".concat(o),children:(0,A.jsx)(z.Img,{variant:"top",src:null!==e&&void 0!==e&&e.small?e.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbd87QavjazVx5tJ9sLdp_p2oqfGoN1KUjw&usqp=CAU"})}),(0,A.jsx)(z.Body,{children:(0,A.jsxs)("div",{className:b,children:[(0,A.jsx)(z.Title,{children:(0,A.jsx)("span",{className:h,children:a})}),(0,A.jsx)(w.Z,{variant:r?"light":"secondary",disabled:t.some((function(s){return s===o})),onClick:r?function(){l(o)}:function(){i(o)},children:r?"unfollow":"follow"})]})})]})}),(0,A.jsx)(X.Z,{sm:7,className:"text-right ml-auto",children:(0,A.jsx)("div",{className:C,children:(0,A.jsx)(z,{body:!0,children:n||"there should have been a status, but here I am. We wait..."})})})]})})})})})},es=function(s){var e=s.arr.map((function(e,r){return(0,A.jsx)(ss,{userID:e.id,name:e.name,status:e.status,followed:e.followed,photos:e.photos,usersAreLoading:s.usersAreLoading,onFollowTC:s.onFollowTC,onUnfollowTC:s.onUnfollowTC},r)}));return(0,A.jsxs)("div",{className:u,children:[(0,A.jsxs)("div",{className:v,children:["Total registered ",s.totalUsers," users"]}),e,(0,A.jsxs)("div",{className:v,children:[s.arr.length," users have been displayed"]}),(0,A.jsx)("div",{className:m,children:(0,A.jsx)(w.Z,{variant:"light",disabled:s.isLoading,className:f,onClick:s.showMore,children:"SHOW MORE"})})]})},rs=r(3524),as=r(7781),ns=r(4290),os=function(s){(0,o.Z)(r,s);var e=(0,t.Z)(r);function r(){var s;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(s=e.call.apply(e,[this].concat(o))).showMore=function(){s.props.showMoreAC(),s.props.getUsersTC(s.props.pageNumber)},s}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.pageNumber)}},{key:"componentWillUnmount",value:function(){this.props.clearUsersState()}},{key:"render",value:function(){return(0,A.jsx)(A.Fragment,{children:this.props.usersReceivedStatus?(0,A.jsx)(es,{showMore:this.showMore,totalUsers:this.props.totalUsers,arr:this.props.arr,isLoading:this.props.isLoading,setIsLoadingAC:this.props.setIsLoadingAC,usersAreLoading:this.props.usersAreLoading,onFollowTC:this.props.onFollowTC,onUnfollowTC:this.props.onUnfollowTC}):(0,A.jsx)(rs.p,{})})}}]),r}(c.Component),ts=(0,as.qC)((0,i.$j)((function(s){return{pageNumber:s.users.pageNumbers,arr:s.users.users,totalUsers:s.users.totalUsers,usersReceivedStatus:s.users.usersReceivedStatus,isLoading:s.app.isLoading,usersAreLoading:s.users.usersAreLoading}}),(function(s){return{showMoreAC:function(){return s((0,l.AP)())},clearUsersState:function(){return s((0,l.P2)())},setIsLoadingAC:function(e){return s((0,d.jm)(e))},getUsersTC:function(e){return s((0,l.Zw)(e))},onFollowTC:function(e){return s((0,l.v2)(e))},onUnfollowTC:function(e){return s((0,l.C7)(e))}}})),ns.O)(os)}}]);
//# sourceMappingURL=339.29d2e087.chunk.js.map
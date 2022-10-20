define(["exports"],(function(e){"use strict";function t(e,t){let r=e[0],l=e[3],a=e[1],i=e[4],n=e[2],o=e[5],s=t[0],p=t[3],u=t[1],_=t[4],d=t[2],c=t[5];return e[0]=r*s+p*a,e[3]=s*l+p*i,e[1]=r*u+a*_,e[4]=l*u+i*_,e[2]=n+r*d+a*c,e[5]=l*d+o+i*c,e}function r(e,t){let r=t[0],l=t[3],a=t[1],i=t[4],n=t[2],o=t[5],s=e[0],p=e[3],u=e[1],_=e[4],d=e[2],c=e[5];return e[0]=r*s+p*a,e[3]=s*l+p*i,e[1]=r*u+a*_,e[4]=l*u+i*_,e[2]=n+r*d+a*c,e[5]=l*d+o+i*c,e}function l(e){let t=e[0],r=e[3],l=e[1],a=e[4],i=e[2],n=e[5],o=t*a-r*l;if(0!=o)return e[0]=a/o,e[3]=r/-o,e[1]=l/-o,e[4]=t/o,e[2]=(a*i-l*n)/-o,e[5]=(r*i-t*n)/o,e}function a(e=0,t=1,r=0){return t*r+e*(1-r)}function i(e,t){let l=e[0]*e[0]+e[3]*e[3],a=e[1]*e[1]+e[4]*e[4];if(a<1e-6||l<1e-6)return;let i=Math.sqrt(l),n=Math.sqrt(a),o=-1,s=0;if(e[0]/i>o&&(s=-e[3],o=e[0]/i),e[4]/n>o&&(s=e[1],o=e[4]/n),o>=.9999)return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],0;if(o<=-.9999)return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=e[4],t[5]=e[5],Math.PI;Math.abs(o)<1e-4&&(o=0);let p=Math.acos(o),u=Math.sqrt(1-o*o);return s<0&&(p=-p,u=-u),t[0]=e[0],t[1]=e[1],t[3]=e[3],t[4]=e[4],r(t,[o,-u,0,u,o,0]),t[2]=e[2],t[5]=e[5],p}var n;e.FilterType=void 0,(n=e.FilterType||(e.FilterType={}))[n.Blur=1]="Blur",n[n.Outline=2]="Outline",n[n.DropShadow=3]="DropShadow",n[n.MotionBlur=4]="MotionBlur",n[n.Wave=5]="Wave",n[n.Ripple=6]="Ripple",n[n.Alpha=7]="Alpha",n[n.Displace=8]="Displace",n[n.Color=9]="Color",n[n.RadialBlur=10]="RadialBlur",n[n.AngularBlur=11]="AngularBlur",n[n.Rays=12]="Rays",n[n.Layer=13]="Layer",n[n.Bloom=14]="Bloom",e.Appearance=void 0,function(e){function r(e){if(e.sorted_appearances)return e.sorted_appearances;let t=[];for(let l of e.underlays)l=a(e,l),t.push(...r(l));t.push(e);for(let l of[...e.overlays].sort(((t,r)=>{let l=t.layer<0?e.layer:t.layer,a=r.layer<0?e.layer:r.layer;if(l<a)return l-a;let i=t.layer<0?t.layer:-1,n=r.layer<0?r.layer:-1;return i<n?i-n:0})))l=a(e,l),t.push(...r(l));return e.sorted_appearances=t,t}function a(e,r){let l=!1,a=()=>{l||(l=!0,r=Object.assign({},r))};var i;if(r.dir==e.dir||r.dir_override||(a(),r.dir=e.dir),(e.pixel_x||e.pixel_y||e.pixel_z||e.pixel_w&&!(8&r.appearance_flags))&&(a(),r.pixel_x+=e.pixel_x,r.pixel_y+=e.pixel_y,r.pixel_z+=e.pixel_z,r.pixel_w+=e.pixel_w),8&r.appearance_flags||1==(i=e.transform)[0]&&0==i[1]&&0==i[2]&&0==i[3]&&1==i[4]&&0==i[5]||(a(),r.transform=[...r.transform],t(r.transform,e.transform)),4278190080!=(4278190080&e.color_alpha)&&!(4&r.appearance_flags)){a();let t=Math.round((e.color_alpha>>>24)*(r.color_alpha>>>24)/255);r.color_alpha=16777215&r.color_alpha|t<<24}if(16777215!=(16777215&e.color_alpha)&&!(2&r.appearance_flags)){a();let t=4278190080&r.color_alpha;for(let l=0;l<24;l+=8){t|=Math.round((e.color_alpha>>>l&255)*(r.color_alpha>>>l&255)/255)<<l}r.color_alpha=t}return 0==r.blend_mode&&e.blend_mode>0&&(a(),r.blend_mode=e.blend_mode),r}e.resolve_plane=function e(t,r=0){return(r<-1e4||r>1e4)&&(r=e(r)),(t<-1e4||t>1e4)&&(t=r+t+32767<<16>>16),t},e.get_appearance_parts=r,e.overlay_inherit=a,e.get_display_boundary=function(e){var t,l,a,i,n,o;let s=1/0,p=-1/0,u=1/0,_=-1/0;for(let d of r(e)){let e=null!==(a=null===(l=null===(t=d.icon_state_dir)||void 0===t?void 0:t.atlas_node)||void 0===l?void 0:l.width)&&void 0!==a?a:32,r=null!==(o=null===(n=null===(i=d.icon_state_dir)||void 0===i?void 0:i.atlas_node)||void 0===n?void 0:n.height)&&void 0!==o?o:32;for(let t of[-.5,.5])for(let l of[-.5,.5]){let a=d.transform[0]*t*e+d.transform[1]*l*r+d.transform[2]+.5*e+d.pixel_x+d.pixel_w,i=d.transform[3]*t*e+d.transform[4]*l*r+d.transform[5]+.5*r+d.pixel_y+d.pixel_z;s=Math.min(s,a),p=Math.max(p,a),u=Math.min(u,i),_=Math.max(_,i)}}return s>p||u>_?{x:0,y:0,width:0,height:0}:{x:s,y:u,width:p-s,height:_-u}},e.check_appearance_click=function(e,t,a,i=!1){var n;let o=r(e);for(let r=o.length-1;r>=0;r--){let s=i?2:e.mouse_opacity;if(0==s)continue;let p=o[r],u=l([...p.transform]);if(!u)continue;let _=null===(n=p.icon_state_dir)||void 0===n?void 0:n.current_frame;if(!_&&s<=1)continue;let d=32,c=32;_&&(d=_.sprite_data.width,c=_.sprite_data.height);let f=t-d/2-p.pixel_x-p.pixel_w,h=a-c/2-p.pixel_y-p.pixel_z,x=f*u[0]+h*u[1]+u[2]+d/2,m=f*u[3]+h*u[4]+u[5]+c/2;if(!(x<0||m<0||x>=d||m>=c)&&!(s<=1&&_&&0==_.sprite_data.data[4*(Math.floor(c-m)*d+Math.floor(x))+3]))return!0}return!1},e.parse_screen_loc=function e(t,r=15,l=15,a=32,i=a){if(t.includes(" to ")){let[n,o]=t.split(" to ");null!=o||(o=n);let[s,p]=e(n,r,l,a,i)[0],[u,_]=e(o,r,l,a,i)[0],d=[];for(let e=p;e<=_;e++)for(let t=s;t<=u;t++)d.push([t,e]);return d}let[n,o]=t.split(",");null!=o||(o=n),(n.includes("NORTH")||n.includes("SOUTH")||n.includes("TOP")||n.includes("BOTTOM")||o.includes("EAST")||o.includes("WEST")||o.includes("LEFT")||o.includes("RIGHT"))&&([n,o]=[o,n]);let s=0,p=0;for(let e=0;e<2;e++){let t=e?o:n,u=0,_=0,d=0,c=0;for(;t[u]>="A"&&t[u]<="Z";)u++;let f=t.substring(0,u);t=t.substring(u),"CENTER"==f?_=.5:e&&f.startsWith("NORTH")?_=1:e&&f.startsWith("SOUTH")?_=0:!e&&f.endsWith("EAST")?_=1:!e&&f.endsWith("WEST")?_=0:e&&f.startsWith("TOP")?_=1:e&&f.startsWith("BOTTOM")?_=0:!e&&f.endsWith("RIGHT")?_=1:!e&&f.endsWith("LEFT")?_=0:d--;let[h,x]=t.split(":");h.startsWith("+")&&(h=h.substring(1)),h.endsWith("%")?_+=+h.substring(0,h.length-1)/100:d+=+h,x&&(c+=+x);let m=_*((e?l:r)-1)+d+c/(e?i:a);e?p=m:s=m}return[[s,p]]}}(e.Appearance||(e.Appearance={})),e.ReaderAppearance=void 0,(e.ReaderAppearance||(e.ReaderAppearance={})).base={icon:null,icon_state:null,name:null,appearance_flags:0,layer:2,plane:-32767,dir:2,color_alpha:-1,pixel_x:0,pixel_y:0,pixel_z:0,pixel_w:0,blend_mode:0,glide_size:8,screen_loc:null,transform:[1,0,0,0,1,0],invisibility:0,overlays:[],underlays:[],opacity:!1,density:!1,dir_override:!0,override:!1,color_matrix:null,maptext:null,mouse_opacity:1,animate_movement:1,filters:[],vis_flags:0},e.LONG_GLIDE=1,e.MAX_LAYER=32,e.SEE_MOBS=4,e.SEE_OBJS=8,e.SEE_THRU=512,e.SEE_TURFS=16,e.SOUND_MUTE=1,e.SOUND_PAUSED=2,e.SOUND_STREAM=4,e.SOUND_UPDATE=16,e.matrix_equals=function(e,t){return e[0]==t[0]&&e[1]==t[1]&&e[2]==t[2]&&e[3]==t[3]&&e[4]==t[4]&&e[5]==t[5]},e.matrix_interpolate=function e(t,l,n,o=!1){if(o)return[a(t[0],l[0],n),a(t[1],l[1],n),a(t[2],l[2],n),a(t[3],l[3],n),a(t[4],l[4],n),a(t[5],l[5],n)];let s=[0,0,0,0,0,0],p=[0,0,0,0,0,0],u=i(t,s),_=i(l,p);if(null==u||null==_)return e(t,l,n,!0);let d=_-u;if(d=((d+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,Math.abs(d)>=1e-4&&Math.abs(d)<Math.PI-1e-4){let e=u+n*d,t=[a(s[0],p[0],n),a(s[1],p[1],n),0,a(s[3],p[3],n),a(s[4],p[4],n),0],l=Math.cos(e),i=Math.sin(e);return r(t,[l,i,0,-i,l,0]),t[2]=a(s[2],p[2],n),t[5]=a(s[5],p[5],n),t}return e(t,l,n,!0)},e.matrix_invert=l,e.matrix_multiply=t,e.matrix_premultiply=r,e.matrix_translate=function(e,t=0,r=0){return e[2]+=t,e[5]+=r,e}}));

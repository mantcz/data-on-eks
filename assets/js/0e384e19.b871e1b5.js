"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},p="Introduction",i={unversionedId:"intro",id:"intro",title:"Introduction",description:"Data on Amazon EKS (DoEKS) is an open source repository to build, deploy and scale Data workloads on Amazon EKS.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Amazon EMR on EKS",permalink:"/docs/category/amazon-emr-on-eks"}},c={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Data on Amazon EKS (DoEKS) is an open source repository to build, deploy and scale Data workloads on Amazon EKS."),(0,o.kt)("p",null,"This repo provides the Terraform templates to build scalable data platform on Amazon EKS for the following categories."),(0,o.kt)("p",null,"\ud83d\ude80 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html"},"EMR on EKS")),(0,o.kt)("p",null,"\ud83d\ude80 ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Spark on EKS")),(0,o.kt)("p",null,"\ud83d\ude80 Custom Kubernetes Schedulers (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/"},"Apache YuniKorn"),", ",(0,o.kt)("a",{parentName:"p",href:"https://volcano.sh/en/"},"Volcano"),")"),(0,o.kt)("p",null,"\ud83d\ude80 Job Schedulers (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),", ",(0,o.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows"),")"),(0,o.kt)("p",null,"\ud83d\ude80 AI/ML on Kubernetes (e.g., KubeFlow, MLFlow, Tensorflow, PyTorch etc.)"),(0,o.kt)("p",null,"\ud83d\ude80 Distributed Databases (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://cassandra.apache.org/_/blog/Cassandra-on-Kubernetes-A-Beginners-Guide.html"},"Cassandra"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cockroachdb/cockroach-operator"},"CockroachDB"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mongodb/mongodb-kubernetes-operator"},"MongoDB")," etc.)"),(0,o.kt)("p",null,"\ud83d\ude80 Streaming Platforms (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/kafka"},"Apache Kafka"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/flink"},"Apache Flink"),", Apache Beam etc.)"),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Checkout the documentation for each section to deploy and run sample Spark/ML jobs."))}u.isMDXComponent=!0}}]);
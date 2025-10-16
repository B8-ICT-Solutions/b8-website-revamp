
import microserviceImg from '../../public/blogs-photos/microservice.png';
import { IconType } from '../components/TechIcon';

type BlogPost = {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    slug: string;
    icons: IconType[];
    content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "AWS 101: Amazon RDS",
    description: "A high-level overview of Amazon RDS, including its features, benefits, and use cases in Burmese.",
    category: 'AWS services',
    date: 'April 29, 2025',
    readTime: '3 min read',
    slug: 'amazon-rds-101',
    icons: ['aws'],
    content: `
<p>ဒီနေ့ အလှည့်ကျတာကတော့ AWS ရဲ့ database service ဖြစ်တဲ့ Amazon RDS ပဲဖြစ်ပါတယ်။ RDS ရဲ့ အရှည်ကောက်က Relational Database Service ဖြစ်ပါတယ်။ RDS က relational database ဖြစ်တဲ့အတွက် SQL use case အတွက်ပဲသုံးလို့ရမယ်။ NoSQL use case ဆိုရင်တော့ AWS မှာ service သပ်သပ်တွေရှိတယ်, document, dynamo, neptune စတာတွေပေါ့။</p>
<br></br>
<p>RDS မှာ MySQL, Postgresql စတဲ့ database မျိုးစုံသုံးလို့ရတယ်။ RDS ကလဲ EC2 instance လိုပဲ Database instance ရွေးပေးရတယ်။ ဘယ် size သုံးမှာလဲ ဘယ် spec သုံးမှာလဲဆိုပြီးရွေးပေးရတယ်။ ပြီးရင် RDS မှာ နာမည်အကြီးဆုံး ကတော့ Aurora ပဲ။ Aurora က တော်တော် high performance ဖြစ်တယ်၊ AWS ရဲ့ fully managed service လဲဖြစ်တယ်။ fully managed ဆိုတဲ့အတိုင်း hardware provisioning တွေ database setup တွေ patching တွေ AWS ဘက်ကတာဝန်ယူပေးတယ်။ Amazon Aurora က ရိုးရိုး RDS ထပ် ကောင်းတယ်ဆိုတော့ ဈေးကလဲပိုကြီးတာပေါ့။ ဒါမယ့် ပေးရတဲ့ဈေးနဲ့ ရတဲ့ performance နဲ့တော်တော်တန်တယ်လို့ပြောရမယ်။</p>
<br></br>
<p>RDS မှာ High Availability မြင့်အောင်လုပ်လို့ရတဲ့ features တွေရှိတယ်။ Read Replica တို့ Multi-AZ Deployment တို့ပေါ့။ ဒီ feature နှစ်ခုအကြောင်းရှင်းပြပေးမယ်။ Read Replica က database ကို ပုံစံတူ တစ်ခုခွဲထုတ်ထားတာပဲ။ Read Replica က ဘယ်အချိန်တွေသုံးလဲဆို application nature က read query က write query ထပ် နှစ်ဆလောက်များနေရင် Read Replica သုံးသင့်တယ်။ Read Replica ဆိုတဲ့အတိုင်း database ရဲ့ ပုံစံတူ ဒါပေမယ့် read လုပ်ဖို့အတွက်ပဲ။ primary database မှာ read query တွေ အရမ်းများလာတဲ့အခါ performance ကျပြီး write query အတွက်ပါ impact ရှိလာနိုင်တဲ့အတွက် Read Replica ခွဲထုတ်ရခြင်းသဘောပါ။ အဓိက ကတော့ write query ကို primary database မှာလုပ်မယ်။ primary database က write data ကို ပြီးမှ read replica တွေဆီ ပြန် replicate ပေးတာ။ ဒါကြောင့် read replica ကို asynchronous replication နဲ့ replicate တယ်လို့ခေါ်တယ်။</p>
<br></br>
<p>Multi-AZ Deployment ကကျတော့ Multi-AZ ဆိုတဲ့အတိုင်း Region တစ်ခုရဲ့ Availability Zone နှစ်ခုရှိတယ်ဆို အဲ့ AZ နှစ်ခုမှာ database တစ်လုံးစီ သွား deploy မှာ။ Primary တစ်လုံးနဲ့ Standby နောက်တစ်လုံး။ Multi-AZ Deployment မှာ database နှစ်လုံးကို ကြားထဲမှာ synchronous replication နဲ့ replicate လုပ်တယ်။ တစ်လုံးမှာ လာ write ရင် အဲ့ write data ကို နောက်တစ်လုံးကို တန်း replicate လုပ်ပေးတယ်။ </p>
<br><br>
<p>Read Write တစ်လုံးစီ ထားတဲ့ deployment မှာ read replica ကို primary database ရဲ့ region နဲ့ မတူတဲ့ region မှာ သွားဆောက်မယ်ဆိုရင်တော့ read replica ကဈေးပိုကြီးလိမ့်မယ်။ ဘာလို့ဆို region နှစ်ခု data replication လုပ်မှာဖြစ်တဲ့အတွက် data transfer in and out charges cost တွေရှိလာနိုင်တယ်။ </p>
`
  },
  {
    title: 'AWS 101: S3',
    description: 'An easy way to understand S3, including its features, benefits, and use cases in Burmese.',
    category: 'AWS services',
    date: 'May 10, 2025',
    readTime: '4 min read',
    slug: 'aws-s3-101',
    icons: ['aws'],
    content: `
<p>ဒီနေ့ ပြောမယ့် service ကတော့ S3 ပဲဖြစ်ပါတယ်။ S3 ရဲ့ အရှည်ကောက်က Simple Storage Service၊ အဲ့တာကြောင့်လဲ S သုံးလုံးပေါ့။ Simple ဆိုတဲ့အတိုင်း သုံးပုံသုံးနည်းအတော်လေးရိုးရှင်းတယ်။ </p>
<br></br>
<p>ထူးခြားတာက S3 က ပထမ ဦးဆုံး service ဖြစ်ပါတယ်။ S3 က ဘာလဲဆို object storage service။ ဓာတ်ပုံတွေ ဗီဒီရိုတွေ စတဲ့ files - object type data တွေကို S3 ပေါ်မှာသိမ်းဖို့သုံးတယ်ပေါ့။ ဒီလိုသိမ်းဖို့ဆို S3 bucket create ဖို့လိုတယ်။ S3 က Global Service ဖြစ်တဲ့အတွက် bucket create တဲ့နေရာမှာ restriction လေးတစ်ခုရှိတယ်။ ဘာလဲဆို bucket ကို unique name ပေးမှရတယ်။ ဒါဆိုဘာလို့ unique name ဖြစ်မှရတာလဲပေါ့? S3 က object storage ဖြစ်တဲ့အတွက် နေရာစုံကနေ လှမ်း access လုပ်ရတာတွေရှိတယ်။ endpoint url လိုပြီလေ လှမ်းခေါ်ဖို့။ bucket name က အဲ့ host header url ထဲမှာ ပါနေတော့ ထပ်နေလို့မရဘူး။ common name ပေးတူလိုက်ရင် ဘယ် url ကို လှမ်းခေါ်မလဲ ရှုပ်သွားမယ်လေ။ အဲ့ တာက S3 bucket unique name ပေးရတဲ့ အကြောင်းအရင်းတစ်ခုပေါ့။</p>
<br></br>
<p>S3 မှာ static website host လို့ရတဲ့ feature ပါတယ်။ frontend HTML CSS ဆိုရင် S3 ပေါ်မှာ bucket create ပြီး static website host ရုံပဲ။ အဲ့ static website ကို public ကနေ access လုပ်ဖို့အတွက် URL တစ်ခု S3 ဘက်ကနေချပေးမယ်။ အဲ့ URL က ကိုယ့်ရဲ့ bucket name ကို URL ပြောင်းထားတာပဲ။</p>
<br></br>
<p>S3 က Global Service ဆိုပေမယ့် bucket ကို ဘယ် region မှာ create မလဲရွေးလို့ရတယ်။ ကိုယ့် infra က ap-southeast-1 ထဲမှာဆို ap-southeast-1 မှာပဲ bucket create လုပ်သင့်တယ်။ ဘာလို့ဆို S3 က storage သိမ်းခ ဈေးအတော်လေး ပေါပေမယ့် region မတူရင် Data transfer in and out ကဈေးအတော်ပေးရတယ်။</p>
<br></br>
<p>ဆိုတော့ S3 မှာဘာတွေလုပ်လို့ရလဲတစ်ချက်ပြောကြမယ်။ S3 မှာ lifecycle policy တွေသတ်မှတ်ပေးလ်ို့ရတယ်။ ဥပမာ ကိုယ်က bucket ထဲမှာ အရေးမကြီးတဲ့ data တွေအများကြီးသိမ်းထားတယ်ဆိုပါစို့။ အများကြီးဆိုတဲ့အတိုင်း cloud storage cost ကတော့ရှိမှာပဲ။ data တွေထပ်တိုးလာလေ cost ကတက်လာလေပေါ့။ ဒါပေမယ့် အရေးမကြီးဘူးဆိုတော့ data တွေကဖျက်ပစ်ပျောက်သွားလဲ ကိစ္စမရှိဘူးဆိုရင် lifecycle policy တွေသတ်မှတ်ပေးထားလို့တယ်။ ဥပမာ ဒီ bucket ထဲမှာ နောက်ဆုံး 30 ရက်က data တွေပဲထားမယ်၊ 30 ရက်ထပ်ကြာတဲ့ data တွေဆို S3 က automatic ဖျက်ပစ်ပေးသွားမယ်။</p>
<br></br>
<p>Lifecycle policy မှာ Storage Class ဆိုပြီးလဲခွဲထားသေးတယ်။ ဘာ storage class တွေရှိလဲဆို Standard, Standard-IA, Intelligent-Tiering, S3 OneZone-IA, S3 Glacier, Deep Archive ဆိုပြီးရှိတယ်။ အပေါ် ဥပမာလို ရက် 30 ကြာရင် မဖြတ်ပြစ်ဘဲ Lifecycle policy ကိုသုံးပြီးတော့ အချိန်ဘယ်လောက်ကြာရင် ဒီ storage class ကနေ စျေးပိုသက်သာတဲ့ storage class ကိုကူးဆိုပြီးတော့လဲ policy တွေသတ်မှတ်ပေးထားလို့ရတယ်။</p>
<br></br>
<p>ဒီ Storage Class တွေကလဲ တစ်ခုနဲ့တစ်ခု အလုပ်လုပ်ပုံမတူဘူး။ ဒီ storage class တွေအကြောင်းတော့ နောက် post တစ် post မှာပြောပြပေးမယ်။</p>
<br></br>
`
  },
  {
    title: 'AWS 101: Amazon Route 53',
    description: 'Important features of Route53 to understand what it is and how it works in Burmese.',
    category: 'AWS services',
    date: 'May 6, 2025',
    readTime: '6 min read',
    slug: 'aws-r53-101',
    icons: ['aws'],
    content: `
<p>Route 53 က AWS ရဲ့ DNS (Domain Name System) managment service၊ ပိုပီးမြင်သားအောင်ပြောရမယ်ဆိုရင် CloudFlare တို့ GoDaddy တို့လို ပေါ့။</p>
<br></br>
<p>Route 53 ရဲ့ domain registration, DNS routing, health check စတာတွေ လူသုံးများကြတယ်။</p>
<br></br>
<p>DNS service ဖြစ်လို့ ကိုယ့်ရဲ့ website တွေဘာတွေအတွက် domain register လို့ရမယ်။ web browser ကနေ domain or subdomain ကို access လှမ်းလုပ်တဲ့အခါ ကိုယ့်ရဲ့ web application ကို Route 53 က route လုပ်ပေးတယ်။ User က domain ကနေ access လှမ်းလုပ်ရင် ကိုယ့် resources တွေ internet reachable ဖြစ်သေးလား မဖြစ်တော့ဘူးလား fail နေလား alive ဖြစ်သေးလား monitor ပေးတာတော့ health check feature ပေါ့။</p>
<br></br>
<p>တခြား features တွေအနေနဲ့ဆိုရင် Route 53 Resolver ကိုလဲအသုံးများတယ်။  On-premise က domain ကို AWS ထဲကိုဖြစ်ဖြစ် Route 53 က domain ကို on-premise ကိုပဲဖြစ်ဖြစ် resolve လုပ်ချင်တယ်ဆိုရင် Route 53 Resolver ကိုသုံးပီး inbound endpoint outbound endpoint သတ်မှတ်ပေးလို့ရတာတွေလဲရှိတယ်။ </p>
<br></br>
<p>Route 53 မှာ domain register လုပ်မယ်ဆိုရင် AWS က hosted zone တစ်ခုဆောက်ပေးတယ်။ Public Hosted Zone နဲ့ Private Hosted Zone ဆိုပြီး နှစ်မျိုးရှိတယ်။ ဘာကွာလဲဆို Public Hosted Zone မှာ public ဆိုတဲ့အတိုင်း internet access ရမယ်။ Private Hosted Zone ကကျတော့ VPC (Virtual Private Cloud) အတွင်းထဲမှာပဲသုံးလို့ရမယ်။ </p>
<br></br>
<p>Route 53 က DNS record type တော်တော်များများ ကိုလဲ support လုပ်ပေးတယ်။ A, AAAA, CNAME, MX records တွေအပြင်တစ်ခြား records တွေလဲ support ပေးတယ်။ အသေးစိတ်သိချင်ရင်တော့ AWS official documentation မှာသွားပီးဖတ်လို့ရတယ်။ ဒီမှာ ထူးခြားတာက Alias ဆိုပီး record type တစ်မျိုး Route 53 က support လုပ်ပေးတယ်။ ဒီ record type ကိုသုံးပြီး AWS resources တွေရဲ့ DNS ကို map လုပ်လို့ရတယ်။ CNAME နဲ့ Alias ကတူသလိုလိုရှိတယ် ဒါမယ့် အလွယ်မှတ်ရရင် CNAME က domain တစ်ခုကနေ domain နောက်တစ်ခုကို map ရင်သုံးတယ်။ Alias ကကျ AWS resources တွေရဲ့ dns ကို map ရင်သုံးတယ်။</p>
<br></br>
<p>Traffic management အတွက် Route 53 ရဲ့ routing policy တွေလဲ သုံးလို့ရတယ်။ Routing policy တွေအနေနဲ့ဆို simple routing, weighted routing, latency-based routing, failover routing, geo-location routing, geo-proximity routing, multi-value answer routing ဆိုပြီးအမျိုးမျိုးရှိတယ်။ </p>
<p>ချုပ်ပြီး လိုတိုရှင်း ပြောပြရမယ်ဆို -</p>
<ul class="list-disc list-inside space-y-2 my-4">
  <li><strong>Simple routing:</strong> single resource တစ်ခုထဲကို traffic route လုပ်ပေးတယ်။</li>
  <li><strong>Weighted routing:</strong> traffic လွှတ်တဲ့ အခါ multiple resources တွေကို traffic ရဲ့ ဘယ်လောက် percentage ဘဲ ဒီ resource ကိုသွား ဒီ resource ကိုကျ ဒီလောက် percentage သွားဆိုပီး ဒီ routing policy နဲ့သတ်မှတ်ပေးလို့ရတယ်။ </li>
  <li><strong>Latency-based routing:</strong> network latency အနည်းဆုံးနဲ့  route ချင်ရင်တော့ ဒီ policy ကိုသုံးကြတယ်။</li>
  <li><strong>Failover routing:</strong> ဒီ routing policy ကျတော့ primary resource နဲ့ secondary resource နှစ်ခုရှိတယ်ဆိုပါစို့၊ primary resource ကအကြောင်းအမျိုးမျိုးကြောင့် fail သွားတဲ့အခါ secondary resource ကို automatic route လုပ်ပေးတယ်။</li>
  <li><strong>Geo-location routing:</strong> user ရဲ့ location ပေါ်မူတည်ပီး route လုပ်ပေးတာ။ ဥပမာ - Myanmar က user က access လှမ်းလုပ်မယ်ဆို Asia ထဲက server ကိုဘဲ route လုပ်မယ်၊ U.S က access လှမ်းလုပ်မယ်ဆို U.S က serve ကိုဘဲ route လုပ်ပေးမယ်ပေါ့။ ဒီ location ကလာတဲ့ user ရဲ့ traffic ဆို ဒီ ကိုဘဲ route လုပ်ပေးမယ်ဆိုတဲ့သဘော။</li>
</ul>
<br></br>
<p>Cloud service ဖြစ်တာနဲ့အညီ High Available ဖြစ်တယ် scaleable လဲဖြစ်တယ်။ DNS traffic တွေရဲ့ volume ပေါ်မူတည်ပြီး auto scale ပေးတဲ့ feature ပါတယ်။ Traffic management အတွက်လဲ routing policy တွေရှိတယ်။ application ရဲ့ performance ကို monitor လုပ်ပေးတဲ့ health check နဲ့ failover feature လဲပါတယ်။ AWS native service ဖြစ်တဲ့အတွက် Infrastructure သာ AWS ပေါ်မှာရှိတယ်ဆို one stop လုပ်ချင်ရင်သုံးသင့်တဲ့ service လို့ပြောရမယ်။</p>
<br></br>
`
  },
  {
    title: 'AWS 101: EC2',
    description: 'The most basic service of AWS, undestanding the usage and how it is important',
    category: 'AWS services',
    date: 'May 9, 2025',
    readTime: '3 min read',
    slug: 'aws-ec2-101',
    icons: ['aws'],
    content: `
<p>AWS ရဲ့ basic အကျဆုံး service တစ်ခုအကြောင်း 101 လုပ်ပေးသွားမယ်။ အဲ့ service ကတော့ Elastic Compute Cloud (EC2) ပဲဖြစ်ပါတယ်။ EC2 service က ဘာလဲဆို server တွေငှါးသုံးလို့ရတဲ့ service ဘဲ။ Linux ဘဲဖြစ်ဖြစ် Windows ဘဲဖြစ်ဖြစ် server တစ်လုံးအလွယ်တကူလေး launch လုပ်ပြီးတော့ ကောက်သုံးလိုက်လို့ရတယ်။ မသုံးဘူးဆိုရင်လဲရတယ် ပြန်ဖျက်ရင်ဖျက် မဖျက်ရင် ရပ်ထားလိုက်ရုံဘဲ။ pay-as-you-go ဖြစ်တဲ့ အတွက် ၁နာရီ run ရင် ၁နာရီဖိုးပဲကောက်မယ်။ နာရီ ၂၀ run ရင် နာရီ ၂၀ ဖိုးပဲပေးရမယ်ပေါ့။ </p>
<br></br>
<p>EC2 မှာ server တွေကို EC2 Instance လို့ခေါ်တယ်။ ဒီကနေစပြီး server လို့မသုံးတော့ဘူး instance လို့ပဲသုံးတော့မယ်။ Instance က size စုံရှိတယ်၊ specification တွေစတဲ့ vCPU, RAM တွေစိတ်ကြိုက်ရွေးလို့ရမယ်။ ကိုယ့် usage ပေါ်မူတည်ပြီး instance type တွေရှိတယ် t series, m series, r series စသဖြင့် ဥပမာ r series ဆို memory ဦးစားပေး use case တွေမှာသုံးကြတယ်။ t3.medium လောက်ဆို backend ပါတဲ့ personal website လေးကောင်းကောင်းတင်သုံးလို့ရနေမယ်။ ကိုယ်သုံးတဲ့ series ပေါ်မူတည်ပြီး စျေးတစ်ခုနဲ့တစ်ခုမတူဘူးပေါ့။ </p>
<br></br>
<p>EC2 instance ရဲ့ network အဝင်အထွက်ကို security group မှာ inbound rule သက်မှတ်ပေးလို့ရတယ်။ outbound rule သတ်မှတ်ပေးစရာမလိုဘူး security group က stateful မလို့ ဝင်လာသမျှ inbound အတိုင်းအကုန်ပြန်ထွက်နိုင်တယ်။ </p>
<br></br>
<p>တစ်ခြား point out လုပ်ရမယ့် feature ကတော့ Auto Scaling Group ရှိတယ်။ သူက Auto Scaling Group ဆိုတဲ့အတိုင်း instance တွေကို Group လုပ်ပေးပြီး workload ပေါ်မူတည်ပြီး automatic scale in scale out လုပ်ပေးတယ်။ ASG သုံးဖို့ဆို Launch template ကို create ဖို့လိုတယ်။ Launch template ဆိုတာကတော့ ကိုယ်လိုချင်တဲ့ instance ပဲဖြစ်ဖြစ် customized ထားတဲ့ ဟာပဲဖြစ်ဖြစ် template ပြင်ပေးရတာ ဘယ် OS သုံးမယ် ပေါ့။ ပြီးရင် ASG create တဲ့အခါ အဲ့ template လေးကိုသုံးလိုက်ရုံပဲ။ အဲ့တာဆို ကိုယ့်ရဲ့ instance က ၃ လုံးသတ်မှတ်ထားရင် ၃လုံးပုံမှန်အတိုင်း run နေမယ်။ workload တက်လာရင်တော့ load ပေါ်မူတယ်ပြီး ၄ လုံး (သို့) ၅ လုံးထိ auto scale out သွားမယ်။ load ပြန်ကျသွားရင် ပုံမှန် ၃လုံးထိ scale in ပြန်ဖြစ်သွားလိမ့်မယ်။ Autoscaling patterns တွေ ကစားဖို့လိုတယ်။ scheduled scaling တို့ Target tracking တို့ အသုံးများတယ်။ </p>
<br></br>
<p>101 ဆိုတော့ EC2 အတွက်ကတော့ဒီလောက်ပါပဲ။ နောက် features တွေ services တွေကိုတော့ နောက် post နဲ့အတူပြန်လာခဲ့ပါမယ်။ </p>
<br></br>
`
  },
  {
    title: "Modernize Applications with Micro-services Using Amazon EKS",
    description: "A good reference for Micro-services architecture.",
    category: 'Micro-service',
    date: 'August 10, 2024',
    readTime: '2 min read',
    slug: 'micro-service',
    icons: ['aws', 'kubernetes'],
    content: `
<p>This architecture is the high level architecture showcase of one of our recent works for a micro-services application on Amazon EKS.</p>
<br>
<ul class="list-disc list-inside space-y-2 my-4">
  <li><strong>EKS:</strong> Kubernetes Cluster, Compute and Addons</li>
  <li><strong>Istio:</strong> Ingress</li>
  <li><strong>Envoy:</strong> Proxy and Rate-limit Filtering</li>
  <li><strong>Github Actions:</strong> Continuous Integration</li>
  <li><strong>Argo CD:</strong> Continuous Deployment</li>
</ul>
<br>
<img src="/blogs-photos/microservice.png" alt="Microservice Architecture on EKS" class="w-full h-auto my-8 rounded-lg shadow-lg" />
<br>
<p>In next posts, we are sharing more details on other parts like Databases, Observability, Logging, Security, Auditing and so on.</p>
<br>
`
  }
]; 
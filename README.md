# 🌐 B8 Website


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The app will run at:

```
http://localhost:3000/
```
---

## ⚙️ Tech Stack

- **Next.js** - Framework
- **Framer Motion** - Animations

---

## 🗂️ Project Structure

```

├── b8-website-revamp /
│   ├── app/
│   ├── about-us/
│   ├── blogs/
│   ├── components/
│   ├── contact-us/
│   ├── data/
│   ├── Home/
│   ├── services/
│   ├── utils/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


```

---

## 🧩 Customization

👥 Team Members\
Update the team members in /app/data/team.ts:

```
const teamMembers = [
  { 
    name: 'Minn Thit Kyaw',
    position: 'Chief Technology Officer',
    photo: '/pfps/min-thit-kyaw.png' 
  }
];
```

📝 Blog\
Update the blogs  in /app/data/blog.ts:

```
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
<p>ဒီနေ့ အလှည့်ကျတာကတော့ AWS ရဲ့ database service ဖြစ်တဲ့ Amazon RDS ပဲဖြစ်ပါတယ်။ RDS ရဲ့ အရှည်ကောက်က Relational Database Service ဖြစ်ပါတယ်။ RDS က relational database ဖြစ်တဲ့အတွက် SQL use case အတွက်ပဲသုံးလို့ရမယ်။ NoSQL use case ဆိုရင်တော့ AWS မှာ service သပ်သပ်တွေရှိတယ်, document, dynamo, neptune စတာတွေပေါ့။</p>
<br></br>
<p>RDS မှာ MySQL, Postgresql စတဲ့ database မျိုးစုံသုံးလို့ရတယ်။ RDS ကလဲ EC2 instance လိုပဲ Database instance ရွေးပေးရတယ်။ ဘယ် size သုံးမှာလဲ ဘယ် spec သုံးမှာလဲဆိုပြီးရွေးပေးရတယ်။ ပြီးရင် RDS မှာ နာမည်အကြီးဆုံး ကတော့ Aurora ပဲ။ Aurora က တော်တော် high performance ဖြစ်တယ်၊ AWS ရဲ့ fully managed service လဲဖြစ်တယ်။ fully managed ဆိုတဲ့အတိုင်း hardware provisioning တွေ database setup တွေ patching တွေ AWS ဘက်ကတာဝန်ယူပေးတယ်။ Amazon Aurora က ရိုးရိုး RDS ထပ် ကောင်းတယ်ဆိုတော့ ဈေးကလဲပိုကြီးတာပေါ့။ ဒါမယ့် ပေးရတဲ့ဈေးနဲ့ ရတဲ့ performance နဲ့တော်တော်တန်တယ်လို့ပြောရမယ်။</p>
<br></br>
<p>RDS မှာ High Availability မြင့်အောင်လုပ်လို့ရတဲ့ features တွေရှိတယ်။ Read Replica တို့ Multi-AZ Deployment တို့ပေါ့။ ဒီ feature နှစ်ခုအကြောင်းရှင်းပြပေးမယ်။ Read Replica က database ကို ပုံစံတူ တစ်ခုခွဲထုတ်ထားတာပဲ။ Read Replica က ဘယ်အချိန်တွေသုံးလဲဆို application nature က read query က write query ထပ် နှစ်ဆလောက်များနေရင် Read Replica သုံးသင့်တယ်။ Read Replica ဆိုတဲ့အတိုင်း database ရဲ့ ပုံစံတူ ဒါပေမယ့် read လုပ်ဖို့အတွက်ပဲ။ primary database မှာ read query တွေ အရမ်းများလာတဲ့အခါ performance ကျပြီး write query အတွက်ပါ impact ရှိလာနိုင်တဲ့အတွက် Read Replica ခွဲထုတ်ရခြင်းသဘောပါ။ အဓိက ကတော့ write query ကို primary database မှာလုပ်မယ်။ primary database က write data ကို ပြီးမှ read replica တွေဆီ ပြန် replicate ပေးတာ။ ဒါကြောင့် read replica ကို asynchronous replication နဲ့ replicate တယ်လို့ခေါ်တယ်။</p>
<br></br>
<p>Multi-AZ Deployment ကကျတော့ Multi-AZ ဆိုတဲ့အတိုင်း Region တစ်ခုရဲ့ Availability Zone နှစ်ခုရှိတယ်ဆို အဲ့ AZ နှစ်ခုမှာ database တစ်လုံးစီ သွား deploy မှာ။ Primary တစ်လုံးနဲ့ Standby နောက်တစ်လုံး။ Multi-AZ Deployment မှာ database နှစ်လုံးကို ကြားထဲမှာ synchronous replication နဲ့ replicate လုပ်တယ်။ တစ်လုံးမှာ လာ write ရင် အဲ့ write data ကို နောက်တစ်လုံးကို တန်း replicate လုပ်ပေးတယ်။ </p>
<br><br>
<p>Read Write တစ်လုံးစီ ထားတဲ့ deployment မှာ read replica ကို primary database ရဲ့ region နဲ့ မတူတဲ့ region မှာ သွားဆောက်မယ်ဆိုရင်တော့ read replica ကဈေးပိုကြီးလိမ့်မယ်။ ဘာလို့ဆို region နှစ်ခု data replication လုပ်မှာဖြစ်တဲ့အတွက် data transfer in and out charges cost တွေရှိလာနိုင်တယ်။ </p>
`
  }]
```



---

---

## 🔍 SEO Configuration

All SEO-related settings are located inside the app/ directory.

🗺️ Sitemap

Edit /app/sitemap.ts to configure your website’s sitemap for search engines.

🤖 Robots.txt

Update /app/robots.ts to manage which pages should be indexed or excluded.

🧠 Metadata

Inside each page (e.g., /app/page.tsx), use the built-in Next.js Metadata API for titles, descriptions, and open graph tags:

```
export const metadata: Metadata = {
  title: 'B8 ICT Solutions',
  description:
    'B8 helps to manage your technology infrastructure, from consultation to execution.',
  keywords: ['B8', 'ICT', 'Solutions', 'Technology', 'Consulting'],
  metadataBase: new URL(BASEDOMAIN),
  openGraph: {
    title: 'B8 ICT Solutions',
    description:
      'B8 helps to manage your technology infrastructure, from consultation to execution.',
    url: BASEDOMAIN,
    type: 'website',
    images: [
      {
        url: `${BASEDOMAIN}/logo.png`,
        width: 800,
        height: 600,
        alt: 'B8 Logo',
      },
    ],
  },
};
```

![App Screenshot](https://res.cloudinary.com/dbqyaigcg/image/upload/v1760709918/Screenshot_2025-10-17_at_13.51.44_sd9tzo.png)
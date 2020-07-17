interface ContentInfo {
  url: string;
  title: string;
  count: number;
}

// 指定の型をもつプロパティ群を生成する -Record<K,T>
// ContentInfo型である、top/contact/aboutプロパティを定義
let mySite: Record<'top' | 'contact' | 'about', ContentInfo> = 
{
  top: { url:'index.php', title: 'トップ', count: 100 },
  contact: { url:'mail.php', title: '問い合わせ', count: 105 },
  about: { url:'me.php', title: '概要', count: 108 },  
};

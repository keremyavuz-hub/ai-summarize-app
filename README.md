# AI Summarizer

AI Summarizer, kullanıcıların uzun metinleri OpenAI API kullanarak hızlı ve anlaşılır bir şekilde özetlemesini sağlayan bir Next.js uygulamasıdır. Backend ve frontend aynı proje içinde Next.js App Router kullanılarak geliştirilmiştir.

## Özellikler

- Kullanıcının metin girerek özet oluşturabilmesi
- OpenAI API ile gerçek özet üretimi
- Approve & Save seçeneğiyle özetin veritabanına kaydedilmesi
- Try Again seçeneğiyle özetin yeniden oluşturulması
- React Hook Form ve Zod ile form doğrulama
- Özet geçmişi görüntüleme (/summaries)
- Sayfalama (pagination)
- Copy to Clipboard özelliği
- Son 5 özetin localStorage içinde saklanması
- ErrorBoundary ile hata yakalama
- TailwindCSS ile sade arayüz
- Ana sayfadan summarize ve summaries linklerine yönlendirme

## Kullanılan Teknolojiler

- Next.js (App Router)
- React + TypeScript
- React Hook Form
- Zod
- Prisma ORM
- PostgreSQL
- OpenAI API
- TailwindCSS
- LocalStorage

## Proje Kurulumu

### 1. Depoyu klonlayın

```
git clone <repo-url>
cd ai-summarizer
```

### 2. Bağımlılıkları yükleyin

```
yarn install
```

### 3. .env dosyasını oluşturun

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/summarizer"
OPENAI_API_KEY="YOUR_OPENAI_KEY"
```

### 4. Prisma ayarlarını yapın

```
npx prisma generate
npx prisma migrate dev --name init
```

### 5. PostgreSQL başlatma (Mac için)

```
brew services start postgresql@16
```

### 6. Geliştirme ortamını başlatın

```
yarn dev
```

## Özetleme Akışı

1. Kullanıcı /summarize sayfasına metin yazar.
2. "Summarize" butonuna basınca /api/summarize endpoint'i çağrılır.
3. OpenAI API özet üretir.
4. Kullanıcı:
   - Approve & Save ile DB'ye kaydeder.
   - Try Again ile yeni özet üretir.
5. Kayıt sonrası kullanıcıya başarılı mesaj gösterilir.
6. Son 5 özet ayrıca localStorage’da saklanır.

## Özet Geçmişi (/summaries)

- Tüm özetlerin listelenmesi
- Kelime bazlı truncate
- Copy to Clipboard özelliği
- Son 1 dakikada eklenen özetlere “New” etiketi
- Sayfalama desteği

## LocalStorage Desteği

- En fazla son 5 özet saklanır
- originalText saklanmaz
- Yalnızca summary ve createdAt kaydedilir

## Hata Yönetimi

Uygulama özel bir ErrorBoundary içerir. Beklenmeyen bir hata oluştuğunda kullanıcıya sade bir hata mesajı gösterilir:

"An unexpected technical issue occurred on this page.
This is a test error message.
Please contact the technical support team."

## Ana Sayfa

Giriş ekranında iki yönlendirme vardır:

- Summarize Text
- View Summaries

## Sonuç

AI Summarizer projesi istenen gereksinimlerin tamamını karşılamaktadır. Modern, sade, bakımı kolay ve genişletilebilir bir yapı sunar.

![Açıklama](./public/assets/demo-img01.png)

![Açıklama](./public/assets/demo-img02.png)

![Açıklama](./public/assets/demo-img03.png)

![Açıklama](./public/assets/demo-img04.png)

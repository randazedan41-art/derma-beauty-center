/**
 * اتجاه التصميم: «العيادة الهادئة» — واجهة تحريرية علاجية دافئة بالأخضر الساج والعاجي.
 * تعزز الصفحة الثقة والوضوح ومساحة التنفّس، وتتجنب لغة الوعود المبالغ فيها.
 */
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownLeft,
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    id: "01",
    title: "الجلدية العلاجية",
    text: "تشخيص وخطة متابعة لحالات البشرة والشعر، مبنية على فهم احتياجاتك اليومية.",
    icon: Stethoscope,
    tone: "sage",
  },
  {
    id: "02",
    title: "الليزر والتقنيات",
    text: "جلسات مختارة بعناية لتحقيق خطة علاجية مناسبة لبشرتك وتوقعاتك.",
    icon: Sparkles,
    tone: "peach",
  },
  {
    id: "03",
    title: "عناية الشعر والفروة",
    text: "استشارة متخصصة لفهم صحة الفروة ووضع روتين علاجي واضح وقابل للمتابعة.",
    icon: ShieldCheck,
    tone: "ink",
  },
];

const journey = [
  { step: "01", title: "احجزي موعدك", text: "اختاري الوقت الأنسب، وسنتواصل لتأكيد الزيارة." },
  { step: "02", title: "استشارة دقيقة", text: "نستمع لاحتياجك ونقيّم الحالة بهدوء ووضوح." },
  { step: "03", title: "خطة خاصة بك", text: "نرسم خطوات العناية والمتابعة وفق ما يناسبك." },
];

const navItems = [
  { label: "الرئيسية", href: "#الرئيسية" },
  { label: "خدماتنا", href: "#الخدمات" },
  { label: "عن المركز", href: "#عن-المركز" },
  { label: "خطواتك", href: "#خطواتك" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("تم استلام طلبك المبدئي", {
      description: "سيتواصل معك فريق المركز لتأكيد الموعد المناسب.",
    });
    event.currentTarget.reset();
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-[#fbf9f4] text-[#173832]">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container flex items-center justify-between gap-4">
          <a href="#الرئيسية" className="brand" aria-label="ديرما - الرئيسية">
            <img src="/manus-storage/derma-symbol_711e3b0a.png" alt="رمز ديرما" className="brand-mark" />
            <span className="brand-copy">
              <strong>ديرما</strong>
              <span>مركز الجلدية والتجميل</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#الحجز" className="book-button hidden sm:inline-flex">
            احجزي استشارتك <ArrowLeft size={17} strokeWidth={2.2} />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="mobile-toggle lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <nav className="container grid gap-1 py-4" aria-label="التنقل على الهاتف">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="mobile-nav-link" onClick={closeMenu}>
                  {item.label}
                  <ArrowLeft size={16} />
                </a>
              ))}
              <a href="#الحجز" className="book-button mt-3 justify-center" onClick={closeMenu}>
                احجزي استشارتك <ArrowLeft size={17} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="الرئيسية" className="hero-section">
          <div className="hero-halo hero-halo--top" aria-hidden="true" />
          <div className="hero-halo hero-halo--bottom" aria-hidden="true" />
          <div className="container relative z-10 grid items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.04fr_.96fr] lg:pb-24 lg:pt-40">
            <div className="hero-copy order-2 lg:order-1">
              <div className="eyebrow"><span /> استشاري جلدية وتناسلية وتجميل</div>
              <h1>رعاية تبدأ <em>بالفهم،</em><br />وتظهر في التفاصيل.</h1>
              <p className="hero-intro">
                لأن كل بشرة لها قصتها، نقدم استشارات متخصصة وخطط عناية مدروسة تجمع بين العلم والاهتمام الحقيقي.
              </p>
              <div className="hero-actions">
                <a href="#الحجز" className="book-button book-button--large">
                  احجزي موعدًا <ArrowLeft size={18} />
                </a>
                <a href="#الخدمات" className="text-button">
                  اكتشفي الخدمات <ArrowDownLeft size={19} />
                </a>
              </div>
              <div className="hero-assurance">
                <span className="assurance-icon"><Check size={15} strokeWidth={3} /></span>
                <p><strong>خطتك من أول زيارة</strong><span>استشارة واضحة، ووقت كافٍ لفهم ما تحتاجينه.</span></p>
              </div>
            </div>

            <div className="hero-visual order-1 lg:order-2">
              <div className="hero-image-frame">
                <img src="/manus-storage/derma-hero-consultation_4f0bedce.jpg" alt="استشارة هادئة مع طبيبة جلدية" />
              </div>
              <div className="hero-orbit" aria-hidden="true" />
              <div className="hero-note">
                <span>منهجنا</span>
                <strong>رعاية دقيقة<br />بلمسة إنسانية</strong>
              </div>
              <div className="hero-seal" aria-hidden="true"><span>DERMA</span><i>+</i><span>CARE</span></div>
            </div>
          </div>
          <div className="hero-scroll-note" aria-hidden="true"><span /> تمرّري لاكتشاف رحلتك</div>
        </section>

        <section className="trust-band">
          <div className="container grid gap-7 md:grid-cols-3">
            <p><span className="trust-number">01</span> خصوصية واهتمام في كل استشارة</p>
            <p><span className="trust-number">02</span> خطط علاجية وعناية شخصية</p>
            <p><span className="trust-number">03</span> رؤية طبية لنتائج واقعية</p>
          </div>
        </section>

        <section id="الخدمات" className="services-section section-shell">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <p className="section-kicker">مساحات من العناية</p>
                <h2>ما الذي تحتاجه<br /><em>بشرتك اليوم؟</em></h2>
              </div>
              <p className="section-lead">اختاري نقطة البداية؛ وفي الاستشارة نرتّب معًا أولوياتك وخطواتك القادمة.</p>
            </div>

            <div className="services-layout">
              <article className="feature-service">
                <div className="feature-image">
                  <img src="/manus-storage/derma-laser-room_09534532.jpg" alt="غرفة هادئة لتقنيات الليزر والعناية بالبشرة" />
                </div>
                <div className="feature-service-copy">
                  <div className="service-id">01 — تقنياتنا</div>
                  <h3>التقنية حين تخدم<br />النتيجة الطبيعية.</h3>
                  <a className="round-arrow" href="#الحجز" aria-label="حجز استشارة لتقنيات الليزر"><ArrowLeft size={21} /></a>
                </div>
              </article>

              <div className="service-stack">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article key={service.id} className={`service-card service-card--${service.tone}`}>
                      <div className="service-card-top"><span>{service.id}</span><Icon size={25} strokeWidth={1.5} /></div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href="#الحجز" className="service-link">استشارة حول الخدمة <ArrowLeft size={16} /></a>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="عن-المركز" className="doctor-section section-shell">
          <div className="container doctor-grid">
            <div className="doctor-visual">
              <div className="doctor-image">
                <img src="/manus-storage/derma-hair-care_c95256b3.jpg" alt="استشارة للعناية بالشعر وفروة الرأس" />
              </div>
              <p className="image-caption">التشخيص الجيد هو الخطوة الأولى في كل خطة عناية.</p>
              <div className="shape-leaf" aria-hidden="true" />
            </div>
            <div className="doctor-copy">
              <p className="section-kicker">من الاستشارة إلى المتابعة</p>
              <h2>تفاصيلك تستحق<br /><em>رأيًا متخصصًا.</em></h2>
              <p className="doctor-description">في مركز ديرما، الاستشارة ليست خطوة سريعة قبل الجلسة. هي وقت مُخصص لفهم ما يزعجك، ومناقشة الخيارات بأمانة، وبناء قرار يناسبك أنت.</p>
              <div className="doctor-points">
                <div><span><Check size={15} /></span><p><strong>أولوية للتشخيص</strong><small>نبدأ بفهم الحالة قبل اقتراح أي إجراء.</small></p></div>
                <div><span><Check size={15} /></span><p><strong>توقعات واضحة</strong><small>نناقش المسار والنتائج الممكنة بواقعية.</small></p></div>
              </div>
              <a href="#الحجز" className="text-button text-button--sage">تعرفي على خطة زيارتك <ArrowLeft size={18} /></a>
            </div>
          </div>
        </section>

        <section id="خطواتك" className="journey-section section-shell">
          <div className="journey-arc" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="section-heading journey-heading">
              <div><p className="section-kicker">رحلة بسيطة وواضحة</p><h2>ثلاث خطوات<br /><em>نبدأ بها معًا.</em></h2></div>
              <a href="#الحجز" className="book-button book-button--light">لنحدد موعدًا <ArrowLeft size={17} /></a>
            </div>
            <div className="journey-list">
              {journey.map((item) => (
                <article key={item.step} className="journey-item">
                  <div className="journey-step">{item.step}</div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <ArrowLeft className="journey-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="الحجز" className="booking-section section-shell">
          <div className="container booking-wrap">
            <div className="booking-copy">
              <p className="section-kicker">موعدك الأول</p>
              <h2>لنتحدث عن<br /><em>ما يناسبك.</em></h2>
              <p>أرسلي طلبًا مبدئيًا، وسيُنسّق فريقنا معك الوقت والخدمة المناسبة قبل تأكيد الموعد.</p>
              <div className="booking-contact">
                <a href="tel:+201000000000"><span><Phone size={17} /></span> +20 100 000 0000</a>
                <a href="https://wa.me/201000000000" target="_blank" rel="noreferrer"><span><MessageCircle size={17} /></span> تواصلي عبر واتساب</a>
              </div>
            </div>
            <form className="booking-form" onSubmit={handleBooking}>
              <label>الاسم الكامل<input required name="name" type="text" placeholder="اكتبي اسمك" /></label>
              <div className="form-grid">
                <label>رقم الهاتف<input required name="phone" type="tel" placeholder="01X XXX XXXX" /></label>
                <label>الخدمة المهتمة بها
                  <span className="select-wrap"><select required name="service" defaultValue=""><option value="" disabled>اختاري الخدمة</option><option>الجلدية العلاجية</option><option>الليزر والتقنيات</option><option>عناية الشعر والفروة</option><option>استشارة تجميلية</option></select><ChevronDown size={17} /></span>
                </label>
              </div>
              <label>رسالة اختيارية<textarea name="note" rows={3} placeholder="هل هناك ما تودين مناقشته في الاستشارة؟" /></label>
              <button type="submit" className="book-button book-button--submit">إرسال طلب الموعد <ArrowLeft size={18} /></button>
              <p className="form-note"><ShieldCheck size={15} /> معلوماتك تُستخدم للتواصل بشأن الحجز فقط.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#الرئيسية" className="brand brand--footer" aria-label="ديرما - الرئيسية">
            <img src="/manus-storage/derma-symbol_711e3b0a.png" alt="رمز ديرما" className="brand-mark" />
            <span className="brand-copy"><strong>ديرما</strong><span>مركز الجلدية والتجميل</span></span>
          </a>
          <div className="footer-hours"><Clock3 size={17} /><span>السبت — الخميس <strong>11 ص — 8 م</strong></span></div>
          <div className="social-links"><a href="#" aria-label="إنستغرام"><Instagram size={19} /></a><a href="#" aria-label="فيسبوك"><Facebook size={19} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 مركز ديرما. جميع الحقوق محفوظة.</span><span>رعاية جلدية · تجميل · ليزر</span></div>
      </footer>
    </div>
  );
}
